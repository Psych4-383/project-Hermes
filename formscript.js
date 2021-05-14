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

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://accounts-7710.restdb.io/rest/new-collection",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "609be450e3b6e02545eda819",
      "cache-control": "no-cache"
    }
  }
  
$.ajax(settings).done(function (response) {
    console.log(response);
});