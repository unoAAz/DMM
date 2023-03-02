let name;
let username;
let userresult;

username = prompt("お名前を教えて下さい。");//入力ダイアログを表示
if (username==""){
  document.getElementById("name").innerHTML = "名無し"
}

else{
  document.getElementById("name").innerHTML = username;//idがnameのタグに囲まれてる文字列をusernameで上書き
}

let rand = Math.floor( Math.random() * 5);
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;//idがresultのタグに囲まれてる文字列をuserresultで上書き
