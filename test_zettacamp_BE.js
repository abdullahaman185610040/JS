const sentences = [
  'Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.',
  'Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.',
  'Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.',
];

function result(sentences) {
    //membuat variabel maxcount untuk menampung maksimal kalimat
    let maxCount =0;

    //membuat perulangan untuk menghitung setiap kalimat
    for (let i=0; i< sentences.length; i++){

        //membuat variabel untuk memisahkan kalimat  ke kata
        const kata = sentences[i].split(' ');

        // membuat variabel untuk mendapatkan jumlah kata dalam kalimat
        const kataCount= kata.length;

        //membuat kondisi jika kataCount lebih besar dari maxCount saat ini maka perbaharui maxCount
        if (kataCount > maxCount){
            maxCount = kataCount;
        }
    }
    // mengembalikan nilai maxCount
    return maxCount;
}   

console.log(result(sentences));