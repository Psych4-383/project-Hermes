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
        location.href = '/signin.html'
        return false;
    } else {
        alert('Incorrect Username or Password')
        location.href = '/index.html'
    }
}

fetch('https://accounts-7710.restdb.io/rest/new-collection', {method:'GET'})
.then(async (response) => {
    const resp = await response.json()
    console.log(resp)
})