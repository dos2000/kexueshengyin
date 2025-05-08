
// 获取元素
const overlay = document.getElementById('overlay');
const popup = document.getElementById('social-popup');
const socialButtons = document.querySelectorAll('.account-button');

// 显示蒙版和弹窗
function showPopup() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// 隐藏蒙版和弹窗
function hidePopup() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
}

// 为社交网站按钮添加点击事件监听器
socialButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // 阻止默认行为
        event.preventDefault(); 
        showPopup();
    });
});

// 为社交账号添加点击事件监听器
const socialAccounts = document.querySelectorAll('.social-account');
socialAccounts.forEach(account => {
    account.addEventListener('click', () => {
        const accountName = account.querySelector('.account-name').textContent;
        // 这里需要根据不同的社交平台替换链接
        let url = '';
        switch(accountName) {
            case '微博':
                url = 'https://weibo.com/your_account';
                break;
            case 'Twitter':
                url = 'https://twitter.com/your_account';
                break;
            // 可以添加更多社交平台
        }
        if (url) {
            window.open(url, '_blank');
        }
        hidePopup();
    });
});

// 点击蒙版隐藏弹窗
overlay.addEventListener('click', hidePopup);