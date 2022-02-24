function rot13(str) {
  var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  while (str.length > 0) {
    for (let i = 0; i <= 27; i++) {
      if (alph[i] === str[0] && i >= 13) {
        result = result + alph[i - 13];
      }
      if (alph[i] === str[0] && i < 13) {
        result = result + alph[i + 13];
      }
    }
    if (!/^[A-Z]*$/.test(str[0])) {
      result = result + str[0];
    }
    str = str.substring(1);
  }
  return result;
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("A"));
