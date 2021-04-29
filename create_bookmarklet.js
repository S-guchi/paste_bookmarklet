const ss = SpreadsheetApp.openById("ID");
const Sheet1 = ss.getSheetByName('クリップボードコピー');
function bookmarklet() {
  let txt = "";
  let Result = "";
  txt = Sheet1.getRange(2, 1).getValue();
  Result = 'javascript:copyFrom=document.createElement("textarea");copyFrom.textContent="'+ txt.replace(/\r\n/g,"\\n").replace(/\n/g,"\\n") +'";bodyElm=document.getElementsByTagName("body")[0];bodyElm.appendChild(copyFrom);copyFrom.select();retVal=document.execCommand("copy");bodyElm.removeChild(copyFrom);void(0);';
  Sheet1.getRange(4, 1).setValue(Result);
}
