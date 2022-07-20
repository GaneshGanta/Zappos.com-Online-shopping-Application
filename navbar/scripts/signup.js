
function user(n,e,p){
    this.name=n
    this.email=e
    this.password=p
}









let fun=()=>{
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pwd").value

    let newUser=new user(name,email,password)
    console.log(newUser)
    window.location.href="/overrated-impulse-4022/navbar/login.html"
}