# .CAPE

## purpose and motivation

This folder in the project is there to provide - close to, and in sync with, the artifacts we are building - a shared and sharable narrative about the work that produce4s them. 

It is surely inspired by the usage of AI agents and vibe coding practice as a mechanism to provide guidance and substantial input to these systems. To some extend it can be seen as a resume-persistence of the conversations team mmembers have with these agents. By persisting and sharing the gist (i.e. the important shareable conclusions) of these we overcome the efemeral nature of those chats, but also assure we keep each other up to date. The extra side effect is that not only the human team-members but their respective agents too are given an insight into this shared evolving story about what is going on in this project.

The aim is to share, so even if we 'hide' the folder on linux with a leading dot, it should not end up in the .gitignore as it is intended to be shared between all working on the project.

## acronym and parts

CAPE stands for 
* Context
* Ambition
* Plan 
* Evolution

These parts become their own folders that group information in separate md files.

These follow a strict `YYYY-MM-DD-topic.md` file name structure that allows ordering them in time and quickly recognising what they are about.
As we grow we might end up introducing some grouping/substructure into these leading to files matching the pattern `.cape/{context|ambition|plan|evolution}/**/YYYY-MM-DD-{topic}.md`

For each of these four top level folders an `index.md` is kept up to date with a quick overview table (youngest on top) of all the available files, and what they are about.


### Context

In this folder we discribe practical agreements and information about who is working on them, and how we organise things.

On the `who` part the idea is to have md files describing the team members involved:
* practical info like github name, orcid, natural human language
* role in the project
* tools they use
* preferences on how to interact and collaborate
* level of involvement (as % of their time, as % impact on the project, ...)
* relevant personality traits that help us cater for their needs and lower frustrations

On the `how` part this folder should contain the agreements on stuff like:
* naming conventions
* locations
* workin procedures
* way to keep each other in the loop
* intergration with various used tools
* chosen frameworks and libraries
* configuration practices
* security and access to secrets 
* ...


### Ambition

Big overview on the various lines of work and goals we are aiming for. 
The reason these artefacts are being assembled in the first place.
Probably also the place to keep reminders to wicked distant long term ideas on the backburner.


### Plan

Concrete translation of the ambition section into assigned and time bound tasks ready for execution.

Challenge might be how we relate these (without duplication) to other repo features and systems that exist outside but related to this repo:
- github issues 
- github dashboard timelines and deadlines

And things that do exist in the repo -- like git branches


### Evolution

Reporting on important achievements and changes.
Making sure we can appreciate how we got where we are, and assuring we capture insights to avoid repeating mistakes.
