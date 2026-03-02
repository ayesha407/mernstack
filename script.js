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



   let arr=[1,2,3,4,5,6]
   const addone=(num)=>{return num+1}
   let res=arr.map(addone)
   let double=arr.map((num)=>num*2)
   console.log(double)


   let srr=[2,4,5,6]
   const addone111=(num)=>{return num+1}
   let res11=srr.map(addone)
   let double1=srr.map((num)=>num*5)
   console.log(double1)

   let products=[
    {id:1,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:2000},

   ]
   //let productName=products.map((product)=>{console.log(product.name)})
     let arr1=[1,2,3,4,5,6]
     let b=arr1.filter((num)=>num>2)
     console.log(b);
     

     let arr2=[1,2,3,4,5,6]
     let sum=arr2.reduce((total,curr)=>{return total+curr},0)
     console.log(sum);

     let arr3=[11,22,33,44,55]
     let[first,...other]=arr1
     console.log(other)
     let arr4=[66,77]
     let arr5=[...arr1,...arr2]
     console.log(arr3);

    
const promise=new Promise((resolve,reject)=>{
    let success=false
    if(success)
    {
        resolve("data received successfully")
    }
    else{  
        reject("error fetching data")
    }
    resolve('sucess')
})
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))

       async function fetchData() 
{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await res.json();

        data.map((user) => console.log(user.City));
    }

    catch (error) {
        console.log(error);
    }
}

fetchData();


setTimeout(()=>{
    console.log("will log after 2 seconds")
},0)
console.log('end')
