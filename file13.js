This is file 13
function hexStringToRGB(hexString) {
  hexString = hexString.replace("#", "").toUpperCase()
  let r = parseInt(hexString.slice(0, 2), 16)
  let g = parseInt(hexString.slice(2, 4), 16)
  let b = parseInt(hexString.slice(4, 6), 16)
  return { r: r, g: g, b: b }
}