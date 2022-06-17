const fname=document.getElementById('fname')
const lname=document.getElementById('lname')
const email=document.getElementById('email')
const pass=document.getElementById('pass')
const form=document.getElementById('form')
const fname_error=document.getElementById("fname-error")

form.addEventListener('submit',(e) => {
    let fname_message=[]
    let lname_message=[]
    let email_message=[]
    let pass_message=[]

    if(fname.value === '' || fname.value == null){
        fname_message.push("First Name Cannot Be Empty")
    }
    if(lname.value === '' || lname.value == null){
        lname_message.push("Last Name Cannot Be Empty")
    }
    if(email.value === '' || email.value == null){
        email_message.push("Email Cannot Be Empty")
    }
    if(pass.value === '' || pass.value == null){
        pass_message.push("Password Name Cannot Be Empty")
    }

    if(fname_message>0){
    e.preventDefault()
        fname_error.innerText= fname_message.join(', ')
    }
})