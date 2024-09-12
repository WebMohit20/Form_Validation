let submit_btn = document.querySelector(".submit");


let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let done =document.querySelector(".done")

let correct=false;

function valid(){
    let email_box=document.querySelector("#email").value;
    if(email_box.length>3 && email_box.includes("@") && email_box.includes(".")){
        correct=true;
        error1.style.display="none"
    }
    else{
        correct=false;
        error1.style.display="block"
    }

    let pswrd = document.querySelector("#password").value;
    if(pswrd>8){
        correct=true;
        error2.style.display="none"
    }
    else{
        correct=false;
        error2.style.display="block"
    }
    if(correct){
        done.style.display="block"
    }
}

submit_btn.addEventListener("click",()=>{
    
    let text="Press Ok if your value is correct\nOtherwise Press Cancel";
    if(confirm(text)==true){
        
        alert("Successful signup!");
    }
})



    