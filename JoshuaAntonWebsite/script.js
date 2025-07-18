const terminalLines = [
    "> booting...",
    "> verifying user...",
    "> login accepted.",
    "> initializing system kernel...",
    "> loading digital shell...",
    "> launching site...... and nukes..."
  ];
  
  let lineIndex = 0;
  let charIndex = 0;
  const output = document.getElementById("typewriter");
  
  document.getElementById("login-btn").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username.trim() && password.trim()) {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("terminal-screen").classList.remove("hidden");
      typeLine();
    } else {
      alert("Enter a fake username and password");
    }
  });
  
  function typeLine() {
    if (lineIndex >= terminalLines.length) {
      setTimeout(showMainContent, 1000);
      return;
    }
  
    const line = terminalLines[lineIndex];
    if (charIndex < line.length) {
      output.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, 40);
    } else {
      output.innerHTML += "<br/>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  }
  
  function showMainContent() {
    document.getElementById("terminal-screen").classList.add("hidden");
    document.getElementById("main-website").classList.remove("hidden");
  }
  