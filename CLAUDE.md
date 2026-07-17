# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Debt Tracker — a full-stack personal finance app that models debt payoff strategies (snowball & avalanche), projects interest, and forecasts payoff dates across accounts. Exposes both a REST API and a CLI, backed by a type-safe Prisma + SQLite relational data layer with amortization logic built from scratch.

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express + TypeScript
- **Database:** SQLite via Prisma ORM
- **CLI:** Node.js

## Commands

- `npm install` — install dependencies
- `npm run dev` — run frontend and backend concurrently
- `npx prisma migrate dev` — apply database migrations
- `npx prisma studio` — open Prisma Studio to inspect data
- `npx prisma generate` — regenerate Prisma client after schema changes

## Architecture

- Amortization and interest calculations are implemented from scratch — no third-party finance libraries
- Snowball (lowest balance first) and avalanche (highest rate first) strategies share the same projection engine
- The Prisma data layer is shared between the REST API and CLI

## Conventions

### Documentation Style

- **TypeScript (`client/`, `server/`):** TSDoc comments on exported functions and types — a summary plus `@param` / `@returns` / `@throws`. Keep types in the signature, not in the tags (TypeScript already has them).
- **Config files** (`.env.example`, `prisma/schema.prisma`): plain `#` / `//` comments only — no doc-comment convention applies. `package.json` is strict JSON and takes no comments.

### Issue & Task Workflow (Epic → Task hierarchy)

All issues on the GitHub project board follow an **Epic → Task** hierarchy:

The project board uses two classification fields:
- **Hierarchy** — `Epic` (top-level grouping) or `Task` (individual work item under an Epic). Epics use GitHub's sub-issues feature to track child tasks.
- **Type** — the work type: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`, `style`, `perf`. Matches the commit/branch prefix.

**When creating a new issue**, always:
1. Assign a work-type label (`feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `ci`, `style`, `perf`)
2. Find the appropriate parent Epic and add the new issue as a sub-issue. If no fitting Epic exists, create one first (label it `epic`, set Hierarchy to "Epic" on the project board)
3. Add the issue to the "Debt Tracker" project board (project #4) and set the "Hierarchy" field to `Task`, the "Type" field to match the label, and a "Target Date"
4. Set the "Status" field (`Todo`, `In Progress`, or `Done`)

**Current Epics:**
- #8 Epic: Core Engine — amortization calculations and payoff strategies
- #9 Epic: API & Interfaces — REST API, CLI, and React frontend
- #10 Epic: Infrastructure & Quality — CI/CD and test coverage
- #11 Epic: Documentation & Standards — conventions, TSDoc, docs

## Contributing

All code changes to `main` go through pull requests — never commit directly to `main`. Branch, push, and open a PR.

**Authorship:** Commits are authored under the repo owner's git identity (`BezDailey <jabezdailey@icloud.com>`), never an AI/assistant identity. Do not add `Co-Authored-By` trailers, "Generated with …" footers, or similar attribution to commit messages or PR descriptions. Use conventional branch prefixes (`docs/`, `feat/`, `fix/`) — not tool-named prefixes.

**Commit messages:** Follow [Conventional Commits](https://www.conventionalcommits.org) — `type(scope): summary`, with an imperative, lowercase summary kept to ~50 characters. Allowed types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`, `build`, `perf`, `style`. The scope is optional (e.g. `docs(readme):`, `feat(engine):`). Mark a breaking change with `type!:` or a `BREAKING CHANGE:` footer. Example: `fix(indexer): skip notes with unchanged content hash`. (This matches the branch prefixes above and, once tooling lands, is enforced by commitlint and a PR-title check.)

### Branch Naming

Format: `<type>/<short-description>`

Use the same type prefixes as commit messages. Examples:
- `feat/payoff-strategies`
- `fix/interest-calculation`
- `chore/prisma-migration`
- `docs/add-tsdoc`
