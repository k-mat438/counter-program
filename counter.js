"use strict";

document.addEventListener('DOMContentLoaded', () => {
  alert("ようこそ！カウンターアプリへ！\n\nこのアプリでは、カウンターを増減させたり、リセットしたりできます。3000万に到達すると、老後の問題が解決するかもしれません。-200万円で破産になります");

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

    if (count > 30 && !flag) {
      flag = true;
      alert("おめでとうございます！🎉\nカウンターが3000に到達しました！");
    }
    if (count < -200) {
      alert("破産しました！-200万円を超えました。");
      count = 0;
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
