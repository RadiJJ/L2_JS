This is file 14
function isCircleSorted(arr){
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    
    let next = (i + 1) % arr.length
    if (arr[i] > arr[next]) count++
    if (count > 1) return false
  }
  return true
}