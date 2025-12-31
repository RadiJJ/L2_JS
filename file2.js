This is file 2
function ipv4Parser(ip, mask) {
  const a = ip.split('.').map(Number);
  const b = mask.split('.').map(Number);
  const c = [];
  const d = [];

  for (let i = 0; i < 4; i++) {
    const n = a[i] & b[i];
    const h = a[i] & (~b[i] & 255);
    c.push(n);
    d.push(h);
  }

  return [c.join('.'), d.join('.')];
}