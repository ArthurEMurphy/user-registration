function saveUser(user){
    // console.log(user);
    let val = JSON.stringify(user);
    // console.log(val);
    localStorage.setItem("users",val);
}