document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'gastronomy_favorites';

    function getFavorites() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    }

    function saveFavorites(favorites) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }

function extractRecipeData(element) {
        // 1. Клик на отдельной странице статьи или рецепта
        const textBtn = element.classList.contains('recipe-fav-btn') || (element.classList.contains('fav-btn') && element.dataset.id)
            ? element 
            : element.closest('.recipe-fav-btn') || element.querySelector('.recipe-fav-btn');

if (textBtn && textBtn.dataset.id) {
            // Определяем тип для отдельной страницы (если в HTML не задан жесткий badge)
            let pageBadge = textBtn.dataset.badge || document.querySelector('.recipe-badge, .card-badge')?.textContent.trim() || '';
            if (!pageBadge) {
                // Если мы на странице истории или лайфхака, смотрим по классам body или статьи
                const isHack = document.querySelector('.hack-article, [data-category="hack"]') !== null;
                pageBadge = isHack ? 'Лайфхак' : 'История';
            }

            return {
                id: textBtn.dataset.id,
                title: textBtn.dataset.title || document.querySelector('h1')?.textContent.trim() || document.title,
                image: new URL(
                    textBtn.dataset.image || document.querySelector('.recipe-hero-image img, .article-hero-image img, .card-image, main img')?.getAttribute('src') || '', 
                    window.location.href
                ).href,
                badge: pageBadge, // Всегда «История» или «Лайфхак»
                level: textBtn.dataset.level || document.querySelector('.recipe-level, .level-badge')?.textContent.trim() || '',
                excerpt: textBtn.dataset.excerpt || document.querySelector('.recipe-lead, .article-lead, .card-excerpt, .page-subtitle, p')?.textContent.trim() || '',
                url: window.location.href
            };
        }

// 2. Клик по карточке в каталоге, статьях или на главной (.recipe-card, .article-card, .aesthetics-card)
        const card = element.classList.contains('recipe-card') || element.classList.contains('article-card') || element.classList.contains('aesthetics-card')
            ? element 
            : element.closest('.recipe-card, .article-card, .aesthetics-card');

if (card) {
            const imgEl = card.querySelector('img');
            const linkEl = card.tagName === 'A' ? card : card.querySelector('.recipe-card-title a, .article-card-title a, .trend-card-link, a');
            
            let fallbackId = '';
            if (linkEl && linkEl.getAttribute('href')) {
                const href = linkEl.getAttribute('href');
                fallbackId = href.split('/').pop().replace('.html', '');
            }

            const finalId = card.dataset.id || fallbackId;

            // Универсально собираем заголовок (поддерживает .trend-title, .card-title и т.д.)
            const cardTitle = card.querySelector('.trend-title, .card-title, .recipe-card-title, .article-card-title, h2, h3')?.textContent.trim() || linkEl?.textContent.trim() || '';
            
            // Универсально собираем описание/подзаголовок (поддерживает .trend-subtitle, .card-desc и т.д.)
            const cardExcerpt = card.querySelector('.trend-subtitle, .card-desc, .recipe-excerpt, .card-excerpt, p')?.textContent.trim() || '';
            
// Ищем бейдж, а если это карточка «Кухонь мира», определяем бейдж автоматически
            let cardBadge = card.querySelector('.cuisine-badge, .trend-badge, .recipe-badge, .card-badge, [class*="badge"], [class*="tag"]')?.textContent.trim() || '';
            
            if (!cardBadge && card.classList.contains('cuisine-card')) {
                // Автоматический бейдж для кухонь мира
                if (card.querySelector('.flag-india')) cardBadge = 'Индийская кухня';
                else if (card.querySelector('.flag-italy')) cardBadge = 'Итальянская кухня';
                else if (card.querySelector('.flag-hawaii')) cardBadge = 'Гавайская кухня';
                else if (card.querySelector('.flag-east')) cardBadge = 'Ближний Восток';
                else cardBadge = 'Кухни мира';
            }

            if (card.classList.contains('article-card')) {
                const category = card.dataset.category || (card.querySelector('.story-date') ? 'story' : 'hack');
                cardBadge = category === 'hack' ? 'Лайфхак' : 'История';
            }

            let cardImage = '';
            if (imgEl) {
                const rawSrc = imgEl.getAttribute('src');
                cardImage = rawSrc.startsWith('http') || rawSrc.startsWith('/') 
                    ? rawSrc 
                    : new URL(rawSrc, window.location.href).href;
            }

            // Абсолютный URL
            let cardUrl = window.location.href;
            if (linkEl && linkEl.getAttribute('href')) {
                cardUrl = new URL(linkEl.getAttribute('href'), window.location.href).href;
            }

            return {
                id: finalId,
                title: cardTitle,
                image: cardImage,
                badge: cardBadge, // Теперь сюда попадет Street Food, Viral и т.д.
                level: card.querySelector('.recipe-level')?.textContent.trim() || '', // У трендов пусто, но структура не сломается
                excerpt: cardExcerpt, // Сюда подтянется подзаголовок из трендов ("Пикантные Тако в бульоне")
                url: cardUrl
            };
        }

        return null;
}

    function toggleFavorite(recipeData) {
        if (!recipeData || !recipeData.id) return;

        let favorites = getFavorites();
        const index = favorites.findIndex(item => item.id === recipeData.id);

        if (index !== -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(recipeData);
        }

        saveFavorites(favorites);
        updateUI();
    }

    function updateUI() {
        const favorites = getFavorites();
        const favoriteIds = favorites.map(item => item.id);

        // 1. Обновляем все иконки закладок в каталогах
        document.querySelectorAll('.recipe-card, .article-card, .aesthetics-card').forEach(card => {
            const linkEl = card.querySelector('a');
            let fallbackId = '';
            if (linkEl && linkEl.getAttribute('href')) {
                fallbackId = linkEl.getAttribute('href').split('/').pop().replace('.html', '');
            }
            const cardId = card.dataset.id || fallbackId;
            const isFav = favoriteIds.includes(cardId);

            card.querySelectorAll('.fav-btn, .mobile-fav-btn').forEach(btn => {
                btn.classList.toggle('is-active', isFav);
            });
        });

        // 2. Обновляем кнопки на отдельных страницах блюд и статей
        const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');

        document.querySelectorAll('[data-id]').forEach(el => {
            const elId = el.dataset.id;
            const isFav = favoriteIds.includes(elId);

            if (el.classList.contains('recipe-fav-btn') || el.classList.contains('fav-btn') || el.classList.contains('mobile-fav-btn')) {
                el.classList.toggle('is-active', isFav);
            }

            const btnText = el.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = isEn
                    ? (isFav ? 'In favorites' : 'Add to favorites')
                    : (isFav ? 'В избранном' : 'Добавить в избранное');
            }
        });

        // 3. Рендеринг на странице favorites.html (Супер-минимализм)
        const grid = document.getElementById('favoritesGrid');
        const emptyState = document.getElementById('emptyFavorites');

        if (grid && emptyState) {
            if (favorites.length === 0) {
                grid.innerHTML = '';
                grid.style.display = 'none'; 
                emptyState.style.display = 'block';
            } else {
                emptyState.style.display = 'none';
                grid.style.display = 'grid';
                
                // РЕНДЕР КАРТОЧЕК: Только фото, кнопка удаления и заголовок
                grid.innerHTML = favorites.map(recipe => `
                    <article class="recipe-card favorite-item" data-id="${recipe.id}">
                        <div class="recipe-thumb">
                            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                            <button class="fav-btn is-active" aria-label="Удалить из избранного">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                                </svg>
                            </button>
                        </div>
                        <div class="recipe-content">
                            <h3 class="recipe-card-title">
                                <a href="${recipe.url}">${recipe.title}</a>
                            </h3>
                        </div>
                    </article>
                `).join('');
            }
        }
    }

    // Универсальный и надежный перехватчик кликов для добавления/удаления
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.fav-btn, .mobile-fav-btn, .recipe-fav-btn');
        if (btn) {
            e.preventDefault();
            const container = btn.closest('[data-id]') || btn;
            const data = extractRecipeData(container);
            toggleFavorite(data);
        }
    });

    // Переход по ссылке при клике на эстетическую карточку (исключая кнопку избранного)
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.aesthetics-card');
        if (card && !e.target.closest('.fav-btn')) {
            const link = card.querySelector('.aesthetics-card-title a');
            if (link && link.getAttribute('href')) {
                window.location.href = link.getAttribute('href');
            }
        }
    });

    // Первоначальный запуск UI при загрузке страницы
    updateUI();

    // 1. Исправление бага с кнопкой "Назад" и кэшем браузера (bfcache)
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            updateUI();
        }
    });

    // 2. Синхронизация избранного между разными вкладками браузера (бонус для надежности)
    window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEY) {
            updateUI();
        }
    });
});
