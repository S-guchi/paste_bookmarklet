  s = window.getSelection().getRangeAt(0).commonAncestorContainer.innerHTML;
  // テキストエリアを用意する
  copyFrom = document.createElement("textarea");
  // テキストエリアへ値をセット
  copyFrom.textContent = s.replace(/\<span.*?<\/span>/g,"\r\n\r\n").replace(/<br>/g,"\r\n");
  // bodyタグの要素を取得
  bodyElm = document.getElementsByTagName("body")[0];
  // 子要素にテキストエリアを配置
  bodyElm.appendChild(copyFrom);
  // テキストエリアの値を選択
  copyFrom.select();
  // コピーコマンド発行
  retVal = document.execCommand('copy');
  // 追加テキストエリアを削除
  bodyElm.removeChild(copyFrom);
