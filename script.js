let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winningCo = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];
const resetGame = () => {

    boxes.forEach((box)=>{
        box.style.backgroundColor="";
        box.innerText="";

    });
    turn0 = true;
    enableGame();
    msgContainer.classList.add("hide ");
   
}
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "0";
           

           

            turn0 = false;
            box.style.backgroundColor="red";
        } else {

            box.innerText = "X";
          

           

            turn0 = true;
            box.style.backgroundColor="blue";
        }
        box.disabled = true;
        checkWinner();
    });
});
const disableGame = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableGame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratuations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableGame();
}
const checkWinner = () => {
    for (pattern of winningCo) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);

            }

        }
    }

};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


