// login.js
document.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.getElementById("loginBox");
  const recipeList = document.getElementById("recipeList");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const logoutButton = document.getElementById("logoutButton");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Mostrar login si no está autenticado
  if (!isLoggedIn) {
    loginBox.style.display = "block";
    recipeList.style.display = "none";
    header.style.display = "none";
    footer.style.display = "none";
    logoutButton.style.display = "none";
  } else {
    // Mostrar contenido normal si está autenticado
    loginBox.style.display = "none";
    recipeList.style.display = "grid";
    header.style.display = "block";
    footer.style.display = "block";
    logoutButton.style.display = "block";
  }

  const form = document.getElementById("login-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    // Lista de usuarios y contraseñas
    const users = [
      { username: "admin", password: "1234" },
      { username: "danilo", password: "4321" },
      { username: "ana", password: "abcd" },
      { username: "alcides", password: "ABCD" },
      { username: "profe", password: "tajamar" },
    ];

    // Verificar si el usuario y contraseña coinciden con alguno de los usuarios
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      location.reload();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });

  // Cerrar sesión
  logoutButton?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    location.reload();
  });
});
