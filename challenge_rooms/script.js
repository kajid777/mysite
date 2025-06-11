const text = "えふぁふぇわふぇわわふぁうぇふぁｆｗ";
const typingElement = document.getElementById('typing-content');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200); // 200ms間隔で1文字ずつ表示
    } else {
        // テキストが完了したら少し待ってからリセット
        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            typeText();
        }, 2000);
    }
}

// ページロード時にアニメーション開始
window.addEventListener('load', typeText);