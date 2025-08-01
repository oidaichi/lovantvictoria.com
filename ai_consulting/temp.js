        // 繝上Φ繝舌・繧ｬ繝ｼ繝｡繝九Η繝ｼ縺ｮ繝医げ繝ｫ讖溯・
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const navMenu = document.getElementById('nav-menu');

            if (mobileMenu && navMenu) {
                mobileMenu.addEventListener('click', function() {
                    navMenu.classList.toggle('active');
                });
            }

            // 繧ｹ繝繝ｼ繧ｺ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });

                    // モバイルメニューが開いている場合は閉じる
                        navMenu.classList.remove('active');
                    }
                });
            });

            // 繧｢繧ｳ繝ｼ繝・ぅ繧ｪ繝ｳ讖溯・
            const accordionItems = document.querySelectorAll('.accordion-item');

            accordionItems.forEach(item => {
                const title = item.querySelector('.accordion-title');
                const content = item.querySelector('.accordion-content');
                const icon = item.querySelector('.accordion-icon i');

                title.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    const isExpanded = title.getAttribute('aria-expanded') === 'true';

                    // 莉悶・繧｢繧ｳ繝ｼ繝・ぅ繧ｪ繝ｳ繧帝哩縺倥ｋ
                    accordionItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                             otherItem.querySelector('.accordion-title').setAttribute('aria-expanded', 'false');
                            otherItem.querySelector('.accordion-content').style.maxHeight = null;
                            const otherIcon = otherItem.querySelector('.accordion-icon i');
                            otherIcon.classList.remove('fa-minus');
                            otherIcon.classList.add('fa-plus');
                        }
                    });

                    // 繧ｯ繝ｪ繝・け縺輔ｌ縺溘い繧ｳ繝ｼ繝・ぅ繧ｪ繝ｳ縺ｮ髢矩哩
                    if (isActive) {
                        item.classList.remove('active');
                        title.setAttribute('aria-expanded', 'false');
                        content.style.maxHeight = null;
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    } else {
                        item.classList.add('active');
                        title.setAttribute('aria-expanded', 'true');
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    }
                });
            });
        });
