# Debt Tracker

Full-stack personal finance app that models debt payoff strategies (snowball & avalanche), projects interest, and forecasts payoff dates across accounts. Exposes both a REST API and a CLI, backed by a type-safe Prisma + SQLite relational data layer with amortization logic built from scratch.

**Node.js · Express · React · Vite · Prisma · SQLite**

## Features

- **Snowball & Avalanche strategies** — compare payoff plans side-by-side
- **Interest projection** — amortization schedules computed from scratch, no third-party math libs
- **Payoff forecasting** — projected payoff dates and total interest per account
- **REST API** — CRUD for accounts, debts, and payment plans
- **CLI** — manage debts and run projections from the terminal
- **Type-safe data layer** — Prisma ORM with SQLite for zero-config local persistence

## Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Frontend  | React, Vite             |
| Backend   | Node.js, Express        |
| Database  | SQLite via Prisma ORM   |
| CLI       | Node.js                 |

## Getting Started

```bash
# Install dependencies
npm install

# Set up the database
npx prisma migrate dev

# Run the dev server (frontend + backend)
npm run dev
```

## License

MIT
