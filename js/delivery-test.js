// 右側分頁切換
const buttons = document.querySelectorAll('.allItem_l ul');
const contentDivs = document.querySelectorAll('.allItem_R > div');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        buttons.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.padding = '';
            btn.style.borderRadius = '';
            btn.querySelector('a').style.color = '';
            btn.querySelector('a').style.pointerEvents = '';
        });

        button.style.backgroundColor = '#155569';
        button.style.color = 'white';
        button.style.padding = '5px 10px';
        button.style.borderRadius = '10px';
        button.querySelector('a').style.color = 'white';
        button.querySelector('a').style.pointerEvents = 'none';

        contentDivs.forEach(div => div.style.display = 'none');

        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';

        if (targetId === 'aR-ice') {
            document.querySelector('.nav-mbCollect').style.display = 'flex';
            document.querySelector('.nav-mb-bar').click();
        } else {
            document.querySelector('.nav-mbCollect').style.display = 'none';
        }
    });
});