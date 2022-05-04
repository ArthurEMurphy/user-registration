// this function needs an array to work
function displayUsers(usersArray){
    let row="";
    for(let i=0;i<usersArray.length;i++){
    let user = usersArray[i]; // get each user
    console.log(user);
// create a row=`<>${} <>`
    
        row = `
        <tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td>${user.pay}</td>
            <td>${user.color}</td>
        </tr>`;
        console.log(row);
        $("#usersTable").append(row);
    }
}


// append the user on the html table

    // tmp+="";
    // <div id="${user.id}" class="users">
    //     <div class="user-header">

    //     </div>

    // </div>
// travel the array
// get each user
// display the users

// append the user on the html table



function init(){
    console.log("Listing users");
    let users=readUsers(); // this function is on the storemanager // getting the array
    console.log(users);
    // this is an array
    displayUsers(users); 
}

window.onload=init;

