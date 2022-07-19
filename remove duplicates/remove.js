//adding two arrays togethor and remove duplicates 

let array1 =[1,5,8,9,3,2,2,9,6,4,7];

let array2 = [3,8,3,6,4,9,2,5,6,];

//merging to arrays

let thirdArr = array1.concat(array2);
thirdArr.sort();
// console.log(thirdArr);

let newvar = [];

for (let i =0; i<thirdArr.length; i++){
    
    if (newvar.indexOf(thirdArr[i]) == -1) {
        newvar.push(thirdArr[i]);
        console.log(newvar);

    } 
};

