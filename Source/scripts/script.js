let inputtext=document.getElementById('Password');
let length=12;
const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const Numbers="0123456789";
const Symbols="!£$%^&*()_+?>:@~}{|\,./";
const allChars=UpperCase+lowerCase+Numbers+Symbols;
function studiodarkorignals(){
    let Password ='';
    Password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += Numbers[Math.floor(Math.random() * Numbers.length)];
    Password += Symbols[Math.floor(Math.random() * Symbols.length)];
    while(length>Password.length){
    Password+=allChars[Math.floor(Math.random() * allChars.length)];
    }
    inputtext.value=Password;
}
let btn=document.getElementById('gnbtn');
btn.addEventListener('click',()=>{
    studiodarkorignals();
})
function copypassword(){
    inputtext.select();
    document.execCommand('copy');
}
let copier=document.getElementById('cooopy');
copier.addEventListener('click',()=>{
    copypassword();
})