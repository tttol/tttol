// JavaScript
window.addEventListener('scroll', function() {
    const aboutMeElement = document.getElementById('aboutMe'); // "About TOL"の要素のIDを指定
    const scrollPosition = window.scrollY;

    console.log(`scrollPosition: ${scrollPosition}`);

    if (scrollPosition > 200) { // 100pxスクロールしたら色を変更
        aboutMeElement.classList.add('color-change');
    } else {
        aboutMeElement.classList.remove('color-change');
    }
});

// window.addEventListener("scroll", () => {
//     console.log(document.querySelector("#aboutMe").scrollTop);
//     console.log(document.documentElement.scrollTop);
//     // console.log(document.querySelector("#aboutMe"));
    // console.log(document.getElementById("aboutMe"));
// });