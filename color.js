let numsquares=6;
let colors=generaterandomcolor(numsquares);
let squares=document.querySelectorAll(".square");
let pickedcolor=pickcolor();
let colordisplay=document.querySelector("#colordisplay");
let messagedisplay=document.querySelector("#message");
let resetbtn=document.querySelector("#reset");
let h1=document.querySelector("h1");
let easybtn=document.querySelector("#easybtn");
let hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares=3;
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;

	for(let i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});
hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numsquares=6;
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(let i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}


});

resetbtn.addEventListener("click",function(){
	colors=generaterandomcolor(numsquares);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	message.textContent="";

	this.textContent="New colors";
	for(let i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
});
colordisplay.textContent=pickedcolor;
console.log(pickedcolor);

for(let i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
    
    squares[i].addEventListener("click",function(){
    	let clickedcolor=this.style.background;
    	 console.log(clickedcolor);

    	if(clickedcolor===pickedcolor){
    		messagedisplay.textContent="correct!";
    		resetbtn.textContent="Play Again?";
    		changecolor(clickedcolor);
    		h1.style.background=clickedcolor;
    	}
    	else{
    		this.style.background="#232323";
    		messagedisplay.textContent="Try Again";
    	}
    });

}

function generaterandomcolor(num){
	let arr=[];
	for(let i=0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	let r=Math.floor(Math.random()*256);

	let g=Math.floor(Math.random()*256);

	let b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}
function pickcolor(){
	random=Math.floor(Math.random()*colors.length)
	return colors[random];
}

function changecolor(color){
	for(let i=0;i<squares.length;i++){
		squares[i].style.background=color
	}
}
// the common mistake is look for rgb(23, 45, 5) spaces between different color
//that is only the major mistake;


