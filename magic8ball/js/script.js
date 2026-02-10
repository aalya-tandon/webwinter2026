function magic8ball(){
    var fortune = getafortune();
    showfortune(fortune);
}

function getafortune(){
    var fortunes = ["yes", "no", "maybe", "6-7"]
    var random = rando(fortunes.length)
    return fortunes[random];

}

function rando(max){
    //get a number between 0 and max
    var lessthan_number = Math.random() * max
    return Math.floor(lessthan_number)//get rid of the decimals 
}

function showfortune(fortune){
    //alert(fortune);
    document.getElementById("answer").innerHTML = fortune;
}

 




