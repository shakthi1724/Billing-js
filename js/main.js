var cal=document.querySelectorAll(".bttn");
var unit=document.querySelectorAll(".unit");
var qty=document.querySelectorAll(".in");
console.log(cal);
console.log(unit);
console.log(qty);


var siva=function(qty,unit){
    let a=this.parentNode.previousElementSibling.previousElementSibling;
    console.log(a);
    let b=a.innerText;
    console.log(b);
    let c=parseInt(b);
    console.log(c);
    let d=this.parentNode.previousElementSibling.firstChild;
    console.log(d);
    let e=d.value;
    console.log(e);
    let v=c*e;
    console.log(v);
    let gta=this.parentNode.nextElementSibling;
    gta.innerText=v;
    console.log(gta);

}




cal.forEach(function(btns,index){
    btns.addEventListener('click',siva);
})






