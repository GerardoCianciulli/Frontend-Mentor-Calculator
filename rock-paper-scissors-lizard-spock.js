$(document).ready(function(){
    $("#rules-btn").click(function(){
        $("#rules").removeClass("hide").addClass("show-flex")
    });

    $("#rules .close").click(function(){
        $("#rules").addClass("hide").removeClass("show-flex")
    });
});