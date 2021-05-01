$(function(){
    $("#register").validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            name:{
                required: true,
                minlength: 4,
                maxlength: 20
            },
            pswd:{
                required: true,
                minlength: 6,
                maxlength: 20
            },
            pswd2:{
                equalTo:"#psw"
            }
        },
        messages:{
            email:{
                required: "Это поле обязательно для заполнения!",
                email: "Укажите корректный email-адрес"
            },
            name:{
                required: "Это поле обязательно для заполнения!",
                minlength: "минимальное кол-во символов - 4",
                maxlength: "максимальное кол-во символов - 20"
            },
            pswd:{
                required: "Это поле обязательно для заполнения!",
                minlength: "минимальное кол-во символов - 6",
                maxlength: "максимальное кол-во символов - 20"
            },
            pswd2:{
                equalTo: "Пароли не совпадают"
            }
        }
    })

})