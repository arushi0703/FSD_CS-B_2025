// console.log("Hello World");

//console.log("a="+a);
// var a=40;
// if(a>10){
//     var a=300;
//     console.log("a inside ="+a);
// }else{
// console.log("else condition");
// }
// console.log("a outside ="+a);

// let a=20;
// if (a==20) {
//     console.log("Equal Data");
// } else {
//     console.log("Not Equal Data");
// }
// if (a===20) {
//     console.log("Equal Data");
// } else {
//     console.log("Not Equal Data");
// }

// const myname = "Arushi";
// // console.log("Hiii....."+myname);
// const data=`Hello...${myname}`;
// console.log(data);


//function as an expression
// const data1=function msg(name){
//     return name+"Welcome to FSD";
// }
// const msg=data1("Arushi, ");
// console.log(msg);

// function msg(name){
//     return name+"Welcome to FSD";
// }
// const data=msg("Arushi, ");
// console.log(data);


//Arrow Function
// const data=(name)=>{
//     //console.log("Hi...."+name);
//     return name+"Hi...."+name;
// }
// const result=data("Arushi, ");
// console.log(result);

//single line arrow function
// const data=name=> name;
// console.log(data("Good Morning Arushi"));

//IIFE
// (function(name){
//     console.log("Hola...."+name);
// })("Arushi");
// by arrow function
// (()=>{
//     console.log("Hola....");
// })();

// setTimeout(()=>{
//     console.log("Hiii.... I am using Timeout function");
// },1000);

// setInterval(()=>{
//     console.log("Hiii.... I am using Interval function");
// },2000);

// function greetings(msg="Bonjour"){
//     console.log(msg+" Arushi");
// }
// greetings();

function selectlanguage(lang) {
    let data;
    if (lang == 'java') {
        function javaCompiler() {
            return "Java compiler selected";
        }
        data = javaCompiler();
    }
    if (lang == 'C') {
        function CCompiler() {
            return "C compiler selected";
        }
        data = CCompiler();
    }
    else {
        return "No such compiler available";
    }
    selectlanguage('java');
    console.log(data);
}
