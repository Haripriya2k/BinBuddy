setTimeout(() => {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
  }, 4000);

  function showLogin() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
  }

  function showSignup() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("otp").classList.remove("hidden");
  }

  function checkEmailAndProceed() {
    const emailSelect = document.getElementById("emailSelect").value;
    if (emailSelect) {
      document.getElementById("login").classList.add("hidden");
      document.getElementById("otp").classList.remove("hidden");
    } else {
      alert("Please select an email");
    }
  }

  function redirectToHome() {
    document.getElementById("otp").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
  }
  function startApp() {
    location.href="../e-commerce-project/index.html";
  }
  
  function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  }
  