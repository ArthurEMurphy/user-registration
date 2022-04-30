const STORE_KEY = "users";

function saveUser(user){
    //load old data
    let oldDate=readUsers(); // getting localstorage info
    oldData.push(user);
    // console.log(oldData);
    // console.log(user);
    let val = JSON.stringify(oldData);
    // console.log(val);
    localStorage.setItem(STORE_KEY,val); // JSON
}

function readUsers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data); // JSON
    if(!data){ //is no data?
        // if you get here it means is empty
        return[];
    }else{
        //we have data
        let list = JSON.parse(data); // passing JSON to object
        return list;
    }

}