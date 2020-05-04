console.log("hello world")
console.log(2+2)
console.log(10%3)
console.log(2**4)
console.log(0.1+0.2)
var a =2
console.log(a+1)
console.log(a++)
var b = true
var c = {
    name:'yang',
    age:'26',
    school:"uts"
}
console.log(c.school)
//严格模式，没生命的变量都会报错
'use strict'
console.log(aa)
var aa = 10
console.log(1===1)

console.log(4+3+"3")
console.log("4"+3+3)
console.log("abc"*2)
//function
let sum = function(a,b){
    return a+b
}
var re = sum(9,8)
console.log(re)

var number = 111222
var no = number.toString()
var no16 = number.toString(16)
console.log(no)
console.log(no16)

//array
var arr = ['a','b','c']
console.log(arr.length)
console.table(arr)

var a1 = [1,2,3].map(x=>x*2)
console.log(a1)
console.log(a1.filter(x=>x>5))

//condition
var cd = 10
if(cd === 10){
    console.log("yes")
}
else{
    console.log("no")
}

var age = 10
var description
if (age <18){
    description = "young"
}
else{
    description = "old"
}
console.log(description)

var description = age < 18 ? "young" : "old" 
console.log(description)

//loop 
for(var i =0; i<10;i++){
    console.log(i)
}
console.log(i)//let i 会报错

//continue break 
//乘法口诀
    for(let i = 1;i<=9;i++){
        let row = ""
        for(let j = i; j<=9;j++){
            row+=(i+"*"+j+"="+i*j)+"\t"
        }
        console.log(row)
    }

//
var a = 100
function test(){
    var aaaa = 300
    function test2(){
        var aaaa =200
        console.log(aaaa)
    }
    test2()
    console.log(aaaa)
}
test()
//console.log(aaaa)

//object
var obj={}
var yang = {
    name:"zhen",
    age:26,
    school:"uts"
}
console.log(yang.school)
console.log(yang["name"])

//
const nums = [2,7,11,15]
const target = 9
var twoSum = function (nums, target){
    let map={}
    for(let i =0;i<nums.length;i++){
        const diff = target - nums[i];
        if(map[diff]!==undefined){
            return[i,map[diff]];
        }
        map[nums[i]] = i;
    }
}
console.log(twoSum(nums,target))


