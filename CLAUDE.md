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
