import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const CAPE_DIR = path.join(REPO_ROOT, '.cape');

const CATEGORIES = ['context', 'ambition', 'plan', 'evolution'];

/**
 * Parse an existing index.md to extract pre-table header and any existing rows.
 */
function parseExistingIndex(indexPath) {
  if (!fs.existsSync(indexPath)) {
    return { headerText: '', existingRows: new Map() };
  }

  const content = fs.readFileSync(indexPath, 'utf8');
  const lines = content.split(/\r?\n/);
  const tableStartIndex = lines.findIndex((line) => line.trim().startsWith('| Date |'));

  let headerText = '';
  const existingRows = new Map();

  if (tableStartIndex === -1) {
    headerText = content.trim();
  } else {
    headerText = lines.slice(0, tableStartIndex).join('\n').trimEnd();
    const tableLines = lines.slice(tableStartIndex);
    for (const line of tableLines) {
      if (!line.trim().startsWith('|') || line.includes(':---')) continue;
      const parts = line.split('|').map((s) => s.trim()).filter((s, idx, arr) => idx > 0 && idx < arr.length);
      if (parts.length >= 3 && parts[0] !== 'Date') {
        const date = parts[0];
        const docCell = parts[1];
        const summary = parts[2] || '';
        const status = parts[3] || 'Active';

        // Extract filename from [Title](filename.md)
        const match = docCell.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          const docTitle = match[1];
          const docFile = match[2];
          existingRows.set(docFile, { date, title: docTitle, summary, status });
        } else {
          // Non-link entry, e.g. *(Pending)*
          existingRows.set(`raw-${date}-${docCell}`, { date, rawDoc: docCell, summary, status });
        }
      }
    }
  }

  return { headerText, existingRows };
}

/**
 * Parse a .cape markdown document to extract title, date, status, and summary.
 */
function parseCapeDocument(filePath, filename, existingEntry) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);

  // Date from filename YYYY-MM-DD-*.md
  const dateMatch = filename.match(/^(\d{4}-\d{2}-\d{2})/);
  let date = dateMatch ? dateMatch[1] : '';

  let title = existingEntry?.title || '';
  let status = existingEntry?.status || 'Active';
  let summary = existingEntry?.summary || '';

  let inMetadata = true;
  const bodyParagraphs = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!title && line.startsWith('# ')) {
      title = line.replace(/^#\s+/, '').trim();
      continue;
    }

    if (line.startsWith('**Date:**')) {
      const parsedDate = line.replace(/\*\*Date:\*\*\s*/, '').trim();
      if (parsedDate && !date) date = parsedDate;
      continue;
    }

    if (line.startsWith('**Status:**')) {
      status = line.replace(/\*\*Status:\*\*\s*/, '').replace(/<.*?>/g, '').trim();
      continue;
    }

    if (line.startsWith('**Summary:**')) {
      summary = line.replace(/\*\*Summary:\*\*\s*/, '').trim();
      continue;
    }

    if (line === '---') {
      inMetadata = false;
      continue;
    }

    if (!inMetadata && line && !line.startsWith('#') && !line.startsWith('*') && !line.startsWith('>')) {
      bodyParagraphs.push(line);
    }
  }

  if (!title) {
    title = filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ');
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  // If no summary was found, extract from first body paragraph if available
  if (!summary && bodyParagraphs.length > 0) {
    const firstPara = bodyParagraphs[0];
    summary = firstPara.length > 130 ? `${firstPara.slice(0, 127)}...` : firstPara;
  }

  if (!summary) {
    summary = 'No summary provided.';
  }

  return {
    filename,
    date,
    title,
    summary,
    status
  };
}

/**
 * Regenerate index.md for a given category.
 */
function updateCategoryIndex(category) {
  const categoryDir = path.join(CAPE_DIR, category);
  if (!fs.existsSync(categoryDir)) return;

  const indexPath = path.join(categoryDir, 'index.md');
  const { headerText, existingRows } = parseExistingIndex(indexPath);

  const entries = [];
  const processedFiles = new Set();

  const files = fs.readdirSync(categoryDir);
  for (const file of files) {
    if (file === 'index.md' || !file.endsWith('.md')) continue;

    const filePath = path.join(categoryDir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    const existing = existingRows.get(file);
    const parsed = parseCapeDocument(filePath, file, existing);
    entries.push(parsed);
    processedFiles.add(file);
  }

  // Preserve non-file / pending rows (e.g. *(Pending)* in ambition)
  for (const [key, rawEntry] of existingRows.entries()) {
    if (key.startsWith('raw-') && !processedFiles.has(key)) {
      entries.push({
        isRaw: true,
        date: rawEntry.date,
        docCell: rawEntry.rawDoc,
        summary: rawEntry.summary,
        status: rawEntry.status
      });
    }
  }

  // Sort descending by date (youngest first)
  entries.sort((a, b) => {
    const dateA = a.date || '';
    const dateB = b.date || '';
    if (dateA === dateB) {
      return (a.title || a.docCell || '').localeCompare(b.title || b.docCell || '');
    }
    return dateB.localeCompare(dateA);
  });

  // Rebuild table
  const lines = [];
  lines.push(headerText || `# CAPE: ${category.charAt(0).toUpperCase() + category.slice(1)} Index`);
  lines.push('');
  lines.push(`| Date | Document | Summary | Status |`);
  lines.push(`| :--- | :--- | :--- | :--- |`);

  for (const entry of entries) {
    if (entry.isRaw) {
      lines.push(`| ${entry.date} | ${entry.docCell} | ${entry.summary} | ${entry.status} |`);
    } else {
      const link = `[${entry.title}](${entry.filename})`;
      lines.push(`| ${entry.date} | ${link} | ${entry.summary} | ${entry.status} |`);
    }
  }

  lines.push('');
  fs.writeFileSync(indexPath, lines.join('\n'), 'utf8');
  console.log(`Updated: ${path.relative(REPO_ROOT, indexPath)} (${entries.length} entries)`);
}

function main() {
  console.log('Synchronizing .cape category indices...');
  for (const category of CATEGORIES) {
    updateCategoryIndex(category);
  }
  console.log('CAPE index synchronization complete.');
}

main();
