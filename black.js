let player={
    name:"ganesh",
    chips:145
}
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let cards=[]
let messageEl=document.getElementById("message")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("cards")
let pl=document.getElementById("player-el")
let plc=document.getElementById("player-el-chips")
plc.textContent+=player.chips
function getRandomCard()
{
    let r=(Math.floor(Math.random()*13))+1
    if(r===1)
    {
        return 11
    }
    else if (r===11 || r===12 || r===13 )
    {
        return 10
    }
    else
    {
        return r
    }
}
function Start()
{
    isAlive=true
    let firstCard=getRandomCard()
let secondCard=getRandomCard()
cards=[firstCard,secondCard]
sum=firstCard+secondCard
    Render()
}
function Render()
{
    cardEl.textContent="Cards : "
    for(let i=0;i<cards.length;i++)
    {
       cardEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    
   if(sum<=20)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum===21)
    {
       message="Wohoo! you've got Blackjack!"
        hasBlackJack=true
    }
    else 
    {
        message="You're out of the game!"
        isAlive=false
    }
    messageEl.textContent=message
    
    console.log(messageEl)
 
}


function newcard()
{
    if(isAlive===true && hasBlackJack===false)
    {
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    Render()

    }
    
}