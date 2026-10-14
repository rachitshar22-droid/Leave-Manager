# Office Leave Manager (Backend API)

I recently visited a small local office and ended up talking to their HR. She was managing employee leaves, sick days, and pending approvals on a massive, chaotic Excel spreadsheet.
It was a complete mess. I realized that a proper leave management system isn't just a big corporate thing—small offices desperately need it too.
So, I decided to build a real backend to fix this.

## Where it's at right now (Phase 1)
* **Tech Stack:** Node.js, Express, MongoDB.
* **Status:** I built the initial core CRUD API using MongoDB just to get the basic logic, routes, and testing done quickly. 

## The Plan (Why I'm changing the database)
While MongoDB was great for a quick prototype, leave management is deeply relational (Departments -> Employees -> Leave Balances -> Requests). 

Here is what I am actively working on next:
1. **The PostgreSQL Migration:** I am currently tearing out MongoDB and migrating the entire database layer to PostgreSQL. This will let me use strict relational rules and foreign keys so the data actually makes sense and doesn't break.
2. **Auth & Security:** Adding JWT authentication and bcrypt password hashing. We need strict Role-Based Access Control (RBAC) so a regular employee can't accidentally approve their own 10-day vacation.

---
*Building this from the ground up. Watch the commit history to see how a messy NoSQL prototype turns into a structured SQL architecture.*
