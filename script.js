const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
	const maxX = window.innerWidth - noBtn.offsetWidth;
	const maxY = window.innerHeight - noBtn.offsetHeight;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	noBtn.style.left = randomX + "px";
	noBtn.style.top = randomY + "px";
});

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
	window.location.href = "index2.html";
});