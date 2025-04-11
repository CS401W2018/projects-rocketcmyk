document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const state = document.getElementById('state').value;
    const password = document.getElementById('password').value;


    if (!fullname || !email) {
        alert("You need a name and an email.");
        return;
    }

    const data = {
        name: fullname,
        email: email,
        state: state,
        password: password,
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "response.json", true); // Changed to POST
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // Correct Content-Type for POSTing JSON

    xhr.onload = function() { // Use onload for cleaner event handling
        if (xhr.status >= 200 && xhr.status < 300) { // Check for successful status codes
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = "Welcome to your account!";
            document.getElementById('myForm').innerHTML = response.response;

        } else {
            console.error("Form submission error:", xhr.status, xhr.responseText);
            alert("Error submitting form.");
        }
    };

    xhr.send(JSON.stringify(data));
    console.log("Data sent:", data);
});