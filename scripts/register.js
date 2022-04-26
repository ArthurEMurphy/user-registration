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
    let newUser = new user(inputfName,inputlName,inputEmail,inputPassword, inputGender, inputAge, inputPhone, inputAddress, inputPay, inputColor)
    console.log(newUser);
}
 




function init(){
    console.log("Init function");

//display two users and display them on the console
let user1 = new user("Ben", "Vance", "ben@gmail.com", "Test123", "male", "25", "207-645-1112", "123 Any Street", "Visa", "Red");
let user2 = new user("John", "Doe", "jd@email.com", "Test123", "male", "28", "207-645-1112", "123 Any Town", "MasterCard", "blue");
}
window.onload=init;
