function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields before sending your message.");
        return;
    }
    
    alert("Message sent successfully!\n\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message);
}