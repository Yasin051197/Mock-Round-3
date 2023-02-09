
let form=document.getElementById("login")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value
    }
    console.log(obj)
    if(obj.email==="eve.holt@reqres.in" && obj.pass==="cityslicka")
    {
        window.location.href="./dashboard.html"
    }
    else{
        alert("Please enter correct email and password")
    }
})