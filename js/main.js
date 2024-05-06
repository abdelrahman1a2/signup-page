//  start signup section
 function signupFun(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    var confirmpass=document.getElementById("confirmpass").value;
    var result=document.getElementById("errorMass");
 
    result.style.backgroundColor="red";
    if(name=="" && email==""&&pass==""&&confirmpass==""){
        result.innerHTML="Please Enter Data";
        return false;
    }else if(name.length<5 || name.length>15){
        result.innerHTML="Please Ensert 5-15 Charactar In Username";
        return false;
    }else if(email.indexOf("@")==-1||email.indexOf(".")==-1){
        result.innerHTML="Please Enter Valide Email"; 
        return false; 
    }else if(pass.length<8){
        result.innerHTML="Please Enter Atleast 8 charactar";
        return false;
    }else if(pass!=confirmpass){
        result.innerHTML="Please Matche Password";
        return false;
    }else{
        return true;
    }
}
//  end signup section