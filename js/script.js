console.log('--- JS ФАЙЛ УСПЕШНО ПОДКЛЮЧЕН И РАБОТАЕТ! ---');

document.addEventListener('DOMContentLoaded', () => {
    
// ==========================================
// СКРЫТИЕ ШАПКИ
// ==========================================
let scrollTimeout;
const header = document.querySelector('.main-header');

let isHeaderHovered = false;

if (header) {
    // Не даем шапке прятаться, если курсор находится на ней
    header.addEventListener('mouseenter', () => {
        isHeaderHovered = true;
        header.classList.remove('header-hidden');
    });
    header.addEventListener('mouseleave', () => {
        isHeaderHovered = false;
    });
}

// Дополнительно: если курсор подошел в самый верх экрана (в зону первых 60px), превентивно показываем шапку
window.addEventListener('mousemove', (e) => {
    const isTabletOrDesktop = window.matchMedia('(min-width: 600px)').matches;
    if (isTabletOrDesktop && e.clientY < 60) {
        if (header) {
            header.classList.remove('header-hidden');
        }
    }
});

window.addEventListener('scroll', () => {
    const isTabletOrDesktop = window.matchMedia('(min-width: 600px)').matches;

    if (isTabletOrDesktop) {
        // При скролле сразу возвращаем шапку
        if (header) header.classList.remove('header-hidden');

        // Сбрасываем старый таймер
        clearTimeout(scrollTimeout);

        // Проверяем: печатает ли пользователь в поиске
        const activeElement = document.activeElement;
        const isUserTypingInSearch = activeElement && activeElement.closest('.search-box');

        // Проверяем: открыто ли какое-нибудь выпадающее меню в шапке
        const isAnyDropdownOpen = document.querySelectorAll('.dropdown-wrapper.open, .dropdown-wrapper.active').length > 0;

        // Если пользователь НЕ печатает, меню закрыто и мышка не на шапке — запускаем таймер скрытия
        if (!isUserTypingInSearch && !isAnyDropdownOpen && !isHeaderHovered) {
            scrollTimeout = setTimeout(() => {
                const currentActive = document.activeElement;
                const stillNotTyping = !currentActive || !currentActive.closest('.search-box');
                const stillNoDropdown = document.querySelectorAll('.dropdown-wrapper.open, .dropdown-wrapper.active').length === 0;

                if (window.scrollY > 100 && stillNotTyping && stillNoDropdown && !isHeaderHovered) {
                    if (header) header.classList.add('header-hidden');
                }
            }, 2500);
        }
    } else {
        if (header) header.classList.remove('header-hidden');
    }
});

// ==========================================
// ЛОГИКА ПОИСКА В ШАПКЕ (ГЛОБАЛЬНЫЙ ПОИСК)
// ==========================================
const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector('.search-btn');
const headerSearchInput = document.querySelector('.search-input');

if (searchBox && searchBtn && headerSearchInput) {
    // Клик по лупе (десктоп)
    searchBtn.addEventListener('click', (e) => {
        if (!searchBox.classList.contains('active')) {
            e.preventDefault();
            e.stopPropagation();
            searchBox.classList.add('active');
            setTimeout(() => headerSearchInput.focus({ preventScroll: true }), 100);
        } 
        else if (headerSearchInput.value.trim() === '') {
            e.preventDefault();
            searchBox.classList.remove('active');
            headerSearchInput.blur();
        }
    });

    // Фиксация скролла при вводе текста в поиск на десктопе
if (headerSearchInput) {
    headerSearchInput.addEventListener('input', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        // Мгновенно возвращаем скролл на место, если браузер попытался его сместить
        window.requestAnimationFrame(() => {
            window.scrollTo({
                top: currentScroll,
                behavior: 'auto'
            });
        });
    });
}

    // Не отправляем пустую форму по Enter (десктоп)
    headerSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && headerSearchInput.value.trim() === '') {
            e.preventDefault();
        }
    });

    headerSearchInput.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('click', (e) => {
        if (searchBox.classList.contains('active') && !searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
            headerSearchInput.blur();
            headerSearchInput.value = ''
        }
    });
}

