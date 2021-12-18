function validate(callback){
    var user = document.getElementById("log").value;
    var pass = document.getElementById("pass").value;
    if(user=="admin" && pass == "12345"){
        callback();
    }
    else{
        alert("Incorrect username or password");
    }
}

function redirect(){
    window.location.href = "main.html";
}
