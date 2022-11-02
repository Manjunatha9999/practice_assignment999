function checkprime(num){
let count=0;
    for(let i=1;i<=num;i++){
if(num%i==0){
    count++;}
if(count==2){
    return true;
}
else{
return false;
}}}
let res=checkprime(19);
if(res==true){
    console.log("prime");
}
else{
    console.log("not prime")
}