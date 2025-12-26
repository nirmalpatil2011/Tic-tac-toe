let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn"); 
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container")


let turnO = true;

const winpattern  = [

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {

    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide");

}
    


boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disablebox = () => {

    for(let box of boxes){
        box.disabled = true;
    }

}
const enablebox = () => {

    for(let boxi of boxes){
        boxi.disabled = false;
        boxi.innerText = "emp";
    }

}
const showWinner = (winner) => {

msg.innerHTML = `CONGRATULAIONS ,WINNER IS "${winner}"`;
msgcontainer.classList.remove("hide");
disablebox();

} 



const checkWinner = () => {

    for(let pattern of winpattern){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="emp" && pos2val!="emp" && pos3val!="emp"){

            if(pos1val === pos2val && pos2val === pos3val ){
                console.log("WINNER");
                showWinner(pos1val);
            }
        }

    }
};
newbtn.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)



