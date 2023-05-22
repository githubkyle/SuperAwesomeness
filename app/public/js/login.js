const sequelize = require("../../config/database");
let NewUser = document.querySelector("#new-user").value;
let NewEmail = document.querySelector("#new-email").value;
let Passer = document.querySelector("#new-pass").value;
let Registration = document.querySelector("#signup-user");
const bcrypt = require("bcrypt");

async function RegisterUser() {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function LoginUser() {
  await sequelize.post("/login", async (req, res) => {
    try {
      // Retrieve the username and password from the request body
      const { username, password } = req.body;

      // Find the user in the database
      const user = await User.findOne({ where: { username } });

      // Check if the user exists
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      // Compare the password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      // Check if the password is correct
      if (user.password !== password) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      // Authentication successful
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
}

Registration.addEventListener("submit", RegisterUser());
