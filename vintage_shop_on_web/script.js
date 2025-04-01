function checkAnswer(answer) {
    const resultDiv = document.getElementById('result');
    if (answer === 'C') { // 正解の場合
        resultDiv.innerText = "正解！次の課題へ進もう！";
        resultDiv.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'question2.html'; // 次の問題に遷移
        }, 2000); // 2秒後に次のページに移行
    } else {
        resultDiv.innerText = "不正解です。もう一度考えてみてください。";
        resultDiv.style.display = 'block';
    }
}
