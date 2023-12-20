function validate(){
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let mob = document.getElementById("contact").value;
    let pword = document.getElementById("password").value;
    let cpword = document.getElementById("cpassword").value;

    var nameformat = /^[A-Za-z]+$/
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mobileformat = /^\d{10}$/;
    var passwordformat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (name == "" && name !== nameformat){
        alert("Enter valid user name!");
        return false;
    }

    if(email == "" && email != mailformat){
        alert("Email is not valid");
        return false;
    }

    if(mob == "" && mob != mobileformat){
        alert("Contact detail is not valid");
        return false;
    }

    if(pword == "" && pword != passwordformat){
        alert("please enter strong and valid password");
        return false;
    }

    if(cpword == "" && cpword !== pword){
        alert("Re-enter confirm password");
        return false;
    }

}