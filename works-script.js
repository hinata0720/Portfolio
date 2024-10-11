document.addEventListener('DOMContentLoaded', function() {
    const worksData = [
        { id: 1, title: "Lyricism", description: "現在進行中の卒業制作プロジェクトです。1980年代から2020年代まででヒットした曲の歌詞のデータを読み取り、その時代の歴史的背景や文化的変遷を読み取るWebページプロジェクトです。 https://hinata0720.github.io/Lyricism/", software: "使用ソフト: Adobe Illustrator, Photoshop, Github, html/css, Javascript, Figma, V0", image: "images/Lyricism.jpg" },
        { id: 2, title: "Gift", description: "「もし自分が大学内で、展覧会を開くなら？」といったテーマでポストカードのデザインをした制作物です。", software: "使用ソフト: Adobe Illustrator", image: "images/DM.jpg" },
        //{ id: 3, title: "CD artworks", description: "、Adobe Illustratorを使って", software: "使用ソフト: Blender, After Effects", image: "images/graffiti.jpg" },
        { id: 4, title: "Illustration", description: "Adobe Illustratorを使って、趣味でもあったグラフィティアートを描いてみました。", software: "使用ソフト: Adobe Illustrator", image: "images/graffiti2.jpg" },
        { id: 5, title: "KAMEHOUSE", description: "デジタルで、ネオンの表現に挑戦した制作物です。", software: "使用ソフト: Adobe Illustrator", image: "images/kamehouse.jpg" },
        { id: 6, title: "刺さる人には刺さる椅子", description: "タイトルが個人的には大好きです。", software: "使用ソフト: Blender", image: "images/3dcgenshu.jpg" },
        { id: 7, title: "小人の部屋", description: "ミニチュア感のある部屋を制作しました。", software: "使用ソフト: Blender", image: "images/blender部屋.jpg" },
        { id: 8, title: "ビリビリ自己紹介", description: "効果音を使用して、かっこよく自己紹介をしました。　https://youtu.be/6U0wImHR6G0?si=ebIrn4c1vFCpEweP", software: "使用ソフト: After Effects", image: "images/biribiri.png" },
        { id: 9, title: "柳川うなぎめしマップ", description: "福岡県の地域創生プロジェクトです。10人のメンバーの内、私はこのサイトの写真撮影とメインビジュアルのイラストとサイトロゴの制作を担当しました。　https://yanagawa-yururitabi.net/unagimeshi/", software: "使用ソフト: Adobe Illustrator, Photoshop, Wordpress", image: "images/gazo2.png" },
    ];

    const worksGrid = document.getElementById('worksGrid');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalSoftware = document.getElementById('modalSoftware');
    const closeBtn = document.getElementsByClassName('close')[0];

    // 作品のサムネイルを動的に生成
    worksData.forEach(work => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        workItem.innerHTML = `<img src="${work.image}" alt="${work.title}" loading="lazy">`;
        workItem.addEventListener('click', () => openModal(work));
        worksGrid.appendChild(workItem);
    });

    // モーダルを開く関数
    function openModal(work) {
        modalImage.src = work.image;
        modalImage.alt = work.title;
        modalTitle.textContent = work.title;
        modalDescription.textContent = work.description;
        modalSoftware.textContent = work.software;
        modal.style.display = 'block';
    }

    // モーダルを閉じる関数
    function closeModal() {
        modal.style.display = 'none';
    }

    // クローズボタンのイベントリスナー
    closeBtn.addEventListener('click', closeModal);

    // モーダル外をクリックしたときに閉じる
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // キーボードでのナビゲーションサポート
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});