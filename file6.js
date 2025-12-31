This is file 6
function wave(str)
{
  let r = []
  for (let i = 0; i < str.length; i++) 
  {
    if (str[i] === " ") continue
    let w = ""
    for (let j = 0; j < str.length; j++) {
      w += i === j ? str[j].toUpperCase() : str[j]
    }
    r.push(w)
  }
  return r
}