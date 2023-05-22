const logout = async () => {
  const response = await fetch("/app/models/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#log-outter").addEventListener("click", logout);
