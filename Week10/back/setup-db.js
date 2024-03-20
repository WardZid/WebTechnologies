const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.db");

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
`;

db.run(createTableQuery, function (err) {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Table created successfully");

    const users = [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
      { username: "user3", password: "password3" }
    ];

    users.forEach((user, index) => {
      const insertUserQuery = `
          INSERT INTO users (username, password) VALUES (?, ?)
      `;
      db.run(insertUserQuery, [user.username, user.password], function (err) {
        if (err) {
          console.error(`Error inserting user ${index + 1}:`, err.message);
        } else {
          console.log(`User ${index + 1} inserted successfully`);
        }
      });
    });
  }
});

db.close();
