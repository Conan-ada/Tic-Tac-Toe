let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#reset-btn");
let msg=document.querySelector(".msg");
let nbtn=document.querySelector("#new-btn");
let turnO=true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btn.addEventListener("click",()=>{
    resetGame();
})



nbtn.addEventListener("click",()=>{
    resetGame();
});



const resetGame=()=>{
    turnO=true;
    nbtn.classList.add("hide");
    msg.classList.add("hide");
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" ";
    }
}



boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            turnO=false;
        }else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});



const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}



const showWinner=(winner)=>{
    btn.classList.remove("hide");
    msg.innerText=`Congratulations Winner is ${winner}`;
    nbtn.classList.remove("hide");
    disableBoxes();
}



const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner");
                showWinner(pos1);
            }
        }
    }
}