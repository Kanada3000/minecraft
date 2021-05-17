$(function() {

    $('form#register').submit(function (e) {
        e.preventDefault()
        let $data = {};
        $(this).find("input").each(function (){
            $data[this.name] = $(this).val();
        })
        let key_name = $data["email"] + "_name"
        let key_psw = $data["email"] + "_psw"
        localStorage.setItem(key_name, $data["name"])
        localStorage.setItem(key_psw, $data["pswd"])
        window.location.href = "login.html";
    })

    $('form#login').submit(function (e) {
        e.preventDefault()
        let $data = {};
        $(this).find("input").each(function (){
            $data[this.name] = $(this).val();
        })
        if (localStorage.getItem($data["email"]+"_psw") === $data["psw"]){
            window.location.href = "index_reg.html"
        }

    })
})