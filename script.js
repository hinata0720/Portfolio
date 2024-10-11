document.addEventListener('DOMContentLoaded', function() {
    // 画像のロード完了後にフェードインアニメーションを適用
    const mainImage = document.querySelector('.main-image');
    mainImage.style.opacity = '0';
    mainImage.style.transition = 'opacity 1s ease-in-out';

    mainImage.onload = function() {
        mainImage.style.opacity = '1';
    };

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ボタンホバーエフェクト
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});