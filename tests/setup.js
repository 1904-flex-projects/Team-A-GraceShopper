const db = require('../server/db/connection');
beforeAll(async () => await db.sync({ force: true }));
afterEach(async () => await db.sync({ force: true }));
afterAll(async () => await db.close());
