var omusic;
$(function(){
    omusic=$("#music")[0];
    $("#mscPlrCtn").hover(function() {
        $("#playCtl,#playBtn").css({"opacity":"1"});
    },function(){
        $("#playCtl,#playBtn").css({"opacity":"0"});
    });
    $("#playBtn").click(function(){
        $("#playBtn").toggleClass("play").toggleClass("pause");
        $("#mscPlr").toggleClass("rotateCD");
        if($("#mscPlr[class*=rotateCD]").length==0){
            $("#mscPlr").addClass("rotateCD");
        }
        if(omusic.paused){
//            $("#playBtn").removeClass("play").addClass("pause");
            $("#mscPlr").addClass("rt").removeClass("stRT");
            omusic.play();
        }
        else{
//            $("#playBtn").removeClass("play").addClass("pause");
            $("#mscPlr").addClass("stRT").removeClass("rt");
            omusic.pause();
        }
    });
    $(omusic).bind("ended",function(){
        $("#playBtn").removeClass().addClass("play");
        $("#mscPlr").removeClass();
    });
});