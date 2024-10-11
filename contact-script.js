document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // ここで実際にメールを送信する処理を行います。
        // 例: サーバーサイドのAPIを呼び出すなど

        console.log('送信されたデータ:', { name, email, message });

        // 送信成功のメッセージを表示
        alert('メッセージが送信されました。ありがとうございます！');

        // フォームをリセット
        contactForm.reset();
    });
});