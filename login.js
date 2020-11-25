// {/* <script type="text/javascript"> */}
function validate(){
    var regemail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*?[#?!@$%^&*-]).{8,}$/
    
    var inp2 = document.getElementById("email").value;
    var inp3 = document.getElementById("pass").value;
    var flag = 0;
    if(!regemail.test(inp2)){
        document.getElementById("emailspan").innerHTML = "Please enter a valid email ID!";
        var flag = 1;
    }
    else{
        document.getElementById("emailspan").innerHTML = "";
        
    }
    if(!regpass.test(inp3)){
        document.getElementById("passspan").innerHTML = "Ensure atleast 8 characters. Include atlease one lowercase letter, uppercase letter, digit and one special character.";
        var flag = 1;
    }
    else{
        document.getElementById("passspan").innerHTML = "";
    }
    if(flag == 0){
        alert("Logged in successfully !")
    }
}
// </script>