import mysql from "serverless-mysql";

export const conn = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "nadaismo406",
    port: 3306,
    database: "orion",
  },
});
