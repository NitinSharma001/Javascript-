// var a =['rohan', 'arpit', 'prince', 'kanika']
// a.sort();
// console.log(a)
// // use for sorting alphabets in accending order
// a.reverse();
// console.log(a);
// // use for sorting alphabets in deccending order
// var b = ['ritik', 'rohan','prince', 'kanika']
// b.push('arpit','salman');
// console.log(b);
// // push and pop is use for adding and delelting values from any array from last
// var c = [1,2,3,4,5,6]
// c.unshift();
// console.log(c)
// //  unshift and shift is use for adding and delelting values from any array from last
// var d =['1','2']
// var e = d.join('/');

//console.log(e);
//filter method in arary
// var ages = [10,12,19,20];
// var b = ages.filter(checkAdult);
// console.log(b);

// function checkAdult(age){
//     return age >= 18;
// }
// var ages = [23,12,44,22,12,44,78,12,]
// var b = ages.filter(check);
// console.log(b)
// function check(ages){
//     return ages <= 18;
// }
// map method
var ary = [
    {fname : 'nitin',lname :'sharma'},
    {fname : 'prince',lname :'thakur'},
    {fname : 'arpit',lname :'thakur'}
]
ary.map(test);
//console.log(b);
function test(b){

console.log(b.fname + "  " + b.lname);
// console.log(b);
// console.log(ary);
}


