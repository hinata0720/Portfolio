document.addEventListener('DOMContentLoaded', function() {
    const skillsList = document.getElementById('skillsList');
    const skills = Array.from(skillsList.children);

    // スキルをランダムに並び替える
    for (let i = skills.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [skills[i], skills[j]] = [skills[j], skills[i]];
    }

    // 並び替えたスキルを再度リストに追加
    skillsList.innerHTML = '';
    skills.forEach(skill => skillsList.appendChild(skill));

    // スキルのアニメーション
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.opacity = '0';
            skill.style.transform = 'translateY(20px)';
            skill.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});