// ==========================================
// 1.1. ВАЛИДАЦИЯ МОБИЛЬНОГО ПОИСКА
// ==========================================
const mobileSearchForm = document.getElementById('mobileSearchForm');
const mobileSearchInput = document.getElementById('mobileSearchInput');

if (mobileSearchForm && mobileSearchInput) {
    mobileSearchForm.addEventListener('submit', (e) => {
        if (mobileSearchInput.value.trim() === '') {
            e.preventDefault(); // Запрещаем отправку пустой формы
        }
    });
}



    // ==========================================

    // 2. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ (ДЕСКТОП И МОБИЛЬНЫЕ)

    // ==========================================

    const themeBtns = document.querySelectorAll('.theme-btn');

   

    themeBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            document.body.classList.toggle('dark-theme');

        });

    });

    // ==========================================
    // 3. БАННЕР-КАРУСЕЛЬ (HERO CAROUSEL)
    // ==========================================
    const carousel = document.querySelector('.hero-carousel');

    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');

        let currentSlide = 0;
        let autoSlideTimer = null;

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        // ВОЗВРАЩЕНО НА МЕСТО: Функция остановки автопрокрутки
        function stopAutoSlide() {
            if (autoSlideTimer) {
                clearInterval(autoSlideTimer);
                autoSlideTimer = null;
            }
        }

        // ВОЗВРАЩЕНО НА МЕСТО: Функция запуска автопрокрутки
        function startAutoSlide() {
            stopAutoSlide();
            autoSlideTimer = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 6000);
        }

        function resetAutoSlide() {
            startAutoSlide();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(currentSlide + 1);
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentSlide - 1);
                resetAutoSlide();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
        });

        // Управление автопрокруткой при наведении мыши
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);

        // Запуск автопрокрутки при загрузке страницы
        startAutoSlide();

        // ==========================================================================
        // УНИВЕРСАЛЬНЫЙ СВАЙП (Для мобильных тачей и для тестов мышкой в браузере)
        // ==========================================================================
        let touchStartX = 0;
        let touchEndX = 0;
        let isDragging = false;

        // 1. НАЧАЛО КАСАНИЯ / КЛИКА МЫШКОЙ
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
        }, { passive: true });

        carousel.addEventListener('mousedown', (e) => {
            touchStartX = e.clientX;
            isDragging = true;
        }, { passive: true });

        // 2. КОНЕЦ КАСАНИЯ / ОТПУСКАНИЕ МЫШКИ
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleCarouselSwipe();
        }, { passive: true });

        carousel.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            touchEndX = e.clientX;
            isDragging = false;
            handleCarouselSwipe();
        }, { passive: true });

        // Защита, если мышка улетела за пределы баннера во время перетаскивания
        carousel.addEventListener('mouseleave', () => {
            isDragging = false;
        }, { passive: true });

        // 3. ВЫЧИСЛЕНИЕ ЖЕСТА
        function handleCarouselSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            
            // Если сдвинули больше чем на 50 пикселей
            if (Math.abs(swipeDistance) > 50) {
                if (swipeDistance < 0) {
                    goToSlide(currentSlide + 1); 
                } else {
                    goToSlide(currentSlide - 1); 
                }
                resetAutoSlide(); 
            }
        }
    } 


