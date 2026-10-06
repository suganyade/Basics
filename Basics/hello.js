const name='suganya';
const age='21';
function displayUser(userName,UserAge){
    return'user name is'+userName+'\n'
    +'age is'+UserAge;

}
console.log(displayUser(name,age));

const number =(a,b)=>a+b;
console.log(number(11,22));

const student={
name:'suganya',
class:'Computer Science and Engineering',
greet:function(){
console.log('hello'+this.name);
}
};
console.log(student);
student.greet();

const arr=[1,3];

 arr