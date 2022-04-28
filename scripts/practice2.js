// click on the button and increase the counter
let c=0;
const DIV=$("#counter");
console.log(DIV);

function counter(){
    c++;
    DIV.text(c);
    $
}

function init() {
    $("#link-info2").hide();
    // hook event
    $("#btn-counter").on(`click`,counter);
    $("#btn-counter").on(`mouseover`,function(){
        console.log("The user attempts a click");
    });

        $(`#link-info1`).on(`click`, function(){
            $("#div-info2").hide();//hide
            $("#div-info1").show();//show
        })    
        
        $("#link-info2").on("click",function(){
            $("#div-info1").hide();//hide
            $("#div-info2").show();//show    
        });
    
}
// function
    //var counter
    //display the var into the id=counter
window.onload=init