const p1=document.querySelector(".img1");
const p2=document.querySelector('.img2');
const h1=document.querySelector('h1');


    const randomNumber1=Math.floor(Math.random()*6)+1;

    console.log(randomNumber1);

    if (randomNumber1===1){
        p1.setAttribute('src', 'images/dice1.png')
    }

    else if (randomNumber1===2){
        p1.setAttribute('src', 'images/dice2.png')
    }

    else if (randomNumber1===3){
        p1.setAttribute('src', 'images/dice3.png')
    }

    else if (randomNumber1===4){
        p1.setAttribute('src', 'images/dice4.png')
    }

    else if (randomNumber1===5){
        p1.setAttribute('src', 'images/dice5.png')
    }

    else{
        p1.setAttribute('src', 'images/dice6.png')
    };



    const randomNumber2=Math.floor(Math.random()*6)+1;

    console.log(randomNumber2);

    if (randomNumber2===1){
        p2.setAttribute('src', 'images/dice1.png')
    }

    else if (randomNumber2===2){
        p2.setAttribute('src', 'images/dice2.png')
    }

    else if (randomNumber2===3){
        p2.setAttribute('src', 'images/dice3.png')
    }

    else if (randomNumber2===4){
        p2.setAttribute('src', 'images/dice4.png')
    }

    else if (randomNumber2===5){
        p2.setAttribute('src', 'images/dice5.png')
    }

    else{
        p2.setAttribute('src', 'images/dice6.png')
    };






if(randomNumber1>randomNumber2){

   h1.innerHTML= "player1 wins";

}

else if(randomNumber1<randomNumber2){

    h1.innerHTML= "player2 wins";

};
