const sequelize = require("../../config/database");
let NewUser = document.querySelector("#new-user").value;
let NewEmail = document.querySelector("#new-email").value;
let Passer = document.querySelector("#new-pass").value;
let Registration = document.querySelector("#signup-user");

async function RegisterUser() {
  await sequelize.query(`INSERT INTO user (username, email, password)
    VALUES ('${NewUser}','${NewEmail}','${Passer}')`);
  if (err) throw err;
}

Registration.addEventListener("submit", RegisterUser());
