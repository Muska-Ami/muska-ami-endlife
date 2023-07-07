const xhr = new XMLHttpRequest();

xhr.open("GET", "https://v1.hitokoto.cn/");
xhr.send();
xhr.onreadystatechange = () => {
    if (xhr.status == 200) {
        res = JSON.parse(xhr.response)
        document.querySelectorAll("#hitokoto").forEach((it) => {
            it.innerHTML = `${res.hitokoto} ——${res.from}`
        })
    }
}