
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("rick").style.display= "none"
    var money= 100;
    document.getElementById("totaal").innerHTML = money
});

function myfunction() {
    document.getElementById("gordijn").style.display = "none"
    document.getElementById("rick").style.display = "block"
}

var money = 100;
var timeleft = 100;

function money_and_time(){
    if (money != 0){
        if (timeleft > 0){
            timeleft -= 100
            document.getElementById("timer").innerHTML = timeleft / 1000;
            myfunction()
        } else {
            timeleft = 0
            document.getElementById("gordijn").style.display = "block"
            document.getElementById("rick").style.display = "none"
            document.getElementById("timer").textContent = "00:00:00";
        }
    };
};

document.getElementById("mybtn").addEventListener("click", function(){
    var spend = 5;
    money -= spend;
    document.getElementById("totaal").innerHTML = money
    timeleft += 5000 
});

setInterval(money_and_time, 100);