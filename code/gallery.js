$(function () {
    $(".column div").click(function (e) {
        if ($(this).hasClass("gallery__item")) {
            $(this).addClass("fullscreen")
                .removeClass("gallery__item")
            $("body").addClass("overflow-hidden")
            $(this).find(".fulltext span.full").hide()
            let maxLen = 400
            let text = $(this).find(".fulltext span").text()
            let textLen = text.length
            let minText = text
            if (textLen > maxLen) {
                minText = text.substr(0, maxLen) + "...";
            }
            let mySpan = document.createElement("span")
            let myA = document.createElement("a")
            mySpan.className = "minText";
            $(this).find(".fulltext").append(mySpan)
            $(this).find(".fulltext").append(myA)
            $("span.minText").text(minText)
            $(this).find(".fulltext a").attr("onclick", "javascript:link();")
                .text("Read more")
        } else if (($(this).hasClass("fullscreen"))) {
            $(this).scrollTop(0)
                .addClass("gallery__item")
                .removeClass("fullscreen")
            $(this).find("a").remove()
            $(this).find("span.minText").remove()
                // .remove(".fulltext span.minText")
            $("body").removeClass("overflow-hidden")

        }
        e.stopImmediatePropagation();
        return false;
    })


    $("#sidebar a").click(function(e){
        let link = $(this).attr("href").substr(1);
        $("#content .gallery__item div.tag").each(function(){
            if (link === "all") $(this).parent().show()
            else if ($(this).html() === link) {
                $(this).parent().show()
            } else $(this).parent().hide()
        })
    })

})


function link(){
    let scroll = $(document).scrollTop()
    $(".fulltext span.full").toggle()
    $(".fulltext span.minText").toggle()
    let text = $(".fulltext a").text()
    text === "Read more" ? text = "Hide" : text = "Read more";
    $(".fulltext a").text(text)
    $(document).scrollTop(scroll)
}

