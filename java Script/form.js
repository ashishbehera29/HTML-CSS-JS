function login(){
    let uname = document.querySelector('#uname').value
    let pword = document.querySelector('#pword').value

    if(uname == "abcd" && pword == "1234"){
        alert("Login Successful");
    }
    else{
        alert("Invalid Account")
    }
}
function show(){
    let pword = document.querySelector('#pword');
    if(pword.type == "password"){
        pword.type = "text"
    }
    else{
        pword.type = "password"
    }
}