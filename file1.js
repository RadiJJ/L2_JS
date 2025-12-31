This is file 1
function hasTwoCubeSums(n) 
{
  const pairs = [];
  for (let a = 1; a <= Math.cbrt(n); a++) 
  {
    for (let b = a + 1; b <= Math.cbrt(n); b++) 
    {
      if (a ** 3 + b ** 3 === n) 
      {
        pairs.push([a, b]);
        if (pairs.length === 2) return true;
      }
    }
  }
  return false; 
}