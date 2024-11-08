let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function(){
	let item = document.createElement("li");
	item.innerText = inp.value;
	ul.appendChild(item);
	inp.value = "";
	let newBtn = document.createElement("button");
	newBtn.innerText = "delete";
	item.appendChild(newBtn);
	newBtn.classList.add("delbtn");
	newBtn.addEventListener("click", function() {
	item.remove();
	});
});

