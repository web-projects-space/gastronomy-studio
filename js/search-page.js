(function() {
    // 1. База данных всех материалов сайта
    const SITE_DATABASE = [

// ИСТОРИИ

        {
            title: "Тайная история круассана от Вены до Парижа",
            excerpt: "Как осада 1683 года изменила европейский завтрак и при чем здесь Мария-Антуанетта.",
            image: "images/stories_/croisant-history/croissant-history-card.webp",
            link: "articles_/stories_/croissant-history.html",
            badge: "Главная тема",
            meta: "12 октября 2026"
        },

        {
            title: "Пряная революция и влияние корицы на империи",
            excerpt: "Загадки древних купцов, колониальные войны и ценность одной щепотки пряности.",
            image: "images/stories_/cinnamon-history/cinamon-history-card.webp",
            link: "articles_/stories_/cinnamon-history.html",
            badge: "История",
            meta: "5 октября 2026"
        },

        {
            title: "Связующая нить цивилизаций и традиции хлеба",
            excerpt: "От французского багета до индийского наана — как зерно сформировало мировую культуру.",
            image: "images/stories_/bread-cultures/bread-cultures-card.webp",
            link: "articles_/stories_/bread-cultures.html",
            badge: "История",
            meta: "5 октября 2026"
        },

        {
            title: "От уличной еды бедняков до королевы Италии",
            excerpt: "Как простое тесто с томатами покорило королевский двор и планету.",
            image: "images/stories_/pizza-history/queen-margherita-card.webp",
            link: "articles_/stories_/pizza-history.html",
            badge: "История",
            meta: "5 октября 2026"
        },

        {
            title: "Феномен Юдзу в высокой кухне",
            excerpt: "Путь азиатского цитруса от гор Восточной Азии до меню ресторанов Michelin.",
            image: "images/stories_/yuzu-trend/yuzu-trend-card.webp",
            link: "articles_/stories_/yuzu-trend.html",
            badge: "История",
            meta: "4 октября 2026"
        },

        {
            title: "Алхимия трюфеля и магия аромата умами",
            excerpt: "Таинственный мир подземных грибов, охота с собаками и их высокая ценность.",
            image: "images/stories_/truffle-magic/truffle-magic-card.webp",
            link: "articles_/stories_/truffle-magic.html",
            badge: "История",
            meta: "3 октября 2026"
        },

        {
            title: "История гида Michelin: От автошин до высшей награды в гастрономии",
            excerpt: "Маркетинговый ход начала XX века, превратившийся в самый авторитетный ресторанный рейтинг мира.",
            image: "images/stories_/michelin-history/michelin-chef-card.webp",
            link: "articles_/stories_/michelin-history.html",
            badge: "История",
            meta: "11 апреля 2026"
        },

        {
            title: "Как чай Матча покорил мировые кофейни и десерты",
            excerpt: "От дзен-буддийских медитаций до главного суперфуда современности.",
            image: "images/stories_/matcha-trend/matcha-trend-card.webp",
            link: "articles_/stories_/matcha-trend.html", 
            badge: "История",
            meta: "4 октября 2026"
        },

        {
            title: "5 главных K-Food трендов: Эстетика Сеула в цифровую эпоху",
            excerpt: "Как корейская гастрономия превратилась в культ визуала, объединивший дизайн, моду и еду.",
            image: "images/stories_/k-food-trends/k-food-card.webp",
            link: "articles_/stories_/k-food-trends.html", 
            badge: "История",
            meta: "8 ноября 2026"
        },

        {
            title: "Эликсир бодрости",
            excerpt: "История об эфиопских пастухах, суфийских монастырях и глобальной утренней привычке миллиона людей.",
            image: "images/stories_/coffee-culture/coffee-culture-card.webp",
            link: "articles_/stories_/coffee-culture.html",
            badge: "История",
            meta: "5 октября 2026"
        },

        {
            title: "Гастрономический гороскоп.",
            excerpt: "Разбираем главный физико-химический процесс на вашей сковороде: от румяной корочки до глубокого вкуса.",
            image: "images/stories_/horoscope/horoscope-main-card.webp",
            link: "articles_/stories_/gastronomy-horoscope.html", 
            badge: "История",
            meta: "12 октября 2026"
        },

       // ЛАЙФХАКИ

        {
            title: "Быстрый подъём дрожжевого теста",
            excerpt: "Простой способ создать идеальную расстоечную камеру с влажным теплом на любой кухне.",
            image: "images/hacks/dough-hack/dough-hack-card.webp",
            link: "articles_/hacks/dough-hack.html",
            badge: "Топ лайфхак",
            meta: "4 мин чтения"
        },

        {
            title: "Архитектура блюда и правила построения объёма",
            excerpt: "Секреты создания объема и вертикали при подаче пасты и горячих блюд.",
            image: "images/hacks/food-architecture/food-architecture-card.webp",
            link: "articles_/hacks/food-architecture.html",
            badge: "Лайфхак",
            meta: "6 мин чтения"
        },

        {
            title: "Сырная палитра: Правила идеальной плато-сервировки",
            excerpt: "Подбор 4 категорий сыров, гастрономических пар и сборка доски.",
            image: "images/hacks/cheese-board/cheese-board-card.webp",
            link: "articles_/hacks/cheese-board.html",
            badge: "Лайфхак",
            meta: "6 мин чтения"
        },

        {
            title: "Искусство домашней ферментации Fermentation Revival",
            excerpt: "Освойте базовые техники и правила безопасности для создания ферментированных продуктов дома.",
            image: "images/hacks/fermentation-revival/fermentation-card.webp",
            link: "articles_/hacks/fermentation-revival.html",
            badge: "Лайфхак",
            meta: "5 мин чтения"
        },
        
        {
            title: "Использование главной корейской пасты Гочуджанг",
            excerpt: "Секреты баланса остроты, сладости и ферментации в повседневных блюдах.",
            image: "images/hacks/gochujang-guide/gochujang-guide-card.webp",
            link: "articles_/hacks/gochujang-guide.html",
            badge: "Лайфхак",
            meta: "3 мин чтения"
        },

        {
            title: "Кунжутная паста тахини на домашней кухне",
            excerpt: "Как выбирать, взбивать и сочетать кунжутную пасту без горечи.",
            image: "images/hacks/tahini-secrets/tahini-secrets-card.webp",
            link: "articles_/hacks/tahini-secrets.html",
            badge: "Лайфхак",
            meta: "3 мин чтения"
        },

        {
            title: "Секреты идеальной хрустящей корочки",
            excerpt: "Почему в ресторанах курица всегда получается сочной и румяной? Применяем реакцию Майара на практике.",
            image: "images/hacks/crispy-chicken/crispy-chicken-card.webp",
            link: "articles_/hacks/crispy-chicken-hack.html",
            badge: "Лайфхак",
            meta: "4 мин чтения"
        },

        {
            title: "Магия текстур: Сочетание хруста, нежности и глянца",
            excerpt: "Как правильно сочетать контрастные текстуры в десертах и горячем.",
            image: "images/hacks/texture-magic/texture-magic-card.webp",
            link: "articles_/hacks/texture-magic.html",
            badge: "Лайфхак",
            meta: "5 мин чтения"
        },

        {
            title: "Мини‑дегустация Michelin: 6 блюд на один укус",
            excerpt: "Разбираем 6 мини-блюд из ресторанов со звёздами Michelin, которые можно повторить дома.",
            image: "images/hacks/michelin-tasting/michelin-tasting-card.webp",
            link: "articles_/hacks/michelin-tasting.html",
            badge: "Лайфхак",
            meta: "5 мин чтения"
        },

        {
            title: "Умами: Неуловимая магия в вашей тарелке",
            excerpt: "Почему некоторые продукты делают вкус блюда глубже, и как работает синергия вкусов.",
            image: "images/hacks/umami-magic/umami-card.webp",
            link: "articles_/hacks/umami-magic.html",
            badge: "Лайфхак",
            meta: "4 мин чтения"
        },

        {
            title: "Как не обидеть повара? 7 кулинарных традиций со всего мира",
            excerpt: "Узнайте неожиданные правила этикета и застольные привычки разных стран, чтобы не попасть впросак.",
            image: "images/hacks/world-culinary-traditions/map-card.webp",
            link: "articles_/hacks/world-culinary-traditions.html",
            badge: "Лайфхак",
            meta: "5 мин чтения"
        },

        {
            title: "Магия рецепторов: Как специи влияют на вкус и состояние",
            excerpt: "5 золотых правил пряностей, химия несладких специй и нейрохимия десертов.",
            image: "images/hacks/spices-magic/spices-magic-card.webp",
            link: "articles_/hacks/spices-magic.html",
            badge: "Лайфхак",
            meta: "5 мин чтения"
        },

        {
            title: "Самые странные, но удивительно вкусные пары",
            excerpt: "Необычные вкусовые сочетания от шефов со всего мира, которые стоит попробовать дома.",
            image: "images/hacks/weird-food-pairs/peanutbutter-pickles-card.webp",
            link: "articles_/hacks/weird-food-pairs.html",
            badge: "Лайфхак",
            meta: "4 мин чтения"
        },

        {
            title: "Почему жареная еда вкуснее: Всё о реакции Майара",
            excerpt: "Разбираем главный физико-химический процесс на вашей сковороде: от румяной корочки до глубокого вкуса.",
            image: "images/hacks/maillard-reaction/maillard-card.webp",
            link: "articles_/hacks/maillard-reaction.html",
            badge: "Лайфхак",
            meta: "5 мин чтения"
        },

        {
            title: "Соусы: как спасти вкус и найти идеальный баланс",
            excerpt: "Формула идеального соуса из четырёх элементов и диагностика вкуса, когда блюдо «не собирается».",
            image: "images/hacks/sauces-balance/sauces-balance-card.webp",
            link: "articles_/hacks/sauces-balance-hack.html",
            badge: "Лайфхак",
            meta: "4 мин чтения"
        },

        // РЕЦЕПТЫ

        {
            title: "Паста с грибами и умами-эффектом",
            excerpt: "Нежная паста в бархатистом сливочном соусе с глубоким ароматом лесных грибов.",
            image: "images/hot-dishes/pasta-with-mushrooms-card.webp",
            link: "recipes/hot-dishes/pasta-with-mushrooms.html",
            badge: "20 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Малиновый тарт с домашней карамелью",
            excerpt: "Хрустящая песочная основа, сочная свежая малина и тягучая домашняя карамель.",
            image: "images/desserts/raspberry-tart-card.webp",
            link: "recipes/desserts/raspberry-tart.html",
            badge: "25 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Пикантные тако в бульоне",
            excerpt: "Сочная пряная говядина с тягучим сыром в хрустящей тортилье с насыщенным густым бульоном.",
            image: "images/hot-dishes/birria-tacos-card.webp",
            link: "recipes/hot-dishes/birria-tacos.html",
            badge: "2.5 часа",
            meta: "Средняя сложность"
        },

        {
            title: "Наука идеального стейка",
            excerpt: "Проверенные техники обжарки для идеальной корочки и сочности.",
            image: "images/hot-dishes/steak-ribeye-card.webp",
            link: "recipes/hot-dishes/steak-ribeye.html",
            badge: "20 мин",
            meta: "Средняя сложность"
        },

        {
            title: "Филе лосося на гриле со спаржей и лимоном",
            excerpt: "Изысканный ресторанный ужин, который легко приготовить дома.",
            image: "images/hot-dishes/salmon-asparagus-card.webp",
            link: "recipes/hot-dishes/salmon-asparagus.html",
            badge: "25 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Шакшука с фетой и копчёной паприкой",
            excerpt: "Яйца, запечённые в пряном соусе из томатов и сладкого перца.",
            image: "images/hot-dishes/shakshuka-card.webp",
            link: "recipes/hot-dishes/shakshuka.html",
            badge: "20 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Ризотто с куриным филе",
            excerpt: "Классическая итальянская кремовая текстура, нежное мясо и секреты правильной мантакации от шефа.",
            image: "images/hot-dishes/risotto-card.webp",
            link: "recipes/hot-dishes/risotto.html",
            badge: "30 мин",
            meta: "Средняя сложность"
        },

        {
            title: "Облачный хлеб — Воздушный десерт без муки",
            excerpt: "Вирусный тренд из соцсетей: невесомое десертное «облако» из 3 ингредиентов без муки и глютена.",
            image: "images/desserts/cloud-bread-card.webp",
            link: "recipes/desserts/cloud-bread.html",
            badge: "30 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Мусс Матча с белым шоколадом",
            excerpt: "Японский изысканный тренд: шелковистый мусс с изумрудным чаем матча и белым шоколадом.",
            image: "images/desserts/matcha-dessert-card.webp",
            link: "recipes/desserts/matcha-dessert.html",
            badge: "35 мин",
            meta: "Средняя сложность"
        },

        {
            title: "Кремовое мороженое из авокадо",
            excerpt: "Полезный десерт без выпечки, который легко готовить с детьми.",
            image: "images/desserts/avocado-ice-cream-card.webp",
            link: "recipes/desserts/avocado-ice-cream.html",
            badge: "10 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Пряный чай масала",
            excerpt: "Традиционный индийский согревающий напиток на основе чёрного чая, молока и целого букета пряных специй.",
            image: "images/drinks/masala-tea-card.webp",
            link: "recipes/drinks/masala-tea.html",
            badge: "15 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Авокадо-тост с яйцом пашот",
            excerpt: "Идеальное эстетичное начало дня с нежным яйцом и кремовым авокадо.",
            image: "images/health-and-diet/avokado-toast-card.webp",
            link: "recipes/health-and-diet/avocado-toast.html",
            badge: "15 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Корейский салат из огурцов «Ои Мучим»",
            excerpt: "Быстрая адаптация легендарного азиатского салата.",
            image: "images/salads/oi-muchim-card.webp",
            link: "recipes/salads/oi-muchim.html",
            badge: "5 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Поке со свежим тунцом и авокадо",
            excerpt: "Гавайский боул со свежими овощами и соево-кунжутной заправкой.",
            image: "images/salads/tuna-poke-card.webp",
            link: "recipes/salads/tuna-poke.html",
            badge: "20 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Тарталетки с крем-сыром и красной икрой",
            excerpt: "Классическая праздничная закуска с нежным сливочным кремом.",
            image: "images/salads/tartlets-caviar-card.webp",
            link: "recipes/salads/tartlets-caviar.html",
            badge: "5 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Корейские корн-доги с тягучим сыром",
            excerpt: "Хрустящий азиатский стритфуд: сосиски и моцарелла в пышном тесте и корочке из сухарей панко.",
            image: "images/salads/korean-corn-dogs-card.webp",
            link: "recipes/salads/korean-corn-dogs.html",
            badge: "25 мин",
            meta: "Средняя сложность"
        },

        {
            title: "Пицца «Маргарита»: Классика в домашнем исполнении",
            excerpt: "Готовим настоящую неаполитанскую пиццу в обычной духовке: секреты теста и хрустящих бортов.",
            image: "images/baking/margherita-recipe-card.webp",
            link: "recipes/baking/margherita-recipe.html",
            badge: "2 часа",
            meta: "Средняя сложность"
        },

        {
            title: "Фруктовое облако: десерт без сахара",
            excerpt: "Нежный и эффектный десерт в бокале без муки и белого сахара.",
            image: "images/desserts/fruit-cloud-card.webp",
            link: "recipes/desserts/fruit-cloud.html",
            badge: "10 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Зелёный эликсир",
            excerpt: "Кнопка перезагрузки после застолий. Бархатистый и полезный смузи всего за 5 минут.",
            image: "images/drinks/smoothie-card.webp",
            link: "recipes/drinks/smoothie.html",
            badge: "5 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Желток-конфи на хрустящем тосте",
            excerpt: "Ресторанный деликатес дома: шелковистая текстура для особенного утра.",
            image: "images/health-and-diet/yolk-confit-toast-card.webp",
            link: "recipes/health-and-diet/yolk-confit-toast.html",
            badge: "55 мин",
            meta: "Лёгкая сложность"
        }, 

        {
            title: "Паста с нежным томатным соусом",
            excerpt: "Идеальный баланс сливок и ярких томатов. Тот самый вкус «как в Италии»!",
            image: "images/hot-dishes/creamy-tomato-pasta-card.webp",
            link: "recipes/hot-dishes/creamy-tomato-pasta.html",
            badge: "20 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Тёплый салат в средиземноморском стиле",
            excerpt: "Ресторанная эстетика из простых сезонных продуктов.",
            image: "images/salads/mediterranean-warm-salad-card.webp",
            link: "recipes/salads/mediterranean-warm-salad.html",
            badge: "30 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Салат с красной рыбой и авокадо",
            excerpt: "Изысканный хит трендов. Свежий, праздничный и держит форму как в ресторане.",
            image: "images/salads/salmon-avocado-salad-card.webp",
            link: "recipes/salads/salmon-avocado-salad.html",
            badge: "15 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Тост с авокадо и лимоном",
            excerpt: "Тот самый «инстаграмный» завтрак за считанные минуты.",
            image: "images/salads/avocado-lemon-toast-card.webp",
            link: "recipes/salads/avocado-lemon-toast.html",
            badge: "10 мин",
            meta: "Лёгкая сложность"
        },

        {
            title: "Топ-3 соуса современной западной гастрономии",
            excerpt: "Бархатный голландез, классический винегрет и йогуртовый дип: золотой фонд вашей кухни.",
            image: "images/sauces/top-3-sauces-card.webp",
            link: "recipes/sauces/top-3-sauces-recipe.html",
            badge: "5 мин",
            meta: "Лёгкая сложность"
        },

        // STORIES

        {
            title: "The Secret History of the Croissant from Vienna to Paris",
            excerpt: "How the 1683 siege changed European breakfast and what Marie Antoinette has to do with it.",
            image: "images/stories_/croisant-history/croissant-history-card.webp",
            link: "en/articles_/stories_/croissant-history.html",
            badge: "Featured",
            meta: "October 12, 2026"
        },

        {
            title: "The Spice Revolution and Cinnamon's Impact on Empires",
            excerpt: "Mysteries of ancient merchants, colonial wars, and the value of a single pinch of spice.",
            image: "images/stories_/cinnamon-history/cinamon-history-card.webp",
            link: "en/articles_/stories_/cinnamon-history.html",
            badge: "History",
            meta: "October 5, 2026"
        },

        {
            title: "The Thread Connecting Civilizations and Bread Traditions",
            excerpt: "From French baguette to Indian naan—how grain shaped global culture.",
            image: "images/stories_/bread-cultures/bread-cultures-card.webp",
            link: "en/articles_/stories_/bread-cultures.html",
            badge: "History",
            meta: "October 5, 2026"
        },

        {
            title: "From Poor Man's Street Food to the Queen of Italy",
            excerpt: "How simple dough with tomatoes won over the royal court and the world.",
            image: "images/stories_/pizza-history/queen-margherita-card.webp",
            link: "en/articles_/stories_/pizza-history.html",
            badge: "History",
            meta: "October 5, 2026"
        },

        {
            title: "The Yuzu Phenomenon in High Cuisine",
            excerpt: "The journey of the Asian citrus from the mountains of East Asia to Michelin restaurant menus.",
            image: "images/stories_/yuzu-trend/yuzu-trend-card.webp",
            link: "en/articles_/stories_/yuzu-trend.html",
            badge: "History",
            meta: "October 4, 2026"
        },

        {
            title: "Truffle Alchemy and the Magic of Umami Aroma",
            excerpt: "The mysterious world of subterranean fungi, hunting with dogs, and their high value.",
            image: "images/stories_/truffle-magic/truffle-magic-card.webp",
            link: "en/articles_/stories_/truffle-magic.html",
            badge: "History",
            meta: "October 3, 2026"
        },

        {
            title: "The History of the Michelin Guide: From Tires to Gastronomy's Highest Honor",
            excerpt: "An early 20th-century marketing move that became the world's most authoritative restaurant rating.",
            image: "images/stories_/michelin-history/michelin-chef-card.webp",
            link: "en/articles_/stories_/michelin-history.html",
            badge: "History",
            meta: "April 11, 2026"
        },

        {
            title: "How Matcha Tea Conquered Global Cafes and Desserts",
            excerpt: "From Zen Buddhist meditations to today's leading superfood.",
            image: "images/stories_/matcha-trend/matcha-trend-card.webp",
            link: "en/articles_/stories_/matcha-trend.html",
            badge: "History",
            meta: "October 4, 2026"
        },

        {
            title: "5 Top K-Food Trends: Seoul Aesthetics in the Digital Age",
            excerpt: "How Korean gastronomy became a visual cult uniting design, fashion, and food.",
            image: "images/stories_/k-food-trends/k-food-card.webp",
            link: "en/articles_/stories_/k-food-trends.html",
            badge: "History",
            meta: "November 8, 2026"
        },

        {
            title: "Elixir of Energy",
            excerpt: "A story of Ethiopian herders, Sufi monasteries, and a global morning habit for millions.",
            image: "images/stories_/coffee-culture/coffee-culture-card.webp",
            link: "en/articles_/stories_/coffee-culture.html",
            badge: "History",
            meta: "October 5, 2026"
        },

        {
            title: "Gastronomic Horoscope.",
            excerpt: "Breaking down the key physicochemical process in your pan: from golden crust to deep flavor.",
            image: "images/stories_/horoscope/horoscope-main-card.webp",
            link: "en/articles_/stories_/gastronomy-horoscope.html",
            badge: "History",
            meta: "October 12, 2026"
        },

        // LIFE HACKS

        {
            title: "Fast Rising for Yeast Dough",
            excerpt: "A simple way to create an ideal proofing chamber with moist warmth in any kitchen.",
            image: "images/hacks/dough-hack/dough-hack-card.webp",
            link: "en/articles_/hacks/dough-hack.html",
            badge: "Top Hack",
            meta: "4 min read"
        },

        {
            title: "Dish Architecture and Rules of Building Volume",
            excerpt: "Secrets of creating volume and verticality when plating pasta and hot dishes.",
            image: "images/hacks/food-architecture/food-architecture-card.webp",
            link: "en/articles_/hacks/food-architecture.html",
            badge: "Life Hack",
            meta: "6 min read"
        },

        {
            title: "Cheese Palette: Rules for the Ideal Platter Presentation",
            excerpt: "Selecting 4 cheese categories, gastronomic pairings, and assembling the board.",
            image: "images/hacks/cheese-board/cheese-board-card.webp",
            link: "en/articles_/hacks/cheese-board.html",
            badge: "Life Hack",
            meta: "6 min read"
        },

        {
            title: "The Art of Home Fermentation: Fermentation Revival",
            excerpt: "Master basic techniques and safety rules for making fermented foods at home.",
            image: "images/hacks/fermentation-revival/fermentation-card.webp",
            link: "en/articles_/hacks/fermentation-revival.html",
            badge: "Life Hack",
            meta: "5 min read"
        },

        {
            title: "Using Korea's Signature Gochujang Paste",
            excerpt: "Secrets to balancing heat, sweetness, and fermentation in everyday dishes.",
            image: "images/hacks/gochujang-guide/gochujang-guide-card.webp",
            link: "en/articles_/hacks/gochujang-guide.html",
            badge: "Life Hack",
            meta: "3 min read"
        },

        {
            title: "Sesame Tahini Paste in the Home Kitchen",
            excerpt: "How to choose, whisk, and pair sesame paste without bitterness.",
            image: "images/hacks/tahini-secrets/tahini-secrets-card.webp",
            link: "en/articles_/hacks/tahini-secrets.html",
            badge: "Life Hack",
            meta: "3 min read"
        },

        {
            title: "Secrets to a Perfectly Crispy Crust",
            excerpt: "Why is restaurant chicken always juicy and golden? Applying the Maillard reaction in practice.",
            image: "images/hacks/crispy-chicken/crispy-chicken-card.webp",
            link: "en/articles_/hacks/crispy-chicken-hack.html",
            badge: "Life Hack",
            meta: "4 min read"
        },

        {
            title: "Texture Magic: Combining Crunch, Tenderness, and Gloss",
            excerpt: "How to properly pair contrasting textures in desserts and hot dishes.",
            image: "images/hacks/texture-magic/texture-magic-card.webp",
            link: "en/articles_/hacks/texture-magic.html",
            badge: "Life Hack",
            meta: "5 min read"
        },

        {
            title: "Michelin Mini-Tasting: 6 One-Bite Dishes",
            excerpt: "Breaking down 6 mini-dishes from Michelin-starred restaurants that you can recreate at home.",
            image: "images/hacks/michelin-tasting/michelin-tasting-card.webp",
            link: "en/articles_/hacks/michelin-tasting.html",
            badge: "Life Hack",
            meta: "5 min read"
        },

        {
            title: "Umami: The Elusive Magic on Your Plate",
            excerpt: "Why some ingredients make a dish taste deeper, and how flavor synergy works.",
            image: "images/hacks/umami-magic/umami-card.webp",
            link: "en/articles_/hacks/umami-magic.html",
            badge: "Life Hack",
            meta: "4 min read"
        },

        {
            title: "How Not to Offend a Chef? 7 Culinary Traditions from Around the World",
            excerpt: "Discover unexpected etiquette rules and table habits across countries so you don't slip up.",
            image: "images/hacks/world-culinary-traditions/map-card.webp",
            link: "en/articles_/hacks/world-culinary-traditions.html",
            badge: "Life Hack",
            meta: "5 min read"
        },

        {
            title: "Magic of Taste Buds: How Spices Affect Flavor and Mood",
            excerpt: "5 golden rules of spices, chemistry of savory spices, and dessert neurochemistry.",
            image: "images/hacks/spices-magic/spices-magic-card.webp",
            link: "en/articles_/hacks/spices-magic.html",
            badge: "Life Hack",
            meta: "5 min read"
        },

        {
            title: "The Weirdest Yet Surprisingly Delicious Pairings",
            excerpt: "Unusual flavor combinations from chefs worldwide worth trying at home.",
            image: "images/hacks/weird-food-pairs/peanutbutter-pickles-card.webp",
            link: "en/articles_/hacks/weird-food-pairs.html",
            badge: "Life Hack",
            meta: "4 min read"
        },

        {
            title: "Why Fried Food Tastes Better: All About the Maillard Reaction",
            excerpt: "Breaking down the key physicochemical process in your pan: from golden crust to deep flavor.",
            image: "images/hacks/maillard-reaction/maillard-card.webp",
            link: "en/articles_/hacks/maillard-reaction.html",
            badge: "Life Hack",
            meta: "5 min read"
        },

        {
            title: "Sauces: How to Save Flavor and Find the Ideal Balance",
            excerpt: "The four-element formula for a great sauce and flavor troubleshooting when a dish doesn't 'come together.'",
            image: "images/hacks/sauces-balance/sauces-balance-card.webp",
            link: "en/articles_/hacks/sauces-balance-hack.html",
            badge: "Life Hack",
            meta: "4 min read"
        },

        // RECIPES

        {
            title: "Pasta with Mushrooms and Umami Effect",
            excerpt: "Tender pasta in a velvety cream sauce with the deep aroma of forest mushrooms.",
            image: "images/hot-dishes/pasta-with-mushrooms-card.webp",
            link: "en/recipes/hot-dishes/pasta-with-mushrooms.html",
            badge: "20 min",
            meta: "Easy difficulty"
        },

        {
            title: "Raspberry Tart with Homemade Caramel",
            excerpt: "Crisp shortcrust base, juicy fresh raspberries, and gooey homemade caramel.",
            image: "images/desserts/raspberry-tart-card.webp",
            link: "en/recipes/desserts/raspberry-tart.html",
            badge: "25 min",
            meta: "Easy difficulty"
        },

        {
            title: "Spicy Tacos in Consommé",
            excerpt: "Juicy spiced beef with melted cheese in a crispy tortilla alongside rich, thick broth.",
            image: "images/hot-dishes/birria-tacos-card.webp",
            link: "en/recipes/hot-dishes/birria-tacos.html",
            badge: "2.5 hours",
            meta: "Medium difficulty"
        },

        {
            title: "The Science of the Ideal Steak",
            excerpt: "Proven searing techniques for a golden crust and juicy interior.",
            image: "images/hot-dishes/steak-ribeye-card.webp",
            link: "en/recipes/hot-dishes/steak-ribeye.html",
            badge: "20 min",
            meta: "Medium difficulty"
        },

        {
            title: "Grilled Salmon Fillet with Asparagus and Lemon",
            excerpt: "An elevated restaurant-style dinner that's easy to make at home.",
            image: "images/hot-dishes/salmon-asparagus-card.webp",
            link: "en/recipes/hot-dishes/salmon-asparagus.html",
            badge: "25 min",
            meta: "Easy difficulty"
        },

        {
            title: "Shakshuka with Feta and Smoked Paprika",
            excerpt: "Eggs baked in a spiced sauce of tomatoes and sweet bell pepper.",
            image: "images/hot-dishes/shakshuka-card.webp",
            link: "en/recipes/hot-dishes/shakshuka.html",
            badge: "20 min",
            meta: "Easy difficulty"
        },

        {
            title: "Chicken Risotto",
            excerpt: "Classic Italian creamy texture, tender poultry, and chef secrets for proper mantecatura.",
            image: "images/hot-dishes/risotto-card.webp",
            link: "en/recipes/hot-dishes/risotto.html",
            badge: "30 min",
            meta: "Medium difficulty"
        },

        {
            title: "Cloud Bread — Airy Flourless Dessert",
            excerpt: "Viral social media trend: a weightless 3-ingredient dessert 'cloud' with no flour or gluten.",
            image: "images/desserts/cloud-bread-card.webp",
            link: "en/recipes/desserts/cloud-bread.html",
            badge: "30 min",
            meta: "Easy difficulty"
        },

        {
            title: "Matcha Mousse with White Chocolate",
            excerpt: "Refined Japanese trend: silky mousse with emerald matcha tea and white chocolate.",
            image: "images/desserts/matcha-dessert-card.webp",
            link: "en/recipes/desserts/matcha-dessert.html",
            badge: "35 min",
            meta: "Medium difficulty"
        },

        {
            title: "Creamy Avocado Ice Cream",
            excerpt: "A wholesome no-bake dessert that's easy to make with kids.",
            image: "images/desserts/avocado-ice-cream-card.webp",
            link: "en/recipes/desserts/avocado-ice-cream.html",
            badge: "10 min",
            meta: "Easy difficulty"
        },

        {
            title: "Spiced Masala Chai",
            excerpt: "Traditional Indian warming drink made with black tea, milk, and an aromatic blend of spices.",
            image: "images/drinks/masala-tea-card.webp",
            link: "en/recipes/drinks/masala-tea.html",
            badge: "15 min",
            meta: "Easy difficulty"
        },

        {
            title: "Avocado Toast with Poached Egg",
            excerpt: "A sleek, aesthetic start to the day with a delicate egg and creamy avocado.",
            image: "images/health-and-diet/avokado-toast-card.webp",
            link: "en/recipes/health-and-diet/avocado-toast.html",
            badge: "15 min",
            meta: "Easy difficulty"
        },

        {
            title: "Korean Cucumber Salad 'Oi Muchim'",
            excerpt: "A quick take on the legendary Asian salad.",
            image: "images/salads/oi-muchim-card.webp",
            link: "en/recipes/salads/oi-muchim.html",
            badge: "5 min",
            meta: "Easy difficulty"
        },

        {
            title: "Fresh Tuna & Avocado Poke",
            excerpt: "Hawaiian bowl with crisp vegetables and a soy-sesame dressing.",
            image: "images/salads/tuna-poke-card.webp",
            link: "en/recipes/salads/tuna-poke.html",
            badge: "20 min",
            meta: "Easy difficulty"
        },

        {
            title: "Cream Cheese & Red Caviar Tartlets",
            excerpt: "A classic festive appetizer with smooth cream cheese.",
            image: "images/salads/tartlets-caviar-card.webp",
            link: "en/recipes/salads/tartlets-caviar.html",
            badge: "5 min",
            meta: "Easy difficulty"
        },

        {
            title: "Korean Cheese Corn Dogs",
            excerpt: "Crispy Asian street food: sausages and mozzarella in fluffy batter coated with panko breadcrumbs.",
            image: "images/salads/korean-corn-dogs-card.webp",
            link: "en/recipes/salads/korean-corn-dogs.html",
            badge: "25 min",
            meta: "Medium difficulty"
        },

        {
            title: "Margherita Pizza: A Homemade Classic",
            excerpt: "Making authentic Neapolitan-style pizza in a regular oven: dough secrets and crisp crusts.",
            image: "images/baking/margherita-recipe-card.webp",
            link: "en/recipes/baking/margherita-recipe.html",
            badge: "2 hours",
            meta: "Medium difficulty"
        },

        {
            title: "Fruit Cloud: Sugar-Free Dessert",
            excerpt: "A light, eye-catching dessert in a glass with no flour or white sugar.",
            image: "images/desserts/fruit-cloud-card.webp",
            link: "en/recipes/desserts/fruit-cloud.html",
            badge: "10 min",
            meta: "Easy difficulty"
        },

        {
            title: "Green Elixir",
            excerpt: "A reset button after heavy feasts. A velvety, wholesome smoothie in just 5 minutes.",
            image: "images/drinks/smoothie-card.webp",
            link: "en/recipes/drinks/smoothie.html",
            badge: "5 min",
            meta: "Easy difficulty"
        },

        {
            title: "Egg Yolk Confit on Crispy Toast",
            excerpt: "A restaurant delicacy at home: silky texture for a special morning.",
            image: "images/health-and-diet/yolk-confit-toast-card.webp",
            link: "en/recipes/health-and-diet/yolk-confit-toast.html",
            badge: "55 min",
            meta: "Easy difficulty"
        },

        {
            title: "Pasta with Creamy Tomato Sauce",
            excerpt: "The ideal balance of cream and bright tomatoes. That unmistakable 'just like in Italy' flavor!",
            image: "images/hot-dishes/creamy-tomato-pasta-card.webp",
            link: "en/recipes/hot-dishes/creamy-tomato-pasta.html",
            badge: "20 min",
            meta: "Easy difficulty"
        },

        {
            title: "Mediterranean-Style Warm Salad",
            excerpt: "Restaurant aesthetics from simple seasonal ingredients.",
            image: "images/salads/mediterranean-warm-salad-card.webp",
            link: "en/recipes/salads/mediterranean-warm-salad.html",
            badge: "30 min",
            meta: "Easy difficulty"
        },

        {
            title: "Salmon & Avocado Salad",
            excerpt: "A refined trending hit. Fresh, festive, and holds its shape just like at a restaurant.",
            image: "images/salads/salmon-avocado-salad-card.webp",
            link: "en/recipes/salads/salmon-avocado-salad.html",
            badge: "15 min",
            meta: "Easy difficulty"
        },

        {
            title: "Avocado & Lemon Toast",
            excerpt: "That quintessential 'Instagrammable' breakfast ready in minutes.",
            image: "images/salads/avocado-lemon-toast-card.webp",
            link: "en/recipes/salads/avocado-lemon-toast.html",
            badge: "10 min",
            meta: "Easy difficulty"
        },

        {
            title: "Top 3 Sauces of Modern Western Gastronomy",
            excerpt: "Velvety hollandaise, classic vinaigrette, and yogurt dip: the gold standard for your kitchen.",
            image: "images/sauces/top-3-sauces-card.webp",
            link: "en/recipes/sauces/top-3-sauces-recipe.html",
            badge: "5 min",
            meta: "Easy difficulty"
        }    
    ];

    function initSearch() {
        const isSearchPage = window.location.pathname.includes('search.html');
        const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');
        const currentLang = isEn ? 'en' : 'ru';
        const searchPagePath = isEn ? '/gastronomy-studio/en/search.html' : '/gastronomy-studio/search.html';

        function getActiveInputs() {
            return document.querySelectorAll('#pageSearchInput, #mobileSearchInput, #headerSearchInput, .search-input, .mobile-search-input, input[name="q"]');
        }

        function syncInputs(val) {
            getActiveInputs().forEach(input => {
                if (input.value !== val) input.value = val;
            });
        }

        function performSearch(rawQuery) {
            const grid = document.getElementById('searchResultsGrid');
            if (!grid) return;

            const queryTitleEl = document.getElementById('searchQueryTitle');
            const countEl = document.getElementById('searchCount');
            const noResultsEl = document.getElementById('noResults');

            const query = rawQuery.trim().toLowerCase();
            const searchTitleContainer = queryTitleEl ? queryTitleEl.closest('.page-title') : null;
            const countContainer = countEl ? (countEl.closest('.search-count-container') || countEl.parentElement) : null;

            // Убрано ограничение на мин. кол-во символов: теперь поиск работает сразу
            if (!query) {
                if (searchTitleContainer) searchTitleContainer.style.display = 'none';
                if (countContainer) countContainer.style.display = 'none';
                grid.style.display = 'none';
                if (noResultsEl) noResultsEl.style.display = 'none';
                return;
            }

            if (searchTitleContainer) searchTitleContainer.style.display = 'block';
            if (countContainer) countContainer.style.display = 'block';

            if (queryTitleEl) {
                queryTitleEl.textContent = `«${rawQuery}»`;
            }

const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');
            const currentLang = isEn ? 'en' : 'ru';
            const searchPageUrl = isEn ? '/gastronomy-studio/en/search.html' : '/gastronomy-studio/search.html';

            const filteredResults = SITE_DATABASE.filter(item => {
                const itemLang = item.lang || (item.link.startsWith('en/') ? 'en' : 'ru');
                return itemLang === currentLang && item.title.toLowerCase().includes(query);
            });

            if (countEl) {
                countEl.textContent = filteredResults.length;
            }

            if (filteredResults.length === 0) {
                grid.style.display = 'none';
                if (noResultsEl) noResultsEl.style.display = 'block';
            } else {
                if (noResultsEl) noResultsEl.style.display = 'none';
                grid.style.display = 'grid';

                grid.innerHTML = filteredResults.map(item => {
                    const normalizedLink = isEn && !item.link.startsWith('en/') ? `en/${item.link}` : item.link;
                    return `
<article class="recipe-card" data-category="${item.category}">
    <div class="recipe-thumb">
        <img src="/gastronomy-studio/${item.image}" alt="${item.title}" loading="lazy">
        <button class="fav-btn" aria-label="${isEn ? 'Save' : 'Сохранить'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
        </button>
        <div class="recipe-badge">${item.badge}</div>
    </div>
    <div class="recipe-content">
        <div class="recipe-meta">
            <span class="recipe-level">${item.meta}</span>
        </div>
        <h3 class="recipe-card-title">
            <a href="/gastronomy-studio/${normalizedLink}">${item.title}</a>
        </h3>
        <p class="recipe-excerpt">${item.excerpt}</p>
    </div>
</article>
                    `;
                }).join('');
            }
        }

        function toggleClearBtn() {
            const clearBtn = document.getElementById('clearSearchBtn') || document.querySelector('.clear-search-btn');
            if (!clearBtn) return;
            
            const inputs = getActiveInputs();
            const activeInput = inputs.length > 0 ? inputs[0] : null;
            if (activeInput) {
                const val = activeInput.value.trim();
                clearBtn.style.display = val.length > 0 ? 'block' : 'none';
            }
        }

        if (isSearchPage) {
            const urlParams = new URLSearchParams(window.location.search);
            const initialQuery = urlParams.get('q');
            
            const navEntries = performance.getEntriesByType("navigation");
            const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

            if (isReload) {
                window.history.replaceState({}, '', window.location.pathname);
                syncInputs('');
                performSearch('');
                toggleClearBtn();
            } else if (initialQuery) {
                syncInputs(initialQuery);
                performSearch(initialQuery);
                toggleClearBtn();
            } else {
                syncInputs('');
                performSearch('');
                toggleClearBtn();
            }
        }
    }

    // Запускаем при загрузке и при возвращении из кэша (bfcache)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            initSearch();
        }
    });

    // Глобальные обработчики событий (вешаются один раз на document)
    if (!window._searchListenersInitialized) {
        window._searchListenersInitialized = true;

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.matches('input[name="q"], .mobile-search-input, .search-input')) {
                e.preventDefault();
                const val = e.target.value.trim();
                const isSearchPage = window.location.pathname.includes('search.html');
                const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');
                const targetSearchUrl = isEn ? '/gastronomy-studio/en/search.html' : '/gastronomy-studio/search.html';
                
                if (val) {
                    if (!isSearchPage) {
                        window.location.href = `${targetSearchUrl}?q=${encodeURIComponent(val)}`;
                    } else {
                        document.querySelectorAll('#pageSearchInput, #mobileSearchInput, #headerSearchInput, .search-input, .mobile-search-input, input[name="q"]').forEach(el => el.value = val);
                        const grid = document.getElementById('searchResultsGrid');
                        if (grid) {
                            window.location.href = `${window.location.pathname}?q=${encodeURIComponent(val)}`;
                        }
                    }
                }
            }
        });

        document.addEventListener('submit', (e) => {
            const form = e.target.closest('form');
            if (form && form.querySelector('input[name="q"]')) {
                const input = form.querySelector('input[name="q"]');
                const val = input ? input.value.trim() : '';
                const isSearchPage = window.location.pathname.includes('search.html');
                const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');
                const targetSearchUrl = isEn ? '/gastronomy-studio/en/search.html' : '/gastronomy-studio/search.html';
                
                if (val) {
                    e.preventDefault();
                    if (!isSearchPage) {
                        window.location.href = `${targetSearchUrl}?q=${encodeURIComponent(val)}`;
                    }
                }
            }
        });

        document.addEventListener('click', (e) => {
            const clearBtn = e.target.closest('#clearSearchBtn, .clear-search-btn');
            if (clearBtn) {
                e.preventDefault();
                const isSearchPage = window.location.pathname.includes('search.html');
                document.querySelectorAll('#pageSearchInput, #mobileSearchInput, #headerSearchInput, .search-input, .mobile-search-input, input[name="q"]').forEach(input => {
                    input.value = '';
                });
                clearBtn.style.display = 'none';
                
                if (isSearchPage) {
                    const grid = document.getElementById('searchResultsGrid');
                    const queryTitleEl = document.getElementById('searchQueryTitle');
                    const countEl = document.getElementById('searchCount');
                    const searchTitleContainer = queryTitleEl ? queryTitleEl.closest('.page-title') : null;
                    const countContainer = countEl ? (countEl.closest('.search-count-container') || countEl.parentElement) : null;

                    if (searchTitleContainer) searchTitleContainer.style.display = 'none';
                    if (countContainer) countContainer.style.display = 'none';
                    if (grid) grid.style.display = 'none';
                    
                    window.history.pushState({}, '', window.location.pathname);
                }
            }
        });
    }
})();
