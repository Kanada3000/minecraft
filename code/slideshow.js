
$(function () {
    $("#content .switch-r").click(function(){
        let first = $(".images :first")
        first.removeClass("active").next().addClass("active");
        $(".images").append(first)
    });

    $("#content .switch-l").click(function(){
        $(".images :first").removeClass("active");
        $(".image").last().addClass("active").prependTo($(".images"));
    });
});