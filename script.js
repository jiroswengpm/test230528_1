function splitText() {
  const length = document.getElementById('length').value;
  const lineCount = document.getElementById('lineCount').value;
  const text = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');
  const saveButton = document.getElementById('saveButton');

  if(length > 0) {
    const words = text.split(' ');
    let lineLength = 0;
    let line = '';
    let result = '';

    for(let i = 0; i < words.length; i++) {
      if (lineLength + words[i].length > length) {
        for(let j = 0; j < lineCount; j++) {
          result += '\n';
        }
        lineLength = 0;
        line = '';
      }

      line += ' ' + words[i];
      lineLength += words[i].length + 1;
      result += ' ' + words[i];

      if (i === words.length - 1) {
        for(let j = 0; j < lineCount; j++) {
          result += '\n';
        }
      }
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
