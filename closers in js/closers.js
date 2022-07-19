let totalmarks = 4500;
let sum = function studentssum(a){// creating a function
  return function (b){// adding a new function in function
    return a + b + totalmarks ;

    
  }   

}
let store = sum (200);// calling function
console.log("totalmarks of students " + store(5))