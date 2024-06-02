const request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    var res=result.filter((ele)=>ele.region==="Asia");
    console.log("Countries from Asia Region:");
    console.log("-------------------------------");
    var a=res.map((ele)=>console.log(ele.name.common));
    console.log("-------------------------------");
    console.log("Countries with Population<200000");
    console.log("-------------------------------");
    var res1=result.filter((ele)=>ele.population<200000);
    var b=res1.map((ele)=>console.log(ele.name.common));
    console.log("-------------------------------");
var res2=result.forEach((ele)=>
    console.log(ele.name.common,ele.capital,ele.flags.png));
console.log("-------------------------------");
console.log("Total Population :");
console.log("-------------------------------");
let res3=result.map((ele)=>ele.population);
const totalp=res3.reduce((sum,i)=>{
    return sum+i;
},0);
console.log(`Total Population of all Countries: ${totalp}`);

console.log("-------------------------------");
console.log("Country with USD Currency :");
console.log("-------------------------------");
let res4=result.filter((ele)=> ele.currencies && ele.currencies.USD);
res4.forEach((ele)=>console.log(ele.name.common));
}