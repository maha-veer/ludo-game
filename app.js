alert("Rule : The Player Who Score 100 very first will Win");
const usrname = prompt('Enter Your Name Please')
document.getElementById('welcome-text').innerText =" WELCOME  "+usrname;
// let define two variable which store the score of the players
let playerOneScore =0;
let playerTwoScore =0;

// let store the dom values
let pOS = document.getElementById('player-one-score');
let pTS = document.getElementById('player-two-score');

// let create a function which update and declare winner
let img1= document.getElementById('img1');
let img2= document.getElementById('img2');

function playLudo(){
	
    let score1=Math.floor(Math.random()*(6-1+1)+1);
    document.getElementById('playerOneCurrentScore').innerText=score1;
    switch(score1){
        case 1: img1.src='one.png';
        break;
        case 2: img1.src='two.png';
        break;
        case 3: img1.src='three.png';
        break;
        case 4: img1.src='four.png';
        break;
        case 5: img1.src='five.png';
        break;
        case 6: img1.src='six.png';
        break;
    }
    playerOneScore+=score1;
    pOS.innerText=playerOneScore;
    console.log(pOS)
    let score2=Math.floor(Math.random()*(6-1+1)+1);
    document.getElementById('playeTwoCurrentScore').innerText=score2;
    switch(score2){
        case 1: img2.src='one.png';
        break;
        case 2: img2.src='two.png';
        break;
        case 3: img2.src='three.png';
        break;
        case 4: img2.src='four.png';
        break;
        case 5: img2.src='five.png';
        break;
        case 6: img2.src='six.png';
        break;
    }
    playerTwoScore+=score2;
    pTS.innerText=playerTwoScore;
	// music
	document.getElementById('sound').play()
	
    if(playerOneScore>=100||playerTwoScore>=100){
        if(playerOneScore>playerTwoScore){
            alert(usrname+' is Winner')
            document.getElementById('welcome-text').innerText =" Winner is "+usrname;
        }else{
            alert('Mahaveer is Winner')
            document.getElementById('welcome-text').innerText =" Winner is Mahaveer";
        }
    }  
	// diasble button for 1 second
	document.getElementById("btn1").disabled = true;
    setTimeout(function(){document.getElementById("btn1").disabled = false;},1000);
}