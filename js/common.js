$(function () {
    const nav = document.getElementById('global-nav');
    
    // ヘッダー・フッターを読み込み
    $("#header").load("header.html", function () {
        initHamburgerMenu(); // ヘッダー読み込み後にハンバーガーメニュー初期化
    });
    $("#footer").load("footer.html");

    // スクロール時にふわっと表示
    $(window).on('scroll', function () {
        $('.Works_item').each(function () {
            const $item = $(this);
            if (isInViewport($item) && !$item.hasClass('is-visible')) {
                $item.addClass('is-visible');
            }
        });
    }).trigger('scroll'); // 初回にもチェック

});

// ハンバーガーメニュー初期化
function initHamburgerMenu() {
    $('.hamburger').on('click', function (e) {
        e.stopPropagation();
        const $this = $(this).toggleClass('is-active');
        // テキストの切り替え
        $this.find('.hamburger-label').text($this.hasClass('is-active') ? 'CLOSE' : 'OPEN');

        // ナビゲーションの表示切り替え
        if ($this.hasClass('is-active')) {
            $('.hamburger_modal')
                .css({ display: 'block', right: '-100%' })
                .animate({ right: '0' }, 300);
        } else {
            $('.hamburger_modal')
                .animate({ right: '-100%' }, 300, function () {
                    $(this).css('display', 'none');
                });
        }
    });

    // モーダル外クリックで閉じる
    $(document).on('click', function (e) {
        const $modal = $('.hamburger_modal');
        const $hamburger = $('.hamburger');
        if (
            $modal.is(':visible') &&
            !$modal.is(e.target) &&
            $modal.has(e.target).length === 0 &&
            !$hamburger.is(e.target) &&
            $hamburger.has(e.target).length === 0
        ) {
            $hamburger.removeClass('is-active').find('.hamburger-label').text('OPEN');
            $modal.animate({ right: '-100%' }, 300, function () {
                $(this).css('display', 'none');
            });
        }
    });

    // モーダル内クリックは伝播させない
    $('.hamburger_modal').on('click', function (e) {
        e.stopPropagation();
    });
}

// 要素が画面内にあるか判定
function isInViewport($element) {
    const windowTop = $(window).scrollTop();
    const windowBottom = windowTop + $(window).height();
    const elementTop = $element.offset().top;
    const elementBottom = elementTop + $element.outerHeight();

    return elementBottom > windowTop + ($(window).height() * 0.1) && elementTop < windowBottom;
}



document.addEventListener('DOMContentLoaded', function() {
    // 既存のハンバーガーメニューのコードはそのまま

    // ファーストビューのアニメーション
    const fvSection = document.querySelector('.fv-section');

    if (fvSection) {
        setTimeout(() => {
            fvSection.classList.add('is-animated');
        }, 500); // 0.5秒後にアニメーション開始
    }
});