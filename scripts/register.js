// create a User constructor
class User {
    constructor(fname, lname, email, password, gender, age, phone, address, pay, color) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.address = address;
        this.pay = pay;
        this.color = color;
    }
}

function isValid(user){ //email & password 
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        console.error("Add your email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password.length==0){
        valid=false;
        console.error("Add a password");                                      
        $("#txtPassword").addClass("input-error");
   }
   return valid;
}
function validatePass(){
    // get value from the input
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    if(password.length<6){
        txtPass.css("background","#ff9898"); //jquery function to change the css 
    }else{
        txtPass.css("background", "#64ce66");//jquery function to change the css
        }
    }



function register(){
    let inputfName = $("#txtFirstName").val(); //getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val(); 
    let inputAge = $("#txtAge").val();
    let inputPhone = $("#txtPhone").val();
    let inputAddress = $("#txtAddress").val();
    let inputPay = $("#txtPay").val(); 
    let inputColor = $("#txtColor").val();
    
    let newUser = new User(inputfName,inputlName,inputEmail,inputPassword, inputGender, inputAge, inputPhone, inputAddress, inputPay, inputColor)
    if(isValid(newUser)){
    saveUser(newUser); //this function is on the storeManager.js
    $(`input`).val(""); // clear the inputs
    }
}


function init(){
    console.log("Register");
    //hook events
    $("#txtPassword").keyup(validatePass);// it is executed everytime the key is up

//display two users and display them on the console
    let user1 = new User("Ben", "Vance", "ben@gmail.com", "Test123", "male", "25", "207-645-1112", "123 Any Street", "Visa", "Red");
    let user2 = new User("John", "Doe", "jd@email.com", "Test123", "male", "28", "207-645-1112", "123 Any Town", "MasterCard", "blue");
    console.log("Init function");
}

window.onload=init;
