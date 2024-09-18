const iceSearchBtn = document.getElementById('iceSearchBtn');
const noIceSearchBtn = document.getElementById('noIceSearchBtn');
const iceDisplay = document.getElementById('iceDisplay');
const noIceDisplay = document.getElementById('noIceDisplay');

// 檢查按鈕是否存在
if (iceSearchBtn && noIceSearchBtn) {
    function setActiveButton(activeButton, inactiveButton) {
        activeButton.classList.add('active');
        inactiveButton.classList.remove('active');
    }

    function displaySearch(active, inactive) {
        active.classList.add('active');
        inactive.classList.remove('active');
    }


  // 點選事件- 冷藏
    function showIce() {
        displaySearch(noIceDisplay, iceDisplay);
        setActiveButton(iceSearchBtn, noIceSearchBtn);}


    // 點選事件- 常溫
    function shownoIce() {
        displaySearch(iceDisplay, noIceDisplay);
        setActiveButton(noIceSearchBtn, iceSearchBtn);
    }

    // 進入常溫時先開啟冷藏
    showIce();

    // 點選事件-冷藏
    iceSearchBtn.addEventListener('click', showIce);

    // 點選事件-常溫
    noIceSearchBtn.addEventListener('click', shownoIce);
}