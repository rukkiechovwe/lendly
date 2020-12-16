
const toggle = document.querySelector(".openBtn");
const navBar = document.querySelector("#sideNav");
toggle.addEventListener("click",()=>{
	toggledisplay(navBar)
	toggleBtn(toggle)
})
const toggledisplay=(elem)=>{
    elem.style.visibility = elem.style.visibility === 'visible' ? 'hidden' : 'visible';
    elem.style.opacity = elem.style.opacity === '1' ? '0' : '1';
    elem.style.transform = elem.style.transform === 'scale(1)' ? 'scale(0.5)' : 'scale(1)';
}
const toggleBtn = (elem)=>{
	elem.className = elem.className === 'closeBtn col' ? 'openBtn col' : 'closeBtn col';
}