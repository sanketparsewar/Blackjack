// here we have created sample person object 
// let person={name:"sanket",
//     age:23,
//     country:"India"
// }
// function logData(){
//     console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
// }
// logData()

let age=21
if(age<21){
    console.log("You are not allowed to enter!")
}else {
    console.log("Welcome.")
}

// create an objet of a player
let player={
    name:"Sanket",
    token:1500
}


// rule in blackjack is
// sum < 21       still in game and can draw new card
// sum == 21      winner
// sum > 21       looser
let firstCard=getRandomCard();
let secondCard=getRandomCard();
let sum=firstCard+secondCard
let cards=firstCard+", "+secondCard
let cardArray=[firstCard,secondCard]
let newcard=0

const messageEl=document.getElementById("message-el")
const cardEl=document.getElementById("cards")
const sumEl=document.getElementById("sum")
const newCardEl=document.getElementById("ewCard-el")


let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $ "+player.token+" M"
;let message=''
//this we have created to keep tract of the state 
let hasBlackJack=false; 
//this we have created to know whether the player is still in game or not
let isalive=true;

function startGame(){
    renderGame();
}


function renderGame(){
    //this is used if we are not using cardArray
    // if(newcard!=0){
    //     cards=cards+", "+newcard
    // }
    // cardEl.textContent="Cards: "+cards
    // sumEl.textContent="Sum: "+sum;
    cardEl.textContent="Cards: "+cardArray 
    
    sumEl.textContent="Sum: "+sum;

    if(sum < 21){
        message="Do you want to draw a new card?🙂"
        
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack!🥳"
        hasBlackJack=true;
    }else{
        message="You're out of the game! 😭"
        isalive=false;
    }
    messageEl.innerHTML=message;
}

function newCard(){
    if(isalive && !hasBlackJack){

        message="Do you want to draw new card?"
        newcard=getRandomCard();
        cardArray.push(newcard);
        sum+=newcard
        renderGame()
        // console.log(message)
        console.log(cardArray)
    }
}
// console.log(hasBlackJack)
// console.log(isalive)
function getRandomCard(){
return Math.floor((Math.random() * 13) + 1)
}





