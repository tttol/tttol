// window.addEventListener('scroll', function() {
//     const aboutMeElement = document.getElementById('aboutMe');
//     const scrollPosition = window.scrollY;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     // スクロール位置に応じて色を変更
//     const topColor = scrollPosition / height > 0.5 ? '#ffffff' : '#0000ff';
//     const bottomColor = scrollPosition / height > 0.5 ? '#0000ff' : '#ffffff';

//     aboutMeElement.style.background = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;
// });
window.addEventListener('scroll', function() {
    const aboutMeElement = document.getElementById('aboutMe');
    const scrollPosition = window.scrollY;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(`scrollPosition: ${scrollPosition}`);
    console.log(`height: ${height}`);

    // スクロール位置に応じてクラスを切り替え
    if (scrollPosition / height > 0.5) {
        aboutMeElement.classList.remove('from-[#ffffff]', 'to-[#0000ff]');
        aboutMeElement.classList.add('from-[#0000ff]', 'to-[#ffffff]');
    } else {
        aboutMeElement.classList.remove('from-[#0000ff]', 'to-[#ffffff]');
        aboutMeElement.classList.add('from-[#ffffff]', 'to-[#0000ff]');
    }
});