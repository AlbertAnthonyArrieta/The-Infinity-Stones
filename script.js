
var tsC = false;
var psC = false;
var spsC = false;
var rsC = false;
var ssC = false;
var msC = false;

$(document).ready(function(){ 
    introPage();
    // $("#gauntletPage").hide();
    // $("#tsPage").hide();
    // $("#psPage").hide();
    // $("#spsPage").hide();
    // $("#rsPage").hide();
    // $("#ssPage").hide();
    // $("#msPage").hide();
    // $("#introPage").hide();
    // $("#snapbtn").hide();
    // snapPage();
    
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
    $("#snapbtn").hide();

    if (tsC == true && psC == true && spsC == true && rsC == true && ssC == true && msC == true) {
        $("#snapbtn").fadeIn(3000);
    }
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
    $("#snapPage").hide();
    $("#continue").hide();
    
    $("#introPage").delay( 1000 ).fadeIn("slow");
    $("#continue").delay( 3000 ).fadeIn("slow");
    
}
function timePage() {
    tsC = true;
    $("#gauntletPage").hide();
    $("#tsPage").show();
}

function powerPage() {
    psC = true;
    $("#gauntletPage").hide();
    $("#psPage").show();
}

function spacePage() {
    spsC = true;
    $("#gauntletPage").hide();
    $("#spsPage").show();
}

function realityPage() {
    rsC = true;
    $("#gauntletPage").hide();
    $("#rsPage").show();
}

function soulPage() {
    ssC = true;
    $("#gauntletPage").hide();
    $("#ssPage").show();
}

function mindPage() {
    msC = true;
    $("#gauntletPage").hide();
    $("#msPage").show();
}

function snapPage() {
    $("#gauntletPage").hide();
    $("#snapPage").show();
}



