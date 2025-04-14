let timer = 60;
let score = 0;
let hitRn = 0;

function getNewHit() {
	hitRn = Math.floor(Math.random()*10);
	document.querySelector("#hitVal").textContent = hitRn;
}

function makeBubble() {
	let clutter = "";
	for(let i=1; i<=66; i++){
	let rn = Math.floor(Math.random()*10);
	clutter += `<div class="bubble">${rn}</div>`;
}
	document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
	let timeInt = setInterval(function () {
		if(timer > 0){
			timer--;
			document.querySelector("#timerVal").textContent = timer;
		}else {
			clearInterval(timeInt);
			document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
		}
		
	},1000);
}

function increaseScore() {
	score += 10;
	document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
	let clickedNum = Number(dets.target.textContent);
	if(clickedNum == hitRn){
		increaseScore();
		makeBubble();
		getNewHit();
	}
});

runTimer();
makeBubble();
getNewHit();
