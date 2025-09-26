// Database connection simulation
const db = {
  host: "localhost",
  user: "admin",
  password: "password",
  database: "team_project"
};

function connect() {
  console.log("Connecting to database at " + db.host);
  // Fake connection success
  return true;
}

module.exports = { connect };

function query(sql) {
  console.log("Running SQL: " + sql);
  return [];
}