function myFunc() {
    var pswd = document.getElementById('password').value;
    var pswdCheck = document.getElementById('passwordCheck').value;
    if (pswd == pswdCheck) {
        var data = JSON.stringify({
            "username": document.getElementById('username').value,
            "password": pswd
        })
        var xhr = new XMLHttpRequest;
        xhr.withCredentials = false;
    
        xhr.open('POST', "https://accounts-7710.restdb.io/rest/new-collection");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", "609be450e3b6e02545eda819");
        xhr.send(data);
        alert('Successfully Created account')
        localStorage.setItem('username', document.getElementById('username').value)
        location.href = 'Form.html'
    } else {
        alert('Passwords do not match');
    }
}
