This is file 7
function toWeirdCase(string)
{
  let result = ""
  let word = ""
  for (let i = 0; i < string.length; i++) 
  {
    let char = string[i]
    if (char === " ") 
    {
      result += word + " "
      word = ""
    } else 
    {
      let index = word.length
      word += index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    }
  }
  result += word
  return result
}