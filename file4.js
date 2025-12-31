This is file 4
function findMissing(list) {  
  let d = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length - 1; i++) 
  {
    if (list[i + 1] - list[i] !== d) {
      
      return list[i] + d;
    }
  }
  return list[0];
}