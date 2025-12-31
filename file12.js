This is file 12
function longest(arr, n) {
  let sorted = arr
    .map((s, i) => ({ str: s, len: s.length, index: i }))
    .sort((a, b) => b.len - a.len || a.index - b.index)
  return sorted[n - 1].str
}