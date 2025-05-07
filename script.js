// Usuario simulado (de prueba)
const USER = {
  username: "admin",
  password: "1234"
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === USER.username && password === USER.password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  // Proteger páginas privadas
  if (window.location.pathname.includes("recetas.html")) {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn !== "true") {
      window.location.href = "login.html";
    }
  }
});
