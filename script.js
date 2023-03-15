
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

    //Stones
    $("#TimeStone").hide();
    $("#PowerStone").hide();
    $("#SpaceStone").hide();
    $("#RealityStone").hide();
    $("#SoulStone").hide();
    $("#MindStone").hide();
    
});

function homepage() {
    $("#gauntletPage").fadeIn("slow");
    $("#tsPage").hide();
    $("#psPage").hide();
    $("#spsPage").hide();
    $("#rsPage").hide();
    $("#ssPage").hide();
    $("#msPage").hide();
    $("#introPage").hide();
    $("#snapPage").hide();
    $("#snapbtn").hide();
    $('.gauntlet__glow').css("fill", "#FFD749");
    
    //Stones
    if (tsC == true) {
        $("#TimeStone").show();
    }

    if (psC == true) {
        $("#PowerStone").show();
    }

    if (spsC == true) {
        $("#SpaceStone").show();
    }

    if (rsC == true) {
        $("#RealityStone").show();
    }

    if (ssC == true) {
        $("#SoulStone").show();
    }

    if (msC == true) {
        $("#MindStone").show();
    }

    //Hovers
    $("#tsSlot").hover(function() {
        $("#tsSlot").css("fill", "#FFD749");
    }, function(){
        $("#tsSlot").css("fill", "#DCAC01");
    });

    $("#psSlot").hover(function() {
        $("#psSlot").css("fill", "#FFD749");
    }, function(){
        $("#psSlot").css("fill", "#DCAC01");
    });

    $("#spsSlot").hover(function() {
        $("#spsSlot").css("fill", "#FFD749");
    }, function(){
        $("#spsSlot").css("fill", "#DCAC01");
    });

    $("#rsSlot").hover(function() {
        $("#rsSlot").css("fill", "#FFD749");
    }, function(){
        $("#rsSlot").css("fill", "#DCAC01");
    });

    $("#ssSlot").hover(function() {
        $("#ssSlot").css("fill", "#FFD749");
    }, function(){
        $("#ssSlot").css("fill", "#DCAC01");
    });

    $("#msSlot").hover(function() {
        $("#msSlot").css("fill", "#FFD749");
    }, function(){
        $("#msSlot").css("fill", "#DCAC01");
    });

    //Snap option
    if (tsC == true && psC == true && spsC == true && rsC == true && ssC == true && msC == true) {
        $("#snapbtn").fadeIn(3000);
        $(".gauntlet__glow").css({
            "animation": "colorchange 1s",
            "animation-timing-function": "ease-in-out",
            "animation-iteration-count": "infinite",
            "animation-play-state": "running",
        });
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
    $("#TimeStone").fadeIn();
    $(".gauntlet__glow").css("fill", "#05FF00");
    setTimeout(function() {
        $("#gauntletPage").fadeOut();
        $("#tsPage").fadeIn(1000);
    }, 1000);
    tsC = true;
}

function powerPage() {
    $("#PowerStone").effect("shake");
    $("#PowerStone").fadeIn();
    $(".gauntlet__glow").css("fill", "#BD00FF");
    setTimeout(function() {
        $("#gauntletPage").fadeOut();
        $("#psPage").fadeIn(200);
    }, 300);
    psC = true;
}

function spacePage() {
    $("#SpaceStone").fadeIn();
    $(".gauntlet__glow").css("fill", "#0094FF");
    setTimeout(function() {
    $("#gauntletPage").fadeOut();
    $("#spsPage").fadeIn(1000);
    }, 1000);
    spsC = true;
}

function realityPage() {
    $("#RealityStone").fadeIn();
    $(".gauntlet__glow").css("fill", "#FF0000");
    setTimeout(function() {
    $("#gauntletPage").fadeOut();
    $("#rsPage").fadeIn(1000);
    }, 1000);
    rsC = true;
}

function soulPage() {
    $("#SoulStone").fadeIn();
    $(".gauntlet__glow").css("fill", "#FF9900");
    setTimeout(function() {
    $("#gauntletPage").fadeOut();
    $("#ssPage").fadeIn(1000);
    }, 1000);
    ssC = true;
}

function mindPage() {
    $("#MindStone").fadeIn();
    $(".gauntlet__glow").css("fill", "#FAFF00");
    setTimeout(function() {
    $("#gauntletPage").fadeOut();
    $("#msPage").fadeIn(1000);
    }, 1000);
    msC = true;
}

function snapPage() {
    $("#gauntlet").effect("shake");
    setTimeout(function() {
        $("#gauntletPage").fadeOut();
        $("#snapPage").fadeIn();
    }, 1000);
}
