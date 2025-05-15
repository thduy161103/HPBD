// filepath: [script_index.js](http://_vscodecontentref_/0)
document.getElementById("submitBtn").addEventListener("click", function (e) {
  const yes = document.getElementById("q1yes");
  if (yes && yes.checked) {
    alert("Ỏ. Anh yêu embe nhiều lắm");
    window.location.href = "home.html";
  } else {
    alert("Thật dối lòng!!!");
    window.location.href = "extra.html";
  }
});
