/** @type {HTMLImageElement} */
const img = document.querySelector(".cardHolder .card");

img.style.setProperty("--degX", `0deg`);
img.style.setProperty("--degY", `0deg`);

img.addEventListener("mousemove", e => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let offsetX = mouseX - window.innerWidth/2;
    let offsetY = mouseY - window.innerHeight/2;
    
    img.style.setProperty("--xPos", `${offsetX}px`);
    img.style.setProperty("--yPos", `${offsetY}px`);
    
    img.style.setProperty("--degX", `${offsetX/5}deg`);
    img.style.setProperty("--degY", `${-offsetY/10}deg`);
});
