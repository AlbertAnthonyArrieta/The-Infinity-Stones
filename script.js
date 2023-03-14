
$(document).ready(function(){ 
    introPage();
});

function homepage() {
    $("#gauntletPage").show();
    $("#tsPage").hide();
    $("#psPage").hide();
    $("#spsPage").hide();
    $("#rsPage").hide();
    $("#ssPage").hide();
    $("#msPage").hide();
    $("#introPage").hide();
}

function introPage() {
    $("#introPage").hide();
    $("#gauntletPage").hide();
    $("#tsPage").hide();
    $("#psPage").hide();
    $("#spsPage").hide();
    $("#rsPage").hide();
    $("#ssPage").hide();
    $("#msPage").hide();
    $("#continue").hide();
    
    $("#introPage").delay( 1000 ).fadeIn("slow");
    $("#continue").delay( 3000 ).fadeIn("slow");
    
}
function timePage() {
    $("#gauntletPage").hide();
    $("#tsPage").show();
}

function powerPage() {
    $("#gauntletPage").hide();
    $("#psPage").show();
}

function spacePage() {
    $("#gauntletPage").hide();
    $("#spsPage").show();
}

function realityPage() {
    $("#gauntletPage").hide();
    $("#rsPage").show();
}

function soulPage() {
    $("#gauntletPage").hide();
    $("#ssPage").show();
}

function mindPage() {
    $("#gauntletPage").hide();
    $("#msPage").show();
}



