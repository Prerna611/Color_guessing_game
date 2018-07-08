var colors=generaterandomcolor(6);


var squares = document.querySelectorAll(".square");
var resetbutton=document.querySelector("#reset");
var colorpicked=pickcolors();
var colordisplay=document.getElementById("colordisplay");
var messageD=document.querySelector("#message"); 
var h1=document.querySelector("h1");

resetbutton.addEventListener("click",function(){
colors=generaterandomcolor(6);
colorpicked=pickcolors();
colordisplay.textContent=colorpicked;	
for(var i=0;i<squares.length;i++)
	{
	squares[i].style.backgroundColor=colors[i];
}
})
colordisplay.textContent = colorpicked;

for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
console.log(clickedcolor,colorpicked);
if(clickedcolor === colorpicked)
{
	messageD.textContent="Correct :)";
	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.backgroundColor=colorpicked;
}
h1.style.backgroundColor=colorpicked;
}
else
{
	this.style.backgroundColor="#232323";
	messageD.textContent="Oops :( Try again";
}
	});
}
function pickcolors()
{
	var m=Math.floor(Math.random()*colors.length);
	return colors[m];
}
function generaterandomcolor(num)
{
var arr = []
for(var i=0;i<num;i++)
{
	arr.push(randomcolors())
}
return arr;
}
function randomcolors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+b +")";
}