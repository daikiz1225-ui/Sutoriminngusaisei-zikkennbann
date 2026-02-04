import { convertToEduPlayer } from './converter.js';

const searchBtn = document.getElementById('searchBtn');
const urlInput = document.getElementById('urlInput');
const displayArea = document.getElementById('displayArea');
const reloadBtn = document.getElementById('reloadBtn');

function loadVideo() {
    const url = urlInput.value;
    const playerHtml = convertToEduPlayer(url);
    
    if (playerHtml) {
        displayArea.innerHTML = playerHtml;
    } else {
        alert("有効なYouTubeのURLを入力してください");
    }
}

searchBtn.addEventListener('click', loadVideo);

// 再読み込みボタンの動作
reloadBtn.addEventListener('click', () => {
    const iframe = displayArea.querySelector('iframe');
    if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = ''; // 一旦空にする
        iframe.src = currentSrc; // 再代入してリロード
    }
});
