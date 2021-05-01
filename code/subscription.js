$(function(){
    $(".btn-sub").click(function(){
        $(this).children().toggleClass("unsub")
        $(this).children().text(function(i, text){
            return text === "Отписаться" ? "Подписаться" : "Отписаться";
        })
    })
})