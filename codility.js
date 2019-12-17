function solution(A) {
//   remove duplicate elements 
 let noDuplicate = A.filter((item, index) => {
     return  A.indexOf(item) === index
 });

 console.log(noDuplicate)


  let sort =  noDuplicate.sort(function(a, b) {
      return a - b
  });
  

  console.log(sort) 
 let sum = sort.reduce((sum,num) => {
   return sum+=num;
 }, 0)
 console.log(sum);
 let n = sort.length + 1;
 let expectedSum = Math.floor((n * (n + 1))/2);
 
  if(sum <= 0) {
      return 1 
  }
 return expectedSum - sum
}


console.log(solution([1,3,6,4,1,2]), 5);
console.log(solution([1,2,3]), 4);
console.log(solution([-1,-3]), 1);

