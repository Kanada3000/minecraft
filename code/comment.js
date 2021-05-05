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
                .find(" span:not(.datetime)")
                .text(text)
            comment.find("span.time").text(time)
            comment.find("span.date").text(date)
            $(this).find('textarea').val("")
            $("<br>").insertAfter(".comments h2")
        }
        return false
    })
})

