// game Constants & variable
let inputDir = {x:0,y:0};
const foodsound =  new Audio("mixkit-player-recharging-in-video-game-2041.wav");
const gameover = new Audio("mixkit-arcade-retro-game-over-213.wav");
const turn = new Audio("mixkit-quick-jump-arcade-game-239.wav");
const running = new Audio("mixkit-arcade-retro-run-sound-220.wav");
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr= [
    {x:13,y:15}
];
food = {x:6,y:7};
// Gaming Functions 
function main(ctime){    /// setinterval use karte toh fliker aata magar is method se fliker nhi aayega|| gives best fps
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    // console.log(ctime);
}

function isCollide(snakeArr){
    return false;
}

function gameEngine(){
    // part 1: Updating the snake array and food
        if(isCollide(snakeArr)){
            gameover.play();
            running.pause();
            inputDir = {x:0,y:0};
            alert("Game Over ☠☠☠ Press any key to play again!!");
            snakeArr = [{x:13,y:15}];
            running.play();
            score = 0;
        }

    //  If you have eaten the food, increment the score and regenerate the food 
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x ){
        foodsound.play()
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a+ (b-a)*Math.random()),y:Math.round(a+ (b-a)*Math.random())};
    }

    //  Moving the snake 
    for(let i = snakeArr.length -2;i>=0;i--){
        
        snakeArr[i+1] = {...snakeArr[i]}; 
    }
    snakeArr[0].x += inputDir.x; 
    snakeArr[0].y += inputDir.y;
 
    // part 2: Render the snake and food
    // displaying the snake
    board.innerHTML ="";  
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index===0){snakeElement.classList.add('head');}
        else{snakeElement.classList.add('snake');};
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}




//main logic
window.requestAnimationFrame(main);
window.addEventListener("keydown",(e)=>{
    inputDir = {x:0,y:1}; //start the game
    switch(e.key){
        case "ArrowUp":
            turn.play();
            console.log("ArrowUp");
            inputDir.x= 0;
            inputDir.y= -1;
            break;

        case "ArrowDown":
            turn.play();
            console.log("ArrowDown");
            inputDir.x= 0;
            inputDir.y= 1;
            break;
            
        case "ArrowRight":
            turn.play();
            console.log("ArrowRight");
            inputDir.x= 1;
            inputDir.y= 0;
            break;

        case "ArrowLeft":
            turn.play();
            console.log("ArrowLeft");
            inputDir.x= -1;
            inputDir.y= 0;
            break;
    }
});