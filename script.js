// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 为所有区块添加淡入动画
    const sections = document.querySelectorAll('.about, .contact');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 为联系方式链接添加点击反馈
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // 添加点击动画效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // 动态更新年份
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    if (footer && footer.textContent.includes('2025')) {
        footer.textContent = footer.textContent.replace('2025', currentYear);
    }

    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // 控制台彩蛋
    console.log('%c👋 你好！', 'font-size: 20px; font-weight: bold; color: #667eea;');
    console.log('%c欢迎来到林铮翔的个人主页！', 'font-size: 14px; color: #764ba2;');
});

