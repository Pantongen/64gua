function showGua() {
  fetch('/api/gua')
    .then(response => response.json())
    .then(selectedGua => {
      // 更新页面内容
    });
}