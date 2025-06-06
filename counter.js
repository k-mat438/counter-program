"use strict";

document.addEventListener('DOMContentLoaded', () => {
  alert("ようこそ！カウンターアプリへ！\n\nこのアプリでは、カウンターを増減させたり、リセットしたりできます。1000万に到達すると、老後の問題が解決するかもしれません。-200万円で破産になります");

  let count = 0;
  let flag = false;

  const counterDisplay = document.getElementById('counter');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const increment10Btn = document.getElementById('increment10');
  const decrement20Btn = document.getElementById('decrement20');
  const resetBtn = document.getElementById('reset');

  // カウンター表示を更新する関数
  function updateDisplay() {
    counterDisplay.textContent = count;

    if (count > 1000 && !flag) {
      flag = true;
      alert("おめでとうございます！🎉\n1000万円を達成しました！\n億万長者への道が開かれました！");
      window.location.href = 'millionaire.html';
    }
    
    if (count < -200) {
      alert("破産しました！-200万円を超えました。\n残念...");
      window.location.href = 'bankruptcy.html';
    }
  }

  incrementBtn.addEventListener('click', () => {
    count += 1;
    updateDisplay();
  });

  decrementBtn.addEventListener('click', () => {
    count -= 1;
    updateDisplay();
  });

  increment10Btn.addEventListener('click', () => {
    count += 10;
    updateDisplay();
  });

  decrement20Btn.addEventListener('click', () => {
    count -= 20;
    updateDisplay();
  });

  resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
  });

  // 初期表示
  updateDisplay();
});
