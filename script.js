window.onload = () => {
    localStorage.setItem('loggedIn', false)
}

function authenticate(){
    const popUp = document.getElementById('popUp');
    popUp.style.display = 'flex';
}
function goBack(){
    const popUp = document.getElementById('popUp');
    popUp.style.display = 'none';
}
function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('pswd').value;
    if (username == '1' && password == '2'){
        location.href = '/Form.html'
        localStorage.setItem('username', username)
        localStorage.setItem('loggenIn', true)
        return false;
    } else {
        alert('Incorrect Username or Password')
        location.href = '/index.html'
    }
}