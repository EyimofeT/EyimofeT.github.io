const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const form = document.getElementById('form')
const fname_error = document.getElementById('fname-error')
const lname_error = document.getElementById('lname-error')
const email_error = document.getElementById('email-error')
const pass_error = document.getElementById('pass-error')


form.addEventListener('submit', (e) => {
    // alert("clicked")
    let fname_message = []
    let lname_message = []
    let email_message = []
    let pass_message = []

    if (fname.value === '' || fname.value == null) {
        fname_message.push('First Name Cannot Be Empty')
        
    }
    if (lname.value === '' || lname.value == null) {
        lname_message.push("Last Name Cannot Be Empty")
    }
    if (email.value === '' || email.value == null) {
        email_message.push("Email Cannot Be Empty")
    }
    if (pass.value === '' || pass.value == null) {
        pass_message.push("Password Cannot Be Empty")
    }

    if (fname_message.length > 0) {
        e.preventDefault()
        fname_error.innerText = fname_message.join(', ')
    }
    if (lname_message.length > 0) {
        e.preventDefault()
        lname_error.innerText = lname_message.join(', ')
    }
    if (email_message.length > 0) {
        e.preventDefault()
        email_error.innerText = email_message.join(', ')
    }
    if (pass_message.length > 0) {
        e.preventDefault()
         //pass_error.innerText = pass_message.join(', ')
       // pass_error.innerHTML='<p>Password Cannot Be Empty <img src="Registration-form/images/icon-error.svg"></img></p>'
       pass_error.innerHTML='<p>Password Cannot Be Empty</p>'
    }

    // to clear error when populated
    if (fname.value.length !== 0 ) {
        fname_error.innerText =''
        
    }
     if (lname.value.length !== 0) {
        lname_error.innerText =''
     }
     if (email.value.length !== 0) {
        email_error.innerText =''
     }
     if (pass.value.length !== 0) {
        pass_error.innerText =''
     }

})