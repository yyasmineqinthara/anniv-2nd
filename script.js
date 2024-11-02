function showSecretMessage() {
    const message = document.getElementById("secret-message");
  
    // Toggle visibility
    if (message.style.display === "none" || message.style.display === "") {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  }
  