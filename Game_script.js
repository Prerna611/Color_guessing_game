var colors=generaterandomcolor(6);


var squares = document.querySelectorAll(".square");
var resetbutton=document.querySelector("#reset");
var colorpicked=pickcolors();
var colordisplay=document.getElementById("colordisplay");
var messageD=document.querySelector("#message"); 
var h1=document.querySelector("h1");
var EASYbtn=document.querySelector("#EASYbtn");
var HARDbtn=document.querySelector("#HARDbtn");
EASYbtn.addEventListener("click",function(){
	
	HARDbtn.classList.remove("selected");
	EASYbtn.classList.add("selected");
	colors=generaterandomcolor(3);
	colorpicked=pickcolors(3);
	colordisplay.textContent=colorpicked;
	for(var i=0;i<squares.length;i++)

	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
HARDbtn.addEventListener("click",function(){
	EASYbtn.classList.remove("selected");
	HARDbtn.classList.add("selected");
	colors=generaterandomcolor(6);
	colorpicked=pickcolors(6);
	colordisplay.textContent=colorpicked;
	for(var i=0;i<squares.length;i++)

	{
		
			squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
	
});
resetbutton.addEventListener("click",function(){
	resetbutton.textContent="New colors";
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
	resetbutton.textContent="Play Again ?";
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