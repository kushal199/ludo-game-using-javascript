var rand1=Math.floor(Math.random()*6)+1;
var image="ludo"+rand1+".png";
var newimage="img/"+image;
document.querySelectorAll("img")[0].setAttribute("src",newimage);

var rand2=Math.floor(Math.random()*6)+1;
var image1="ludo"+rand2+".png";
var newimage1="img/"+image1;
document.querySelectorAll("img")[1].setAttribute("src",newimage1);


if(rand1>rand2)
{
    document.querySelector("h1").innerHTML="PLAYER 1 WIN";
}
else if(rand1<rand2)
{
     document.querySelector("h1").innerHTML="PLAYER 2 WIN";
}
else
{
    document.querySelector("h1").innerHTML="DRAW!";
}
