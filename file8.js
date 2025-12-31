This is file 8
function solution(str){
  if (str.length % 2 === 1) str += "_"
  let r = []
  for (let i = 0; i < str.length; i += 2) 
  {
    r.push(str[i] + str[i + 1])
  }
  return r
}