function splitText() {
  const length = document.getElementById('length').value;
  const text = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');
  const saveButton = document.getElementById('saveButton');

  if(length > 0) {
    let sentence = '';
    let result = '';
    let lineLength = 0;
    
    for (let i = 0; i < text.length; i++) {
      sentence += text[i];
      lineLength++;
      
      if ((text[i] === '.' || text[i] === '?' || text[i] === '!') && lineLength <= length) {
        result += sentence + '\n\n';
        sentence = '';
        lineLength = 0;
      } else if (lineLength >= length) {
        let j = sentence.length - 1;
        while (j >= 0 && sentence[j] !== '.' && sentence[j] !== '?' && sentence[j] !== '!') {
          j--;
        }

        if (j < 0) {
          result += sentence + '\n\n';
          sentence = '';
          lineLength = 0;
        } else {
          result += sentence.substring(0, j + 1) + '\n\n';
          sentence = sentence.substring(j + 1);
          lineLength = sentence.length;
        }
      }
    }
    
    result += sentence;

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
