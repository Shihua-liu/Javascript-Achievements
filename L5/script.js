
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("rick").style.display= "none"
    var money= 100;
    document.getElementById("totaal").innerHTML = money
});

function myfunction() {
    document.getElementById("gordijn").style.display = "none"
    document.getElementById("rick").style.display = "block"
    money_and_time();
}

var money = 100;

function money_and_time(){
    if (document.getElementById("mybtn").onclick && money != 0){
        var spend = 5;
        money -= spend;
        document.getElementById("totaal").innerHTML = money
        breakEnd = new Date();
        breakEnd.setSeconds(breakEnd.getSeconds() + 5);
        setInterval(() => {
            var timer = new Date();
            var dadate = breakEnd - timer;
            var time = new Date(dadate).toISOString().substr(11, 8);
            document.getElementById("timer").innerHTML = time;
            if (dadate <= 0){
                document.getElementById("gordijn").style.display = "block"
                document.getElementById("rick").style.display = "none"
                document.getElementById("timer").textContent = "00:00:00";
            } 
        }, 100);
        
    };
};