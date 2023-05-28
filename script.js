function splitText() {
  const length = document.getElementById('length').value;
  const text = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');
  const saveButton = document.getElementById('saveButton');

  if(length > 0) {
    let result = '';
    for(let i = 0; i < text.length; i += parseInt(length)) {
      result += text.substring(i, i + parseInt(length)) + '\n';
    }

    resultDiv.textContent = result;

    // 文章をテキストファイルとして保存
    const blob = new Blob([result], {type: "text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    saveButton.style.display = 'block';
    saveButton.onclick = function() {
      const link = document.createElement('a');
      link.href = url;
      link.download = 'splitText.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } else {
    alert("分割する文字数を正しく入力してください。");
  }
}
