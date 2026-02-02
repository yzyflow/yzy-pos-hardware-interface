# Contributing to YZYflow

Thank you for contributing to **YZYflow** 👋 

Each module in the YZYflow ecosystem (e.g. `YzyTicket`, `YzyPOS`, `YzyAccess`, `YzyStaff`) follows the same contribution, review, and release standards.

This document provides a high-level overview of how to contribute.  
For complete and up-to-date details, please refer to the **central developer handbook**:

**Reference:** [yzyflow/handbook](https://github.com/yzyflow/handbook)

---

## Project Context
This repository is one of the private, modular components of the **YZYflow Suite**.  
Each module follows the same architecture, tooling, and quality standards defined in the [handbook](https://github.com/yzyflow/handbook).

## Local Setup

Before contributing, make sure your environment meets the base requirements:

1. Node.js **≥ 22**
2. `yarn` or `npm` installed
3. Access to the **YZYflow GitHub organization**
4. `.env.local` file configured based on `.env.example`

For environment setup conventions and API configuration, see  
 [`handbook/docs/environment-setup.md`](https://github.com/yzyflow/handbook)

## Development Workflow

All development follows the **YZYflow Git Workflow**:

1. Create a branch from `dev`
   ```bash
   git checkout dev
   git pull
   git checkout -b feature/short-description
   ```
2. Follow the commit conventions  
3. Open a **Pull Request** targeting `dev`
4. Request review and wait for approval before merging

> Branch prefixes:
> - `feature/` → new feature  
> - `fix/` → bug fix  
> - `chore/` → maintenance or dependencies  
> - `docs/` → documentation  
> - `test/` → testing  

Full workflow: [`handbook/docs/git-workflow.md`](https://github.com/yzyflow/handbook)

## Code Standards

All YZYflow modules share unified coding, formatting, and testing standards.

- **Formatting:** Prettier  
- **Linting:** ESLint  
- **Type Checking:** TypeScript strict mode (when applicable)  
- **Testing:** Jest / React Testing Library  
- **Commits:** Conventional Commits  

To check locally:

```bash
yarn lint
yarn test
yarn format
```

More details: [`handbook/docs/coding-standards.md`](https://github.com/yzyflow/handbook)


## Commit Conventions

All commits must follow the **Conventional Commits** standard:

```
<type>(optional scope): short summary
```

**Examples:**
- `feat(ticket): add QR code validation`
- `fix(api): handle token refresh`
- `chore(deps): bump react version`
- `docs(readme): update setup section`

Full conventions: [`handbook/docs/commit-conventions.md`](https://github.com/yzyflow/handbook)


## Code Review

All Pull Requests must:
- Pass build, lint, and test checks  
- Be reviewed by at least one team member  
- Contain a clear description of the change  

Guidelines: [`handbook/docs/code-review.md`](https://github.com/yzyflow/handbook)

## Deployment & Releases

Releases are handled by the YZYflow CI/CD pipeline.  
Versioning follows **Semantic Versioning (SemVer)**.  

- `develop` → staging  
- `main` → production-ready  

Release process: [`handbook/docs/releases.md`](https://github.com/yzyflow/handbook)


## License & Confidentiality

All YzyFlow repositories are **private and proprietary**.  
Do not share, fork, or redistribute code externally without authorization.


> **Note:**  
> This file is automatically included in all module repositories created from the YzyFlow template.  
> Do **not** modify this file per project — update shared guidelines in [`yzyflow/handbook`](https://github.com/yzyflow/handbook) instead.
