
$(document).ready(function(){ 
    homepage();
});

function homepage() {
    $("#gauntletPage").show();
    $("#tsPage").hide();
    $("#psPage").hide();
    $("#spsPage").hide();
    $("#rsPage").hide();
    $("#ssPage").hide();
    $("#msPage").hide();
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



