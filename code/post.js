$(function () {
    let searchParams = new URLSearchParams(window.location.search)
    let post = $("div.post.local")
    if(searchParams.has('title')){
        let title = searchParams.get('title')
        let text = searchParams.get('text')
        let tag = searchParams.get('tags')
        let src = "gallery_img/" + searchParams.get('img')
        post.find("img[alt='img-post'").attr("src",src)
        post.find("h2").text(title)
        post.find("span.post-text").text(text)
        post.find("div.hashtag a").text(tag)
        post.show()
    }
})







