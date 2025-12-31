This is file 5
function primeFactors(n){
   let r = ""
  for (let i = 2; i <= n; i++) {
    let c = 0
    while (n % i === 0) {
      n = n / i
      c++
    }
    if (c > 0) {
      r += "(" + i + (c > 1 ? "**" + c : "") + ")"
    }
  }
  return r
}