// ==========================================
    // 4. БЕСКОНЕЧНАЯ ЛЕНТА "КУХНИ МИРА" (С ДРАГОМ И СВАЙПАМИ)
    // ==========================================
    const marqueeContainer = document.querySelector('.marquee-container');

    if (marqueeContainer) {
        const track = marqueeContainer.querySelector('.cuisines-cards-grid');

        if (track) {
            track.style.animation = 'none';

            let baseDirection = -1;
            let normalSpeed = 0.6;
            let fastSpeed = 7.0;  
            
            let isAccelerated = false;
            let isHovered = false;
            let currentX = 0;
            
            // Переменные для тач-свайпов и мышиного драга
            let startX = 0;
            let isDragging = false;

            function animate() {
                if (!isHovered || isAccelerated || isDragging) {
                    const currentSpeed = isAccelerated ? fastSpeed : normalSpeed;
                    const step = baseDirection * currentSpeed;
                    currentX += step;

                    const firstCard = track.querySelector('.cuisine-card');
                    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 270;
                    const computedGap = parseFloat(window.getComputedStyle(track).gap) || 24;
                    const cardShift = cardWidth + computedGap;

                    if (Math.abs(currentX) >= cardShift && step < 0) {
                        currentX += cardShift;
                        if (track.firstElementChild) {
                            track.appendChild(track.firstElementChild);
                        }
                    } else if (currentX > 0 && step > 0) {
                        currentX -= cardShift;
                        if (track.lastElementChild) {
                            track.insertBefore(track.lastElementChild, track.firstElementChild);
                        }
                    }

                    track.style.transform = `translate3d(${Math.floor(currentX)}px, 0, 0)`;
                }

                requestAnimationFrame(animate);
            }

            // --- ОБЫЧНЫЙ НАВЕДЕНИЕ (ПАУЗА) ---
            track.addEventListener('mouseenter', () => { 
                if (!isDragging) isHovered = true; 
            });
            track.addEventListener('mouseleave', () => { 
                if (!isDragging) isHovered = false; 
            });

            // --- МЫШИЙ ДРАГ (ПЕРЕТЯГИВАНИЕ МЫШКОЙ) ---
            track.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX;
                isHovered = true; // останавливаем автобег на время драга
                track.style.cursor = 'grabbing';
                e.preventDefault(); // чтобы текст/картинки не выделялись при перетаскивании
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const diffX = startX - e.clientX;
                
                if (Math.abs(diffX) > 2) {
                    baseDirection = diffX > 0 ? -1 : 1;
                    currentX -= diffX * 0.8; // коэффициент для плавности следования за мышей
                    startX = e.clientX; // сбрасываем стартовую точку для непрерывного движения
                }
            });

            const stopDragging = () => {
                if (isDragging) {
                    isDragging = false;
                    isHovered = false; // возвращаем автопрокрутку после отпускания
                    track.style.cursor = 'grab';
                }
            };

            window.addEventListener('mouseup', stopDragging);

            // --- МОБИЛЬНЫЕ СВАЙПЫ (Touch) ---
            track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isHovered = true;
            }, { passive: true });

            track.addEventListener('touchmove', (e) => {
                if (!startX) return;
                const touchCurrentX = e.touches[0].clientX;
                const diffX = startX - touchCurrentX;

                if (Math.abs(diffX) > 5) {
                    baseDirection = diffX > 0 ? -1 : 1;
                    isAccelerated = true;
                }
            }, { passive: true });

            const stopTouch = () => {
                isAccelerated = false;
                isHovered = false;
                startX = 0;
            };

            track.addEventListener('touchend', stopTouch);
            track.addEventListener('touchcancel', stopTouch);

            // Меняем курсор при наведении на руку ( grab )
            track.style.cursor = 'grab';

            animate();
        }
    }



// ==========================================
    // 5. МОБИЛЬНОЕ МЕНЮ И ЗАКРЫТИЕ ПРИ КЛИКЕ
    // ==========================================

    const burgerBtn = document.getElementById('burgerBtn');
    const navGroup = document.querySelector('.nav-group');
    const allDropdowns = document.querySelectorAll('.dropdown-wrapper');

    function closeMobileMenu() {
        if (burgerBtn && navGroup) {
            burgerBtn.classList.remove('active');
            navGroup.classList.remove('active');
        }
        allDropdowns.forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.classList.remove('active'); 
        });
    }

    if (burgerBtn && navGroup) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerBtn.classList.toggle('active');
            navGroup.classList.toggle('active');

            if (!navGroup.classList.contains('active')) {
                allDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('open');
                    dropdown.classList.remove('active');
                });
            }
        });
    }

    const mobileCloseLinks = document.querySelectorAll('.mobile-close-link, .dropdown-item:not(.dropdown-toggle)');
    mobileCloseLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

