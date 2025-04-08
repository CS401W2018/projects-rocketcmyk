document.getElementById('myForm').addEventListener('submit',function(event) {
    event.preventDefault();
   
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value;
    

    if (!fullname || !email){
        alert("You need a name, an email.")
        return
    }
    if (!age || age<18){
        alert("You need to be 18.")
        return
    }

    const data ={
        name: fullname,
        email: email,
        password: password,
        age: age,
        state: state,
        comments: comments,
    

    }
    
    const xhr = new XMLHttpRequest();
    document.getElementById('message').innerHTML = "Welcome to your account!";
    document.getElementById('myForm').innerHTML = "";
    console.log(data);
    xhr.send(JSON.stringify(data));
    console.log(data);
});