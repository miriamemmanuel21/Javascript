// function  addnumbers(x,y){
//     let answer = x + y;
//     return answer
// }

// addnumbers(2,3)

// module.exports = addnumbers;



// 


// let array = [1,3,4,5,6]
// let arr = [];

// array.forEach((num)=>{ arr.push(num * 2);})

// // let answer = array.forEach((num)=>{return(num * 2);})
// console.log(arr)


// const scores = [95, 78, 85, 60, 45, 92];

const convertToGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F'; 
};

const letterGrades = scores.map(convertToGrade);

console.log(letterGrades);