// Глобальное закрытие дропдаунов при клике в пустоту
    document.addEventListener('click', (event) => {
        allDropdowns.forEach(dropdown => {
            // Если клик был снаружи конкретного выпадающего списка
            if (!dropdown.contains(event.target)) {
                
                // Для десктопов и планшетов (>= 768px) закрываем сразу везде
                if (window.matchMedia('(min-width: 600px)').matches) {
                    dropdown.classList.remove('open', 'active');
                } 
                // Для мобильной версии // 
                else {
                    const navGroup = document.querySelector('.nav-group');
                    if (navGroup && navGroup.contains(event.target)) {
                        dropdown.classList.remove('open', 'active');
                    }
                }
            }
        });
    });

// ==========================================
// ОТКРЫТИЕ МЕНЮ РЕЦЕПТОВ ИЗ ХЛЕБНЫХ КРОШЕК
// ==========================================
const openRecipesMenuBtn = document.getElementById('openRecipesMenu');

if (openRecipesMenuBtn && burgerBtn && navGroup) {
    openRecipesMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        // 1. Открываем мобильное меню
        burgerBtn.classList.add('active');
        navGroup.classList.add('active');

        // 2. Закрываем все открытые аккордеоны (например, Контакты)
        allDropdowns.forEach(dropdown => dropdown.classList.remove('open'));

        // 3. Находим именно аккордеон с Рецептами и открываем только его
        allDropdowns.forEach(dropdown => {
            const toggleBtn = dropdown.querySelector('.dropdown-toggle');
            if (toggleBtn && toggleBtn.textContent.includes('Рецепты')) {
                dropdown.classList.add('open');
            }
        });
    });
}


    // ==========================================

    // 6. УНИВЕРСАЛЬНЫЙ АККОРДЕОН (РЕЦЕПТЫ И КОНТАКТЫ)

    // ==========================================

    allDropdowns.forEach(dropdown => {

        const toggleBtn = dropdown.querySelector('.dropdown-toggle');



        if (toggleBtn) {

            toggleBtn.addEventListener('click', function(e) {

                e.preventDefault();

                e.stopPropagation();



                allDropdowns.forEach(other => {

                    if (other !== dropdown) {

                        other.classList.remove('open');

                    }

                });



                dropdown.classList.toggle('open');

            });

        }

    });



// ==========================================
// 7. ВЫБОР ЯЗЫКА (МОБИЛЬНЫЕ, ПЛАНШЕТЫ И ДЕСКТОП)
// ==========================================
const langWrappers = document.querySelectorAll('.lang-select-wrapper');

