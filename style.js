
let orignalNumber="<h1>25.12345</h1>"
document.getElementById('orignalText').innerHTML= orignalNumber;
function show(recieveOutPut){
    document.getElementById('outPut').innerHTML="<h1> " + recieveOutPut + "</h1>";
}
function RoundNumber(){
    let inputValue=document.getElementById('inputText').value;
    if(!inputValue){
        alert('please enter number in floating for round!');
        return
    }
let RoundNumber=Math.round(inputValue);
console.log(RoundNumber)
show(RoundNumber);
 } 
 function CeilNumber(){
    let inputValue=document.getElementById('inputText').value;
    if(! inputValue){
        alert('please enter number in floating for ceil Number!')
        return
    }
let ceilNumber=Math.ceil(inputValue);
console.log(RoundNumber)
show(ceilNumber);
 }
 function FloorNumber(){
    let inputValue=document.getElementById('inputText').value;
    if(! inputValue){
        alert('please enter number in floating for floor Number!')
        return 
    }
let floorNumber=Math.floor(inputValue);
console.log(RoundNumber)
show(floorNumber);
 }
 function GenerateNumber(){  
   let generateNumber=Math.random();
   console.log(RoundNumber)
   show(generateNumber);
    }
function ThrowDice(){
       let randomNumber=Math.random();
       randomNumber=(randomNumber * 6)+1;
       let diceNumber=Math.floor(randomNumber);
       show(diceNumber);
} 
function GenerateStrongPassword(){
    let length=document.getElementById('inputText').value;
    if(!length){
alert("please enter size of password in number!");
return
    }
    let randomString=" ";
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase="abcdefghijklmnopqrstuvwxyz";
    let num="0123456789";
    let symble="/?.,_+=*%$#@!~`";
    let totalString=upperCase + lowerCase + num + symble;
    let size=length;
    for(let i = 0; i< size; i++){
        let randomNumber=Math.random();
        randomString += totalString.charAt(Math.floor(randomNumber * totalString.length));
    }
    show(randomString);
}
function ConvertingStrings(){
    let num=document.getElementById('inputText').value;
    if(!num){
alert("please enter number for Converting Sytring!");
return                               
}
let typeOfChngeNum1=typeof(num);
let changeNum=parseInt(num);
let typeOfChngeNum=typeof(changeNum);
document.getElementById('outPut').innerHTML='<p>Your Number is This <b> '+ num +'</b> And Type of Number is This<b> '+typeOfChngeNum1 +'</b>:<br> After Changing The Number is This <b> '+ changeNum +'</b> And Type of Number is This<b> '+typeOfChngeNum +'</b>: </p>'
}
function ControllingLength(){
    let num=document.getElementById('inputText').value;
    if(!num){
alert("please enter number for Fixed length!");
return                               
}
let changeNum=Number(num);
let fixedNum=changeNum.toFixed(2);
document.getElementById('outPut').innerHTML='<p>Your Number is This <b> '+ num +'</b> After Fixed<b> '+fixedNum +'</b>: </p>'
}
function CalculateGST(){
    let num=document.getElementById('inputText').value;
    if(!num){
alert("please enter amount to calculate tax!");
return                               
}
num=Number(num);
let taxInput=+prompt('Enter your tax!')
let tax=num * (taxInput/100);
let gst=num + tax;
document.getElementById('outPut').innerHTML='<p>Your bill = <b class=" text-success"> '+ num +':</b><br>Your Tax is <b>'+ taxInput+'%</b> =<b class=" text-primary"> '+tax+'</b>:<br> Your Total Price is = <b class=" text-danger"> '+gst+'</b>:</p>'
}
document.getElementById('org').onclick=function(){
    document.getElementById('outPut').innerHTML=" "
}
document.getElementById('clear').onclick=function(){
    document.getElementById('inputText').value=" "
}
  