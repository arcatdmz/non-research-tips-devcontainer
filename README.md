## non-research-tips-devcontainer

This repository contains a sample configuration of VS Code Dev Container with an arbitrary example of a TypeScript/Node.js-based application with a MySQL backend.

When opened as a dev container,

- run `npm ci` and `npx prisma generate` to install dependencies
- access http://localhost:5555 to see MySQL tables with Prisma Studio
- run `npm start` to see blank results
- add entries with Prisma Studio
- run `npm start` again to see updated results
- access raw MySQL database on `localhost:3306` with a MySQL client of your choice e.g., [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) to confirm results

---

https://github.com/arcatdmz/non-research-tips-devcontainer
