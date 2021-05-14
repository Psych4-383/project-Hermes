window.onload = () => {
    localStorage.setItem('loggedIn', false);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.onload = () => {
        if (xhr.status == 200) {
            window.accountsArray = JSON.parse(xhr.response)
        } else {
            console.log('Error')
        }
    }

    xhr.open("GET", "https://accounts-7710.restdb.io/rest/new-collection");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", "609be450e3b6e02545eda819");

    xhr.send();
}
function authenticate() {
    const popUp = document.getElementById('popUp');
    popUp.style.display = 'flex';
}
function goBack() {
    const popUp = document.getElementById('popUp');
    popUp.style.display = 'none';
}
function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pswd').value;
    for (let item = 0; item < accountsArray.length; item++) {
        if (username == accountsArray[item].username && password == accountsArray[item].password) {
            location.href = '/Form.html'
            localStorage.setItem('username', username)
            localStorage.setItem('loggedIn', true)
            console.log('Logged In!')
            return false;
        } else {
            continue;
        }
    }
    alert('Incorrect Username or password');
    location.reload()
}

