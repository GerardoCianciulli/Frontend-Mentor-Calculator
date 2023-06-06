const RULES = {
    rock: ["lizard", "scissors"],
    paper: ["rock", "spock"],
    scissors: ["lizard", "paper"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"]
}

$(document).ready(function(){
    var score = 0;

    $("#rules-btn").click(function(){
        $("#rules").removeClass("hide").addClass("show-flex")
    });

    $("#rules .close").click(function(){
        $("#rules").addClass("hide").removeClass("show-flex")
    });

    $("#gestures button").click(function(e){
        console.log(e.currentTarget.id);
        //show user selection
        //add a delay
        //show computer's selection 
        var computerSelection = Math.round(Math.random() * Date.now() % 5)
        console.log(Object.keys(RULES)[computerSelection])
        if (RULES[e.currentTarget.id].includes(Object.keys(RULES)[computerSelection])) {
            console.log("you win")
            score ++;
            $("#score span").text(score);
        }
    })
});