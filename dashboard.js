window.onload = () => {
    const isAdmin = localStorage.getItem('adminLoggedIn');
    if (isAdmin == 'false'){
        alert('Please Log In with Admin Password for access to dashboard');
        location.href = 'dashboard-login.html'
    }
    var xhr = new XMLHttpRequest;
    xhr.withCredentials = false;

    xhr.onload = () =>{
        if(xhr.status == 200){
            const table = document.getElementById('table')
            var resp = JSON.parse(xhr.response)
            console.log(resp)
            for (let index = 0; index < resp.length; index++) {
                const row = document.createElement('tr');
                table.appendChild(row)
                const username = document.createElement("td")
                username.innerText = resp[index].username;
                const name = document.createElement("td")
                name.innerText = resp[index].name;
                const country = document.createElement("td")
                country.innerText = resp[index].country;
                const phone = document.createElement("td")
                phone.innerText = resp[index].phonenumber;
                const email = document.createElement("td")
                email.innerText = resp[index].email;
                row.appendChild(username);
                row.appendChild(name);
                row.appendChild(country);
                row.appendChild(phone);
                row.appendChild(email);
            }
        } else {
            alert("There was a problem with the database");
            location.reload()
        }
    }

    xhr.open("GET", "https://accounts-7710.restdb.io/rest/form-responses");
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('x-apikey', "609be450e3b6e02545eda819")
    xhr.send()
}