langWrappers.forEach(wrapper => {
    const btn = wrapper.querySelector('button');
    const dropdown = wrapper.querySelector('.lang-dropdown');
    if (!btn || !dropdown) return;

    let lastToggleTime = 0;

    function toggleLangDropdown(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const now = Date.now();
        if (now - lastToggleTime < 250) return;
        lastToggleTime = now;

        const isOpen = dropdown.classList.contains('active');

        document.querySelectorAll('.lang-dropdown.active').forEach(d => {
            d.classList.remove('active');
        });

        if (!isOpen) {
            dropdown.classList.add('active');
        }
    }

    btn.addEventListener('pointerup', toggleLangDropdown);
    btn.addEventListener('click', toggleLangDropdown);

    const langOptions = dropdown.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            dropdown.classList.remove('active');

            const selectedLang = (option.dataset.lang || option.textContent).trim().toLowerCase();
            const currentPath = window.location.pathname;
            const basePath = '/gastronomy-studio';

            let relativePath = currentPath.startsWith(basePath)
                ? currentPath.slice(basePath.length)
                : currentPath;

            if (!relativePath.startsWith('/')) {
                relativePath = '/' + relativePath;
            }

            const isCurrentlyEn = relativePath === '/en' || relativePath.startsWith('/en/');
            let nextPath = relativePath;

            if (selectedLang === 'en' && !isCurrentlyEn) {
                nextPath = relativePath === '/' ? '/en/index.html' : `/en${relativePath}`;
            } else if (selectedLang === 'ru' && isCurrentlyEn) {
                nextPath = relativePath.replace(/^\/en(\/|$)/, '/') || '/index.html';
                if (nextPath === '/') nextPath = '/index.html';
            }

            const targetUrl = `${basePath}${nextPath}${window.location.search}`;
            if (currentPath !== `${basePath}${nextPath}`) {
                window.location.href = targetUrl;
            }
        });
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-select-wrapper')) {
        document.querySelectorAll('.lang-dropdown.active').forEach(d => {
            d.classList.remove('active');
        });
    }
});


// ==========================================
// 8.1. ФИЛЬТРАЦИЯ И ПОИСК В СТАТЬЯХ (ТОЛЬКО ЛОКАЛЬНЫЙ)
// ==========================================
const articlesSection = document.querySelector('.content-section');

if (articlesSection && articlesSection.querySelector('.articles-grid')) {
    const grid = articlesSection.querySelector('.articles-grid');
    const cards = Array.from(grid.querySelectorAll('.article-card'));
    const heroCard = articlesSection.querySelector('.story-hero-card');
    const loadMoreBtn = articlesSection.querySelector('.load-more-btn');
    
    // Берем ТОЛЬКО локальный инпут на самой странице статей
    const searchInput = document.getElementById('sectionSearch');
    const visibleCountEl = articlesSection.querySelector('.articles-counter strong, #visibleCount');
    const tagBtns = Array.from(articlesSection.querySelectorAll('.tag-btn'));

    const INITIAL_COUNT = 11;

    function updateArticlesGrid() {
        const isExpanded = loadMoreBtn ? loadMoreBtn.getAttribute('data-expanded') === 'true' : false;
        
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const activeTag = tagBtns.find(btn => btn.classList.contains('active'));
        const filterValue = activeTag ? activeTag.getAttribute('data-filter') : 'all';

        articlesSection.setAttribute('data-active-filter', filterValue);

        let totalMatches = 0;
        let isHeroVisible = false;

        // 1. Проверяем главную карточку (Hero)
        if (heroCard) {
            const heroCategory = heroCard.getAttribute('data-category');
            const heroTitle = heroCard.querySelector('.article-card-title, h2, h3')?.textContent.toLowerCase() || '';
            const matchesHeroSearch = searchQuery === '' || heroTitle.includes(searchQuery);
            const matchesHeroCategory = (!filterValue || filterValue === 'all') || (heroCategory === filterValue);

            if (matchesHeroSearch && matchesHeroCategory) {
                heroCard.style.setProperty('display', 'grid', 'important');
                isHeroVisible = true;
                totalMatches++; // Учитываем Hero в общем счетчике
            } else {
                heroCard.style.setProperty('display', 'none', 'important');
            }
        }

        // 2. Отфильтровываем карточки сетки
        const matchedCards = cards.filter(card => {
            const titleEl = card.querySelector('.article-card-title, h2, h3, h4, a') || card;
            const titleText = titleEl ? titleEl.textContent.toLowerCase() : '';
            const cardCategory = card.getAttribute('data-category');

            const matchesSearch = searchQuery === '' || titleText.includes(searchQuery);
            const matchesCategory = (!filterValue || filterValue === 'all') || (cardCategory === filterValue);

            return matchesSearch && matchesCategory;
        });

        // Добавляем количество найденных карточек сетки к общему счетчику
        totalMatches += matchedCards.length;

        // 3. Прячем все карточки сетки
        cards.forEach(card => {
            card.style.setProperty('display', 'none', 'important');
        });

        // 4. Показываем подходящие карточки с учетом пагинации
        matchedCards.forEach((card, index) => {
            if (isExpanded || searchQuery !== '' || (filterValue && filterValue !== 'all') || index < INITIAL_COUNT) {
                card.style.setProperty('display', 'flex', 'important');
            }
        });

        // 5. Обновляем счетчик — теперь он ВСЕГДА показывает честное общее число
        if (visibleCountEl) {
            visibleCountEl.textContent = totalMatches;
        }

        // 6. Кнопка "Показать ещё"
        if (loadMoreBtn) {
            if (matchedCards.length > INITIAL_COUNT && searchQuery === '' && (!filterValue || filterValue === 'all')) {
                loadMoreBtn.style.display = 'inline-block';
                loadMoreBtn.textContent = isExpanded ? 'Свернуть' : 'Показать ещё';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Переключение тегов категорий
    tagBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            tagBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (loadMoreBtn) loadMoreBtn.setAttribute('data-expanded', 'false');
            updateArticlesGrid();
        });
    });

    // Фильтрация "на лету" при вводе ТОЛЬКО в инпут на странице
    if (searchInput) {
        searchInput.addEventListener('input', updateArticlesGrid);
    }

    // Клик по "Показать ещё"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = loadMoreBtn.getAttribute('data-expanded') === 'true';
            loadMoreBtn.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
            updateArticlesGrid();
        });
    }

    // Инициализация при загрузке
    updateArticlesGrid();
}

