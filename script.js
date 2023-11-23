function update(){
    const btn=document.getElementById("enterBtn")
    const c=document.getElementById("status").textContent;
    const newc =document.createElement('h1');
    newc.textContent=c;
    const parent =document.getElementById("status").parentNode;
    parent.replaceChild(newc,document.getElementById('status'));
}
const btn = document.getElementById("enterBtn");
btn.addEventListener("click",update);