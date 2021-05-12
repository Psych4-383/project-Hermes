window.onload = () => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn){
        alert('Please go and Log In first');
        location.href = '/index.html';
    }
    const un = document.getElementById('username');
    un.innerHTML = 'Username : ' + localStorage.getItem('username')
}

function submit(){
    location.href = '/index.html'
    return false
}