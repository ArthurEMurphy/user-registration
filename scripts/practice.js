// selecting the txtEmail with JS
// let email=document.getElementById("txtEmail");
// selectors type
// #id, .class, tag
//jquery = $
// jQuery("#txtEmail")

//selecting by ID
email=$("txtEmail").val();
console.log(email);
// selecting by className and hiding the elements with JS
// let formControl = document.getElementsByClassName("form-control");
// for(let i=0; i<formControl.length; i++){
    // formControl[i].getElementsByClassName.display="none";
// }
// let formControl = document.getElementsByClassName("form-control");
// console.log(formControl);
let formControl = $(".form-control");
formControl.hide();

// selecting by tagName
// let labels = document.getElementsByTageName("label");
// console.log(labels);

let labels = $("label");
console.log(labels);
