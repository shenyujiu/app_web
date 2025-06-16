function searchFood() {
    let param = document.getElementById("keyWords").value;
    alert(param);
}

//页面加载：执行初始化
window.onload = function () {
    //页面滚动：执行一下函数
    document.onscroll = function () {
        let s1 = document.documentElement.scrollTop;//pc端
        let s2 = document.body.scrollTop;//移动端
        let scroll = s1 === 0 ? s2 : s1;

        let search = document.getElementById("fixedSearchBox");

        let width = document.documentElement.clientWidth;

        if (0.12 * width <= scroll) {
            search.style.position = "fixed";
            search.style.left = "0";
            search.style.top = "0";
        } else {
            search.style.position = "static";
        }
    }
}

function showFoodType(div) {
    let elements = div.getElementsByTagName("p");//找到该div下的所有p标签
    let p = elements[0];
    alert(p.innerText);
    window.location.href = 'businessList.html';
}