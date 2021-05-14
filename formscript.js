window.onload = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn){
        alert('Please go and Log In first');
        location.href = '/index.html';
    }
    const un = document.getElementById('username');
    un.placeholder = 'Username : ' + localStorage.getItem('username')
    un.style.backgroundColor = 'white';
    un.style.cursor = 'no-drop'
}

function submit(){
    var data = JSON.stringify({
        "username" : localStorage.getItem('username'),
        "name" : document.getElementById('name').value,
        "country" : document.getElementById('country').value,
        "phonenumber" : document.getElementById('phone-number').value,
        "email" : document.getElementById('email').value
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.open("POST", "https://accounts-7710.restdb.io/rest/form-responses");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "609be450e3b6e02545eda819");

    xhr.send(data);
    alert('Thank you for submitting the form!');
    location.href = 'index.html';
    // location.href = '/index.html'
    // return false
}