// ==========================================
// 8.2. СЮЖЕТЫ И КАТАЛОГИ РЕЦЕПТОВ (СИММЕТРИЧНАЯ СЕТКА)
// ==========================================
const recipesSection = document.querySelector('.recipes-section');
const recipesGrid = recipesSection?.querySelector('.recipes-grid');

if (recipesSection && recipesGrid) {
    const filterSection = document.querySelector('.content-section');
    const recipeCards = Array.from(recipesGrid.querySelectorAll('.recipe-card'));
    const loadMoreBtn = recipesSection.querySelector('.recipes-load-more-btn, .load-more-btn');

    const searchInput =
        filterSection?.querySelector('#sectionSearch, input[type="search"], input[type="text"]') ||
        null;

    const tagBtns = filterSection
        ? Array.from(filterSection.querySelectorAll('.tag-btn'))
        : [];

    const rawLimit = recipesGrid.getAttribute('data-limit') || recipesSection.getAttribute('data-limit');
    const parsedLimit = rawLimit ? parseInt(rawLimit, 10) : 15;
    const INITIAL_COUNT = Number.isNaN(parsedLimit) ? 15 : parsedLimit;

    function getActiveFilter() {
        const activeBtn = tagBtns.find(btn => btn.classList.contains('active'));
        if (!activeBtn) return 'all';
        return (
            activeBtn.getAttribute('data-story-filter') ||
            activeBtn.getAttribute('data-filter') ||
            activeBtn.getAttribute('data-category') ||
            activeBtn.getAttribute('data-story') ||
            'all'
        );
    }

    function updateRecipesGrid() {
        const isExpanded = loadMoreBtn ? loadMoreBtn.getAttribute('data-expanded') === 'true' : false;
        const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const filterValue = getActiveFilter();
        const isFiltered = searchQuery !== '' || (filterValue && filterValue !== 'all');

        const matchedCards = recipeCards.filter(card => {
            const titleText =
                card.querySelector('.recipe-card-title, h2, h3, h4, a')?.textContent.toLowerCase() || '';
            const cardValue =
                card.getAttribute('data-story') ||
                card.getAttribute('data-category') ||
                '';

            const matchesSearch = searchQuery === '' || titleText.includes(searchQuery);
            const matchesFilter = (!filterValue || filterValue === 'all') || (cardValue === filterValue);

            return matchesSearch && matchesFilter;
        });

        // Скрываем все карточки
        recipeCards.forEach(card => {
            card.style.setProperty('display', 'none', 'important');
        });

        // Показываем подходящие карточки
        matchedCards.forEach((card, index) => {
            if (isExpanded || isFiltered || index < INITIAL_COUNT) {
                card.style.removeProperty('display');
            }
        });

        // Кнопка "Показать ещё"
        if (loadMoreBtn) {
            if (!isFiltered && matchedCards.length > INITIAL_COUNT) {
                loadMoreBtn.style.display = 'inline-block';
                loadMoreBtn.textContent = isExpanded ? 'Свернуть' : 'Показать ещё';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    tagBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            tagBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (loadMoreBtn) loadMoreBtn.setAttribute('data-expanded', 'false');
            updateRecipesGrid();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', updateRecipesGrid);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isExpanded = loadMoreBtn.getAttribute('data-expanded') === 'true';
            loadMoreBtn.setAttribute('data-expanded', isExpanded ? 'false' : 'true');
            updateRecipesGrid();
        });
    }

    updateRecipesGrid();
}

