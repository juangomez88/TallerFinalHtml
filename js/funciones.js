var getData = function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if(name == ""){
        document.getElementById("name").focus();
    }else{
        if(email == ""){
            document.getElementById("email").focus();
            
            }
        console.log(name + " "+ email+ " "+message);
    }
}
  

var cleanData = function () {
    form.reset();
}
