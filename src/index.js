module.exports = function reverse (n) {
  let str = String(Math.abs(n));
  let out_str ='';
  for (let i=0; i<str.length; i++) out_str += str[str.length-1-i];
  return (Number(out_str));

}
