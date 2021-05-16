$(function () {
    $("#addform").on('change', function () {
        let file = $("input[type=file]").get(0).files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function () {
                $("#prev").show().attr("src", reader.result);
            }
            reader.readAsDataURL(file);

        } else $("#prev").hide()
    })

    var ctrlDown = false,
        ctrlKey = 17,
        vKey = 86;

    $(document).keydown(function(e) {
        if (e.keyCode === ctrlKey || e.keyCode === cmdKey) ctrlDown = true;
    }).keyup(function(e) {
        if (e.keyCode === ctrlKey || e.keyCode === cmdKey) ctrlDown = false;
    });

    $("#text").on("keydown", function (e) {
            while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth"))
            + parseFloat($(this).css("borderBottomWidth"))) {
                $(this).height($(this).height() + 1);
            }
    }).on("keydown", function (e) {
        if (ctrlDown && (e.keyCode === vKey))
        while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth"))
        + parseFloat($(this).css("borderBottomWidth"))) {
            $(this).height($(this).height() + 1);
        }
    });
})
