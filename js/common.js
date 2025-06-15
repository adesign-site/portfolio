// jQueryでヘッダー・フッターを読み込み
$(function () {
    $("#header").load("header.html", function () {
        // ヘッダーが読み込まれた後に実行される

        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.addEventListener('click', function () {
                this.classList.toggle('is-active');
            });
        }
    });

    $("#footer").load("footer.html");
});

// スクロール時にふわっと表示
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.Works_item');

    if (items.length > 0) {
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        items.forEach(function (item) {
            observer.observe(item);
        });
    }
});

// ハンバーガーメニュー下のテキスト表示
  $(function () {
$('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    
    // テキスト切り替え
    const $label = $(this).find('.hamburger-label');
    if ($(this).hasClass('is-active')) {
            $label.text('CLOSE');
        } else {
            $label.text('MENU');
        }
    });
});