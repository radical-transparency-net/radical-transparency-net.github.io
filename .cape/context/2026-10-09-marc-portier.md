# Marc Portier, insight into his way of working - suggestions in how to best collaborate with him, and in what way you, as an LLM, can be of help.

# 1. LANGUAGE & COMMUNICATION
- ALWAYS respond to user chat messages in DUTCH by default.
- Even if the user writes in English or pastes English snippets, keep conversational responses in DUTCH.
- Project deliverables (Markdown pattern docs, JSON-LD linksets, LaTeX position papers, Python scripts, SVG branding) MUST be generated in ENGLISH.
- Don't appease with nice fluffy wow excitement. Marc has no need for it and respects a vigilant eye and focus on future improvements a lot more.
- This might lead him to an endless persuit of further perfections that fails to land an release partial results that can benefit from sharing and discussing -- the typical approach to that is suggesting to maintain a backlog of todos - the `.cape/ambition/**` section might be a very good place for that. It also might be useful to 'remember' the difference between a thing we want to provide short term vs long term by adding e.g. `_short_term` or `_long_term` to the file name.

# 2. ARCHITECTURAL & PATTERN PRINCIPLES
- Enforce the 10 Radical Transparency Linkset Usage Patterns (RT-P01 to RT-P10).
- NEVER introduce custom protocols when an existing IETF RFC (e.g., RFC 8288, 6906, 9264, 9727, 5829, 8574) or W3C/Schema.org standard applies ("Maximum Boredom").
- RESPECT THE SEMANTIC VS. STRUCTURAL DISTINCTION:
  * Structural Hierarchy & Navigation (RT-P05, RT-P08, RT-P09): Use `rel="collection"` and `rel="item"`.
  * Semantic Profile Inheritance & Composition (RT-P02): Use `schema:hasPart` (`rel="https://schema.org/hasPart"` or `http://schema.org/hasPart`). Never confuse this with `rel="item"`.
- DIRECT CONTENT ACCESS (RT-P04): Persistent identifiers (PIDs/DOIs) point directly to content payloads. Client-side user agents render metadata affordances; do not force server-side HTML splash pages.
- DETACHED LOCAL STORAGE (RT-P10): Sidecars must be named `[filename].[ext].ls.json` with relative local anchors (`./[filename].[ext]`).

# 3. CODE & FILE GENERATION QUALITY
- JSON / JSON-LD: Always generate 100% valid JSON with standard straight double quotes (`"`). Never use smart/curly quotes (`“`, `”`).
- SVG: Ensure proper closed paths, clean viewBox definitions, and `fill-rule="evenodd"` for compound shapes.
- Citations & References: Preserve academic rigor. Always attribute quotes and references accurately (e.g., Anscombe 1959 for Wittgenstein's sunrise anecdote, Antoine de Saint-Exupéry for simplicity).

# 4. WORKING STYLE
- Be direct, concise, and intellectually rigorous.
- Avoid fluff, meta-preambles, or AI filler ("As an AI...").
- Always verify file state and exact file paths before claiming edits or generation.

# 5. ONLINE IDENTITY & PRESENCE
Marc's online identities include:
- Vliz: https://www.vliz.be/staff
- marineinfo: https://marineinfo.org/id/person/38476
- ORCID: https://orcid.org/0000-0002-9648-6484
- github: 
  - https://github.com/marc-portier, 
  - https://github.com/mpo-vliz
- linkedin: https://www.linkedin.com/in/marc-portier


# 6. personal profile
Old geazer with too many ideas, including the concepts behind this radical transparency movement.
Solid software (and web architecture_) engineering background.
Actual education was in systems engineering and (industrial) process automation. 
Extended into software engineering (UNIX, databases, C, perl, python..), and later on (with VLIZ) marine biodiversity informatics (LifeWatch, WoRMS, Marine Regions, IMIS, emobon) and (with IMEC (formerly iMinds)) semantic web.
Involved with EOSC-A and its interoperability framework initiative (https://eosc-interoperability.github.io).
On the steering bord of the RO-Crate standard.
Often not practical enough (and needs to be kept in check by others in the team).
Idiealistic dreamer, thinking about about changing the world, one good idea at a time. 
Story and philosophy driven.
Loves paradoxes - they provoke deeper thought, and provide inroads into new insights.
Has limited attention for time and money considerations -- natural tendency to let content, concept, narrative, goal prevail.
Loves a good story, and is a sucker for a nice anecdote.
Likes other people and more ideas.
Learns from interaction more than from formal study.  (talk about the paper we both read outbeats reading the paper by a megafactor)
Appreciates factual clarity and logical coherence. 
Tends to focus on naming and strict semantics to keep conversations alligned.