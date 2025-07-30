
  function checkPassword() {
    // Check if password was already validated this session
    if (sessionStorage.getItem("authenticated") === "true") {
      document.getElementById("protected-content").style.display = "flex";
      return;
    }

    const password = prompt("Enter password to access the content:");
    if (password === "B33ghlyOn3") {
      sessionStorage.setItem("authenticated", "true"); // Store flag
      document.getElementById("protected-content").style.display = "flex";
    } else {
      alert("Incorrect password!");
      document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:50px;'>Access Denied</h2>";
    }
  }

  function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-target='${id}']`).classList.add('active');

  // Save to sessionStorage
  sessionStorage.setItem('lastSection', id);
}


    window.onload = function () {
      checkPassword();

      let lastSection = sessionStorage.getItem('lastSection');
      if (lastSection && document.getElementById(lastSection)) {
        showSection(lastSection);
      } else {
        const firstSection = document.querySelector('.section');
        const firstLink = document.querySelector('.sidebar a');
        if (firstSection) firstSection.classList.add('active');
        if (firstLink) firstLink.classList.add('active');
      }
    };
  


  function checkPassword() {
    // Check if password was already validated this session
    if (sessionStorage.getItem("authenticated") === "true") {
      document.getElementById("protected-content").style.display = "flex";
      return;
    }

    const password = prompt("Enter password to access the content:");
    if (password === "B33ghlyOn3") {
      sessionStorage.setItem("authenticated", "true"); // Store flag
      document.getElementById("protected-content").style.display = "flex";
    } else {
      alert("Incorrect password!");
      document.body.innerHTML = "<h2 style='color:red; text-align:center; margin-top:50px;'>Access Denied</h2>";
    }
  }

  function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  document.querySelectorAll('.sidebar a').forEach(link => {
    link.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-target='${id}']`).classList.add('active');

  // Save to sessionStorage
  sessionStorage.setItem('lastSection', id);
}


    window.onload = function () {
      checkPassword();

      let lastSection = sessionStorage.getItem('lastSection');
      if (lastSection && document.getElementById(lastSection)) {
        showSection(lastSection);
      } else {
        const firstSection = document.querySelector('.section');
        const firstLink = document.querySelector('.sidebar a');
        if (firstSection) firstSection.classList.add('active');
        if (firstLink) firstLink.classList.add('active');
      }
    };
  
