

var randomNumber1=Math.floor(Math.random()*6)+1;
var content1 = "./images/dice"+randomNumber1+".png";
    document.querySelector("div.container div.dice img.img1").setAttribute("src",content1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var content2 = "./images/dice"+randomNumber2+".png";
    document.querySelector("div.container div.dice img.img2").setAttribute("src",content2);

if (randomNumber2==randomNumber1)
    {
        document.querySelector("div.container h1").innerHTML="Draw";
    }
else if(randomNumber2>randomNumber1)
    {
        document.querySelector("div.container h1").innerHTML="Player2 WIN 🎌";
    }
else if(randomNumber2<randomNumber1)
    {
        document.querySelector("div.container h1").innerHTML="Player1 WIN 🎌";
    }
