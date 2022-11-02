
let string="naman"

function reverse(string){
let bag="";
for(let i=0;i<=string.length-1;i++){

bag+=str[i];
}
return bag;
}
let ans=reverse(string);

if(string==ans){
console.log("palindrom")
}else{
console.log("Not palindrom")