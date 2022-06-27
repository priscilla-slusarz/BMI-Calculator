function calculate() {
    var height=(document.getElementById("height").value)/100;
    var weigth=(document.getElementById("weight").value);
    var bmi= weigth  / height **2;
    var text=""
    if (bmi < 18.5) {
        text= "You are thin, look for a doctor and take care of yourself!"
    } else if (bmi < 24.9) {
        text= "You are in good health, keep it up!"
    } else if (bmi < 29.9) {
        text="You are overweight, take care of your diet and exercise!"
    } else if (bmi < 39.9) {
        text="You are obese, see a doctor and change your diet!"
    } else if (bmi > 39.9) {
        text="You are morbidly obese, see a doctor and take better care of your health!"
    }
document.getElementById("text_area").innerText=text
}