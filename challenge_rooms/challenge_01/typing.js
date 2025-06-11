// 複数の文章を配列で定義
const messages = [
    "こんにちは、世界！",
    "ようこそ、私の世界へ...",
    "あなたは一人ではありません。",
    "何かが近づいてきます...",
    "振り返らないでください。"
];

const typingElement = document.getElementById('typing-content');
let messageIndex = 0; // 現在のメッセージのインデックス
let charIndex = 0;    // 現在の文字のインデックス

function typeText() {
    const currentMessage = messages[messageIndex];
    
    if (charIndex < currentMessage.length) {
        // 1文字ずつ追加
        typingElement.textContent += currentMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 200); // 200ms間隔で1文字ずつ表示
    } else {
        // 現在のメッセージが完了したら次のメッセージへ
        setTimeout(() => {
            typingElement.textContent = ""; // テキストをクリア
            charIndex = 0; // 文字インデックスをリセット
            messageIndex = (messageIndex + 1) % messages.length; // 次のメッセージへ（最後まで行ったら最初に戻る）
            typeText(); // 次のメッセージの表示開始
        }, 3000); // 3秒間表示してから次へ
    }
}

// ページロード時にアニメーション開始
window.addEventListener('load', typeText);