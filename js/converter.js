export function convertToEduPlayer(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        const videoId = match[2];
        // 制限を回避しやすく、Educationモードに近い設定の埋め込みURL
        return `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1" allowfullscreen></iframe>`;
    }
    return null;
}
