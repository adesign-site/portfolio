$(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    // ハンバーガーメニュー
    $(".openbtn").click(function () {
        console.log('aaa');
    $(this).toggleClass('active');
    });
});


// スクロール時にふわっと表示
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.Works_item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 一度だけ表示させる場合
            }
        });
    }, {
        threshold: 0.1 // 少しでも見えたら表示
    });

    items.forEach(item => {
        observer.observe(item);
    });
});