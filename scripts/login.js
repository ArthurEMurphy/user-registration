function login(){
    //get values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    //use a flag
    let flag=false;
    //get the users from LS
    let userList=readUsers(); //this is on the storeManager
    //travel the userList
    for(let i=0;i<userList.length;i++){
        // not recommended
        // if(userList[i].email==inputEmail){}
        //recommended way
        let user=userList[i];
        if(user.email===inputEmail && user.password===inputPassword){
            flag=true;
            window.location="users.html";
        }
        if(!flag){
            $("#alertError").removeClass("hide");
            setTimeout(function(){
                $("#alertError").addClass("hide");
            }, 3000);
        }
    }                         
}

function init(){
    $("#loginBtn").click(login);
}

window.onload=init;

// === is saying same value and same data type
// == is saying same values