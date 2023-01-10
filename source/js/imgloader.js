loading_src = "https://media-fs.huahuo-cn.tk/api/raw/?path=/blog/loading.gif"

dom = document.querySelectorAll("img")

dom.forEach(
    function (item) {
        origin_src = item.src
        if (origin_src.search("huahuo-cn.tk") != -1) {
            item.src = loading_src

            xhr0 = new XMLHttpRequest()
            xhr0.open("GET", origin_src, true)
            xhr0.onload = function() {
                console.log(this.response)
                xhr = new XMLHttpRequest()
                xhr.open("GET", this.response.URL, true)
                xhr.responseType = "blob"
                xhr.onload = function() {
                    item.src = URL.createObjectURL(this.response)
                    item.setAttribute('class', "complete", "thumbnails")
                }
                xhr.send()
            }
            xhr0.send()
        }
    }
)