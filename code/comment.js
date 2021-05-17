var nameReply;

$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        let text = $(this).find('textarea').val()
        if (text) {
            let dt = new Date();
            let day = dt.getDate()
            let month = dt.getMonth() + 1
            let date = (day < 10 ? "0" : "") + day + "." + (month < 10 ? "0" : "") + month + "." + dt.getFullYear()
            let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            let comment = $(".comment.personal").clone()
            comment.removeClass("personal")
                .insertAfter(".comments h2")
                .find(" span:first")
                .html(text)
            comment.find("span.time").text(time)
            comment.find("span.date").text(date)
            comment.find("span.reply-link")
                .html("Ответить")
                .removeClass("answer")
                .attr("onclick", "onClick(this);")
            $(this).find('textarea').val("")
            $("<br>").insertAfter(".comments h2")
        }
        return false
    })
})

function like(e){
    $(e).find("span").text(3)
    $(e).css("cursor","default")
    $(e).removeAttr("onclick")
    $("div.dislike").removeAttr("onclick")
    $("div.dislike").css("cursor","default")
}

function dislike(e){
    $(e).find("span").text(5)
    $(e).css("cursor","default")
    $(e).removeAttr("onclick")
    $("div.like").removeAttr("onclick")
    $("div.like").css("cursor","default")
}


function answer() {
    let form = $("form[id='reply']")
    form.action = reply();
    form.trigger('reset');
}

function notHide(){
    $("#notification").hide("200")
}

function reply() {
    let input = $("input[type='text']")

    let comment = ""
    input.each(function () {
        comment = $(this).val();
    })
    if (comment !== "") {
        let div = $("input[type='text']").last().parent().parent()
        div.find("span:first").html("<span class=\"appeal\">" + nameReply + "</span>, " + comment)
        div.find("span.reply-link")
            .text("Ответить")
            .removeClass("answer")
            .attr("onclick", "onClick(this);")
        $("#notification").show("200")
        setTimeout(notHide, 8000)
    }
}

function onClick(e) {
    let comment = $(e).parent().parent()
    nameReply = comment.find("h3").text()
    let numReply = comment.attr("class").replace("comment rep", "");
    let currentComment = comment.nextAll(".comment:first")
    let prevComment = comment
    while (true) {
        if (prevComment.is(":last-child")) {
            currentComment = prevComment
            break;
        } else {
            if (parseInt(prevComment.attr("class").replace("comment rep", "")) > parseInt(currentComment.attr("class").replace("comment rep", ""))) {
                currentComment = prevComment
                break;
            }
            prevComment = currentComment;
            currentComment = currentComment.nextAll(".comment:first")
        }
    }
    let text = "Some comment"
    if (text) {
        let dt = new Date();
        let day = dt.getDate()
        let month = dt.getMonth() + 1
        let date = (day < 10 ? "0" : "") + day + "." + (month < 10 ? "0" : "") + month + "." + dt.getFullYear()
        let time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        let commentPersonal = $(".comment.personal").clone()
        numReply = parseInt(numReply) + 1
        commentPersonal.removeClass("personal")
            .addClass("rep" + numReply)
            .insertAfter(currentComment)
        commentPersonal.find("span.time").text(time)
        commentPersonal.find("span.date").text(date)
        $(this).find('textarea').val("")
        if (numReply > 1) {
            for (let i = 0; i < numReply - 1; i++) {
                $("<div class=\"reply\" style=\"visibility: hidden\">&rdca;</div>").insertAfter(currentComment)
            }
        }
        $("<div class=\"reply\">&rdca;</div>").insertBefore(commentPersonal)
        $("<br>").insertAfter(currentComment)
    }
    e.stopImmediatePropagation();
    return false
}