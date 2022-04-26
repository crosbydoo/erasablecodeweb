const txtElement = ["5200411407 Ristu Aji Wijayanto", "5200411412 Firstyo Mahendra Putra", "5200411428 Argenta Maulana Isnan", "5200411309 Ardian Danang Kurniawan", "5200411285 Ragil Aris Nurmanto"]
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function writing(){
    if (count == txtElement.length){
        count=0;
    }
    currentTxt = txtElement[count];

    words = currentTxt.slice(0,++txtIndex);
    document.querySelector('.effect').textContent = words;

    if (words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }
    setTimeout(writing, 100);
})();