const NODE_ENV = "production";

module.exports = {
  frontend_url:
    NODE_ENV === "production"
      ? "https://counsellor.sortmycollegeapp.com"
      : "https://localhost:3000",
  // : "https://192.168.0.36:3000",
  backend_url:
    NODE_ENV === "production"
      ? "https://sortmycollegeapp.com"
      : "http://localhost:9000",
  // : "http://192.168.0.36:9000",
};
