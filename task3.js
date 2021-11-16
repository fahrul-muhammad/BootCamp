function segitiga(panjang) {
  // console.log(typeof panjang);
  if (typeof panjang !== "number") {
    return "inputan harus number";
  }

  let hasil = "";
  let tampung = panjang;
  for (let i = 0; i < panjang; i++) {
    for (let j = 1; j <= tampung; j++) {
      hasil += j + " ";
    }
    hasil += "\n";
    tampung--;
  }
  return hasil;
}

console.log(segitiga("5"));
