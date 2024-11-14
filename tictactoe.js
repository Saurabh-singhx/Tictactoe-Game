let boxes = document.querySelectorAll(".box");
let resetbutn = document.querySelector("#resetbutn");
let winnerbtn = document.querySelector("#newbtn");
let winnershow = document.querySelector("#winnerbox");
let messagewin = document.querySelector("#new");

let playerx = true;
let ct = 0;
resetbutn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled = false;
        winnershow.style.display ="";
        box.style.color="red";
        
    });
});
winnerbtn.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled = false;
        winnershow.style.display ="";
        box.style.color="brown"
        
    });
});

let allPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

boxes.forEach((box)=>{
    
    box.addEventListener("click", ()=>{
        if(playerx){
            box.innerText="X";
            playerx = false;
            box.style.color="yellow"
        }else{
            box.innerText = "O";
            playerx = true; 
            box.style.color="orange"
            
        }
        box.disabled = true;
        checkwinner();
    });
});
const disableallbt = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
    
}
const checkdraw = ()=>{
    for(let box of boxes){
        if(box.innerText === ""){
            return;
        }
    }
    winnershow.style.display ="flex";
    messagewin.innerText ="Draw";

}
const checkwinner = ()=>{
    for(let num of allPatterns){
        let first = boxes[num[0]].innerText;
        let second = boxes[num[1]].innerText;
        let third = boxes[num[2]].innerText;
    
        if(first !=="" && second!="" && third!==""){
            if(first ===second && second === third){
                winnershow.style.display ="flex";
                messagewin.innerText ="Winner is"+"  "+ first ;
                disableallbt();
            }else{
                checkdraw();
            }
        }
        // return;
    }
}