// ==========================================
// 8.2. ЛОГИКА ФИЛЬТРАЦИИ РЕЦЕПТОВ
// ==========================================
// Ищем кнопки фильтрации именно внутри обертки фильтров рецептов
const recipeFilterBtns = document.querySelectorAll('.recipes-filter-wrapper .tag-btn');
const recipeCards = document.querySelectorAll('.recipes-section .recipe-card');

if (recipeCards.length > 0 && recipeFilterBtns.length > 0) {
    recipeFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Переключаем активный класс только среди кнопок рецептов
            recipeFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            recipeCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Возвращаем flex для корректного отображения карточки сетки
                    card.style.setProperty('display', 'flex', 'important');
                } else {
                    card.style.setProperty('display', 'none', 'important');
                }
            });
        });
    });
}

// ==========================================
// 8.3. ФИЛЬТРАЦИЯ КУЛИНАРНЫХ СЮЖЕТОВ
// ==========================================
const storyFilterBtns = document.querySelectorAll('[data-story-filter]');
const storyCards = document.querySelectorAll('.recipe-card[data-story]');

if (storyCards.length > 0 && storyFilterBtns.length > 0) {
    
    function filterStories(filterValue) {
        let activeBtn = null;

        // Переключаем активную кнопку
        storyFilterBtns.forEach(btn => {
            if (btn.getAttribute('data-story-filter') === filterValue) {
                btn.classList.add('active');
                activeBtn = btn; // Запоминаем активную кнопку
            } else {
                btn.classList.remove('active');
            }
        });

        // Показываем/скрываем карточки рецептов
        storyCards.forEach(card => {
            const cardStory = card.getAttribute('data-story');
            if (filterValue === 'all' || cardStory === filterValue) {
                card.style.setProperty('display', '', 'important');
            } else {
                card.style.setProperty('display', 'none', 'important');
            }
        });

        // ВСТАВКА: АВТОСКРОЛЛ ЛЕНТЫ К АКТИВНОМУ ТЕГУ
        if (activeBtn) {
            const tagsContainer = document.querySelector('.tags-scroll');
            if (tagsContainer) {
                const scrollPosition = activeBtn.offsetLeft - (tagsContainer.clientWidth / 2) + (activeBtn.clientWidth / 2);
                tagsContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    // 1. Клики по тегам-кнопкам на самой странице
    storyFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const filterValue = btn.getAttribute('data-story-filter');
            filterStories(filterValue);
        });
    });

    // 2. Авто-фильтрация при переходе с Главной по ссылке с ?story=...
    const urlParams = new URLSearchParams(window.location.search);
    const storyParam = urlParams.get('story');

    if (storyParam) {
        filterStories(storyParam);
    }
}

}); 





