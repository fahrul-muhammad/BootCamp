const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

let total = mtk + bahasaIndonesia + bahasaInggris + ipa;
let rataRata = total / 4; // menghitung rata - rata

//mencari grade
let grade = "";
if (rataRata >= 90) {
  grade += "A";
} else if (rataRata >= 80) {
  grade += "B";
} else if (rataRata >= 70) {
  grade += "C";
} else if (rataRata >= 60) {
  grade += "D";
} else {
  grade += "E";
}

console.log("Rata-Rata = ", rataRata);
console.log("Grade = ", grade);
