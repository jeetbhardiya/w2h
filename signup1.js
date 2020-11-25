// {/* <script type="text/javascript"> */}
        function validate(){
            console.log("Here!!")
            var regname = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            var regcountry = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
            var regnum = /\d{10}/gm;
            var regemail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
            var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*?[#?!@$%^&*-]).{8,}$/
            var name = document.getElementById("name").value;
            var country = document.getElementById("country").value;
            var inp1 = document.getElementById("num").value;
            var inp2 = document.getElementById("email").value;
            var inp3 = document.getElementById("pass").value;
            var cpass = document.getElementById("cpass").value;
            var flag = 0;
            
            if(!regnum.test(inp1)){
                document.getElementById("numspan").innerHTML = "Please enter a 10 digit number!";
                var flag = 1;
            }
            else{   
                document.getElementById("numspan").innerHTML = "";
            }
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
            if(!regname.test(name)){
                document.getElementById("spname").innerHTML = "Please enter your full name!";
                var flag = 1;
            }
            else{
                document.getElementById("spname").innerHTML = "";
            }
            if(!regcountry.test(country)){
                document.getElementById("spcountry").innerHTML = "Please enter your country!";
                var flag = 1;
            }
            else{
                document.getElementById("spcountry").innerHTML = "";
            }
            if(inp3 != cpass){
                document.getElementById("spcpass").innerHTML = "Your password does not match!";
                var flag = 1;
            }
            else{
                document.getElementById("spcpass").innerHTML = "";
            }
            if(flag == 0){
                alert("Registration successful!")
            }
        }
    // </script>