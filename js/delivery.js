// 選擇按鈕和內容區域
const buttons = document.querySelectorAll('.allItem_l ul'); // .allItem_l 下的 div 被視為按鈕
const contentDivs = document.querySelectorAll('#aR > div'); // #aR 下的所有 div 為內容區域

// 為每個按鈕添加點擊事件
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        // 重置所有按鈕樣式
        buttons.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.querySelector('a').style.color = '';
        });

        // 設置當前按鈕的樣式
        button.style.backgroundColor = '#155569';
        button.querySelector('a').style.color = 'white';

        // 隱藏所有內容區域
        contentDivs.forEach(div => {
            div.style.display = 'none';
        });

        // 根據按鈕的 data-target 顯示對應的內容區域
        const targetId = button.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);

        if (targetDiv) {
            targetDiv.style.display = 'block'; // 顯示對應內容區域
        }
    });
});