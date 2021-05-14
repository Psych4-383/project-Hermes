function loginAsAdmin(){
    if(document.getElementById('password').value == '@443dd9!0'){
        localStorage.setItem('adminLoggedIn', true)
        location.href = 'dashboard.html'
    } else {
        alert('Incorrect Password. Please retry')
        location.reload()
    }
}