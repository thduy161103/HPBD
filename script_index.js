// filepath: [script_index.js](http://_vscodecontentref_/0)
document.getElementById("submitBtn").addEventListener("click", function () {
  const yes     = document.getElementById("q1yes").checked;
  const toastEl = document.getElementById("notifyToast");
  const msgEl   = document.getElementById("notifyMsg");
  const toast   = new bootstrap.Toast(toastEl, { delay: 2000 });

  if (yes) {
    msgEl.textContent = "Ỏ. Anh yêu Embe nhiều lắm 💖";
    toastEl.classList.replace("bg-danger","bg-success");
    // đánh dấu sẽ play sau khi đi qua hpbd.html
    sessionStorage.setItem("playHappy","true");
    toast.show();
    toastEl.addEventListener("hidden.bs.toast", () => {
      window.location.href = "hpbd.html";
    }, { once: true });
  } else {
    msgEl.textContent = "Thật đau lòng… 😢";
    toastEl.classList.replace("bg-success","bg-danger");
    // không play, chuyển qua extra.html
    toast.show();
    toastEl.addEventListener("hidden.bs.toast", () => {
      window.location.href = "extra.html";
    }, { once: true });
  }
});
