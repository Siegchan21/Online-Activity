function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value; 
    if(username=="admin"&& password=="Hentailova69"){
        alert("login successfully");
        return false;
    }

    else{
        alert("Email or password is incorrect");
    }
}