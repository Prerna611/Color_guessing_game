var colors=[
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"

]
var squares = document.querySelectorAll(".square");

var colorpicked=colors[3];
var colordisplay=document.getElementById("colordisplay");
var message=document.querySelector("#message"); 
colordisplay.textContent = colorpicked;
for(var i = 0; i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;

if(clickedcolor === colorpicked)
{
	message.textContent="correct";
	for(var i=0;i<squares.length;i++)
	{
	squares[i].style.backgroundColor=clickedcolor;
}
}
else
{
	this.style.backgroundColor="#232323";
	message.textContent="try again";
}
	});
}

