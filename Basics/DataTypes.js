const name ="Suganya"; //String
const age =12;//int
const obj ={name:"Sd",
    Class:"BE"
};//object
const isActive =true;//boolean
let y; //undefined
const arr=["Apple","Orange","Grapes"];
 
//Functions ->Mostly for  reuse code and make programms easy
function a (){
    console.log("Happy");

}
a();

//Function with parameters 
function add (a,b,c){
    return(a+b+c); //return statment
}
console.log(add(11,22,23));

//Arrow FUnction 
const mul = n=>{
    
    return(n*11);
}
console.log(mul(11)); // declare the n in inside 

//For each
const forloop =[11,2,3,21];
 forloop.forEach (num=>{
    console.log(num);
 });
 //map
 const numbers =[23,23,12,3,3];
 const mapping =numbers.map(n=>n*2);
 const map2 =numbers.map(n1=>n1/3);
 console.log(mapping);
 console.log(map2);
//filter
const num1 =[5,10,11,20,25];
const divide =num1.filter(n=>n>20);
console.log(divide);
//sort the array 
const sorting =num1.slice(1,4);
console.log(sorting);

//normal
function names(){
console.log("hiii");
}
names();

//With Parameters 
function add(a,b,c){
return(a+b+c);
}
console.log(add(3,4,6));

//Arrow function 
const   double =n=>n*12;
const n =11;
console.log(double(n));

//Return MUltiple Lines
const num = (...args) => {
    const multi = args.map(n => n * 7);
    console.log(multi);
};

num(2, 3, 5);

const Multiplication = (...args)=>{
    const mul=args.map(n=>n*n+2);
    console.log(mul);
}

//Arrays of Object
let Fruits =['Apple','Mango','Grapes'];
Fruits.push('Orange');//Add at first
Fruits.pop();//Remove from firts
Fruits.shift();//Remove from first
Fruits.unshift('Kiwi'); //Add at First

console.log(Fruits);  

//CallBack Functions  
function greet(Newname,CallBack){
    console.log(Newname+"names");
CallBack();
}
    
greet("SAndy",()=>
{
    console.log("welcome");

});
//Create Promises 
const promise =new Promise((resolve,reject)=>{
    let sucess =true ;
    setTimeout(()=>{
        if(sucess){
            resolve("Operation Successful");
        }
        else {
            reject("Operation Failed");
        }
    },2000);
   
})
promise
    .then(res => console.log(res))
    .catch(err => console.log(err));
    

    //SET TIMEout
    const time = setTimeout(()=>{
        console.log("Happy")
    },6000);
    
    //setInterval 
    const Interval =setInterval(()=>{
        console.log("Running");
    
    },1000);
    setTimeout(()=>{
        clearInterval(Interval);
        console.log("Stopped");
    },7000);

    //Async Await functions  
    async function Fetching() {
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            let data =await response.json;
            console.log(data);
        }
        catch(err){
            console.error("error",err);
        }
        finally{
            console.log(fetch);
        }

    }
    Fetching();

    //Sort
    const arrays =[11,33,22,1223];
    const maps = arrays.map(n=>n*23);
   console.log(maps);

   //multiplied value inside map:
   const numeric =[12,32,43,54];
   const mappings = numeric.map(n=>{
    const result = n*12;
    return result;
   })
   console.log("the multiple values executed",mappings);

   //filter 
   const filters =['apple','grapes','kiwi','guva'];
   const filtering = filters.filter(str=>{
    const results =str.includes('a');
    return results;
   })
   console.log("the fruit contains the a character",filtering);

   //Ternary Operator 
   let ages=19;
   let status =ages>=18?"major":"minor";
   console.log(status);

   //Template LIterals 
   const hero ="Harry Potter";
   const Friend ="Dobby";
   console.log(`${hero}is the friend of ${Friend}`);

   //IIFE function 
   (function (){
    console.log("IIFE function ");
   })();

   (()=>{
    console.log("Hello");
   })();
   //join
   const joins =["hello","world"].join("");
   console.log(joins); 
   const dob = ["2004","07","06"].join("-");
   console.log(dob);

   const Fantasy="HarryPotter";
   const splitting = Fantasy.split("").reverse().join("");
   console.log(splitting); 

   //find 
   const arr1= [11,23,4,45];
   const finding = arr1.find(n=>n>20);
   console.log(finding);

   const Everymethod =arr1.every(n=>n>0);
   console.log(Everymethod);

 const arr2 = [11, 3, 25, 7, 2];

const sortings = arr2.sort((a, b) => a - b);

console.log(sortings);

const arr3=[1,2,[3,4],5];
arr3.flat(1);