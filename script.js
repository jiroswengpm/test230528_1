function splitText() {
  const length = document.getElementById('length').value;
  const text = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');

  if(length > 0) {
    let result = '';
    for(let i = 0; i < text.length; i += parseInt(length)) {
      result += text.substring(i, i + parseInt(length)) + '\n';
    }

    resultDiv.textContent = result;

    // 文章をテキストファイルとして保存
    const blob = new Blob([result], {type: "text/plain;charset=utf-8"});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'splitText.txt';
    link.click();

  } else {
    alert("分割する文字数を正しく入力してください。");
  }
}
