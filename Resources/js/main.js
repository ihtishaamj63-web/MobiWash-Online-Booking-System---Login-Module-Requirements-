document.addEventListener("DOMContentLoaded", () => {
  // ---------- LOGIN PAGE ----------
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    const uname = document.getElementById("uname");
    const pwd = document.getElementById("pwd");
    const modal = document.querySelector(".modal");
    const tryAgainBtn = modal ? modal.querySelector("button") : null;
    const submitBtn = loginForm.querySelector('.btn[type="submit"]');

    const VALID_USER = "user@mobiwash.com";
    const VALID_PASS = "password123";

    // Hide modal on page load
    if (modal) modal.style.display = "none";

    // Remove inline onclick to avoid conflicts with our own handlers
    if (submitBtn) submitBtn.removeAttribute("onclick");
    if (tryAgainBtn) tryAgainBtn.removeAttribute("onclick");

    // Dismiss modal when "TRY AGAIN" is clicked
    if (tryAgainBtn) {
      tryAgainBtn.addEventListener("click", () => {
        if (modal) modal.style.display = "none";
      });
    }

    // Form submit validation
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = uname.value.trim();
      const password = pwd.value.trim();

      if (username === VALID_USER && password === VALID_PASS) {
        window.location.href = "index.html";
      } else {
        if (modal) modal.style.display = "block";
        pwd.value = "";
      }
    });
  }

  // ---------- SIDEBAR TOGGLE (home page) ----------
  const sidebar = document.querySelector(".nav-sidebar");
  const toggleBtn = document.querySelector(".btn-toggle-nav");
  if (sidebar && toggleBtn) {
    const navLinks = sidebar.querySelectorAll("a");
    const sidebarUl = sidebar.querySelector("ul");

    // Initial state: closed
    sidebar.style.width = "50px";
    toggleBtn.style.transform = "rotate(0deg)";
    if (sidebarUl) sidebarUl.style.visibility = "hidden";
    navLinks.forEach((link) => {
      link.style.opacity = "0";
      link.style.transition = "opacity 0.5s ease-in-out";
    });

    let sidebarOpen = false;

    // Function called by inline onclick="toggleNav()"
    window.toggleNav = () => {
      sidebarOpen = !sidebarOpen;
      if (sidebarOpen) {
        sidebar.style.width = "272px";
        toggleBtn.style.transform = "rotate(90deg)";
        if (sidebarUl) sidebarUl.style.visibility = "visible";
        navLinks.forEach((link) => (link.style.opacity = "1"));
      } else {
        sidebar.style.width = "50px";
        toggleBtn.style.transform = "rotate(0deg)";
        if (sidebarUl) sidebarUl.style.visibility = "hidden";
        navLinks.forEach((link) => (link.style.opacity = "0"));
      }
    };
  }
});
