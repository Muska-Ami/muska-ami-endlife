loading_src = "https://media-fs.huahuo-cn.tk/api/raw/?path=/blog/loading.gif"

dom = document.querySelectorAll("img")

dom.forEach(
    function (item) {
        origin_src = item.src
        item.src = loading_src

        iObj = new Image()
        xhr = new XMLHttpRequest()
        xhr.open("GET", origin_src, true)
        xhr.responseType = "blob"
        xhr.onload = function() {
            if (this.status == 200) {
                item.src = URL.createObjectURL(this.response)
                item.setAttribute('class', "complete", "thumbnails")
            }
        }
        xhr.send()
    }
)