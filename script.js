/*let a=10
{
    let a=20
    console.log(a)
}
console.log(a)*/
/*let obj1={
    name: 'abc',
    age:22
}
let obj2=obj1
obj2.name='xyz';
console.log(obj1.name)
if(0)
{
    console.log('true')
}
if(1)
{
    console.log("false")
}*/
/*console.log(5+'5')
console.log(5-'5');
console.log(5=='5')

let arr=[1,'new',2,'3']
console.log(arr);*/
/*let marks=30;
if(marks>=40)
{
    console.log('pass')
}
else{
    console.log('fail')
}
let result=marks>=40?'pass':'fail'
console.log(result);
*/
console.log(10^6)
function add(a,b){
    console.log(a+b)
}
add(2,4)
const sub=(a,b)=>{console.log(a-b)}
sub(10,3)
const mul=(a,b)=>{console.log(a*b)}
mul(10,3)
const calc=(a,b,fun)=>{
    fun(a,b)
}
calc(4,3,add)

let num=[2,3,4,5,6,7,8]
for(let index in num){
    console.log(num[index])
}
let num1=[2,3,4,5,6,7,8]
let obj={
    name:'abc',
    state:{
    city:'asd',
   
},
 age:22
}
/*for(let index in obj){
    console.log(obj[index]);
   
}
    */
   console.log(obj?.state?.city)