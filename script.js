var Umur = document.getElementById("Umur");
var Tinggi_Badan = document.getElementById("Tinggi Badan");
var Berat_Badan = document.getElementById("Berat Badan");
var LakiLaki = document.getElementById("L");
var Perempuan = document.getElementById("P");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(Umur.value=='' || Tinggi_Badan.value=='' || Berat_Badan.value=='' || (LakiLaki.checked==false && Perempuan.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Mohon isi setiap kolom!`;

  }else{
    Hitung();
  }

}


function Hitung(){
  var p = [Umur.value, Tinggi_Badan.value, Berat_Badan.value];
  if(LakiLaki.checked){
    p.push("Laki-Laki");
  }else if(Perempuan.checked){
    p.push("Perempuan");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var Hasil = '';
  if(bmi<18.5){
    Hasil = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    Hasil = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    Hasil = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    Hasil = 'Obese';
     }else if(35<=bmi){
    history = 'Extremely obese';
     }



resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}





// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
