// step 1 
document.getElementById('btn-submit').addEventListener('click' , function(){

// step 2 
const emailField = document.getElementById('user-email')
const email = emailField.value;
console.log(email)
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(password);
if(email==='jakia@gmail.com' && password==='secret'){
    window.location.href= 'money.html';
    
}
else {
    alert('invalid user');
}

})
