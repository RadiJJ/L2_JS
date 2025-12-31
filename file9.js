This is file 9
function expandedForm(num) {
  let s = String(num)
  let r = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "0") {
      let z = s[i] + "0".repeat(s.length - i - 1)
      r.push(z)
    }
  }
  return r.join(" + ")
}