
document.getElementById("mona").style.visibility="hidden";
document.getElementById("lbsInput").addEventListener("input", function(){
    let pounds= document.getElementById("lbsInput").value
    
    let Grams=document.getElementById('gramsOutput');
    let Kilograms=document.getElementById('kilogramsOutput');
    let Ounces=document.getElementById('ouncesOutput');

    document.getElementById("mona").style.visibility="visible"
    
Grams.innerHTML = `<div class="container">`+ pounds * 453.592 +`</div>`;
Kilograms.innerHTML = `<div class="container">`+ pounds * 0.453592 +`</div>`;
Ounces.innerHTML = `<div class="container">`+ pounds * 15.9999869488 +`</div>`;

})