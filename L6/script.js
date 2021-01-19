var array = []

function rollingForStats(){
    var nummer = Math.floor((Math.random() * 6) + 1);
    array.push(nummer);
    document.getElementById("demo").textContent = array;
    document.getElementById("totaal").textContent = "nog niet genoeg cijfers";
    if (array.length == 4){
        array.sort();
        array.shift();
        var som = 0
        for (var i = 0; i < 3; i++){
            som = som + array[i]
        }
        array = []
        document.getElementById("totaal").textContent = som;
    }
    console.log(som)
    console.log(array)
}