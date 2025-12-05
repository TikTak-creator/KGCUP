document.addEventListener('DOMContentLoaded', () => {

    // --- ПЕРЕМЕННЫЕ СОСТОЯНИЯ ---
    let currentLang = 'ru'; // 'ru' или 'en'

    // --- 1. БАЗА ДАННЫХ ИГР (RU / EN) ---
    const gamesDB = {
        "league of legend": {
            img: "league-of-legends.png",
            title: "League of Legends",
            desc_ru: "Командная стратегическая игра, где две команды из пяти чемпионов сражаются, пытаясь уничтожить базу противника.",
            desc_en: "A team-based strategy game where two teams of five powerful champions face off to destroy the other's base."
        },
        "counter strike": {
            img: "image 5.png",
            title: "Counter-Strike 2",
            desc_ru: "Элитный соревновательный шутер. Легендарный геймплей, новые механики дыма и обновленные карты.",
            desc_en: "The premier competitive shooter. Legendary gameplay, new smoke mechanics, and updated maps."
        },
        "counter-strike 2": {
            img: "image 5.png",
            title: "Counter-Strike 2",
            desc_ru: "Элитный соревновательный шутер. Легендарный геймплей.",
            desc_en: "The premier competitive shooter. Legendary gameplay."
        },
        "valorant": {
            img: "image 6.png",
            title: "VALORANT",
            desc_ru: "Тактический шутер от первого лица 5 на 5. У вас есть 13 раундов для атаки и защиты.",
            desc_en: "A 5v5 character-based tactical shooter. You have 13 rounds to attack and defend."
        },
        "team fight": {
            img: "image 7.png",
            title: "Teamfight Tactics",
            desc_ru: "PvP-автобатлер от создателей League of Legends. Собирайте армию любимых чемпионов.",
            desc_en: "A PvP auto-battler from the creators of League of Legends. Build an army of your favorite champions."
        },
        "apex legend": {
            img: "image 8 .png",
            title: "Apex Legends",
            desc_ru: "Королевская битва нового поколения. Освойте легендарных персонажей с мощными способностями.",
            desc_en: "The next evolution of Battle Royale. Master legendary characters with powerful abilities."
        },
        "fortnite": {
            img: "image 9.png",
            title: "Fortnite",
            desc_ru: "Стройте, сражайтесь и создавайте. Станьте последним выжившим в Королевской битве.",
            desc_en: "Build, battle, and create. Be the last one standing in Battle Royale."
        },
        "escape from tarkov": {
            img: "image 11.png",
            title: "ESCAPE FROM TARKOV",
            desc_ru: "Захватывающее приключение в новом мире. Исследуйте неизведанные территории.",
            desc_en: "An exciting adventure in a new world. Explore uncharted territories."
        },
        "destiny 2": {
            img: "image 10.png",
            title: "Destiny 2",
            desc_ru: "Масштабный MMO-шутер. Исследуйте тайны Солнечной системы.",
            desc_en: "An action MMO. Explore the mysteries of the solar system."
        }
    };

    // --- 2. БАЗА ДАННЫХ ИНФО-СТРАНИЦ (RU / EN) ---
    const infoPagesDB = {
        "about": {
            title_ru: "О нас",
            text_ru: "<p>KGCUP — это ведущая платформа для киберспортивных турниров в СНГ. Мы объединяем игроков всех уровней, от новичков до профессионалов.</p><p>Наша миссия — сделать киберспорт доступным для каждого, предоставляя честный матчмейкинг и качественные серверы.</p>",
            title_en: "About Us",
            text_en: "<p>KGCUP is the leading platform for esports tournaments in the CIS region. We unite players of all levels, from beginners to professionals.</p><p>Our mission is to make esports accessible to everyone by providing fair matchmaking and high-quality servers.</p>"
        },
        "partnership": {
            title_ru: "Партнерство",
            text_ru: "<p>Мы всегда открыты для сотрудничества с брендами, стримерами и организаторами турниров.</p><p>Напишите нам на partners@kgcup.com для обсуждения возможностей интеграции.</p>",
            title_en: "Partnership",
            text_en: "<p>We are always open to collaboration with brands, streamers, and tournament organizers.</p><p>Contact us at partners@kgcup.com to discuss integration opportunities.</p>"
        },
        "careers": {
            title_ru: "Карьера",
            text_ru: "<p>Ищете работу в геймдеве или киберспорте? Присоединяйтесь к нашей команде!</p><p>Открытые вакансии: Frontend Developer, Tournament Admin, UI/UX Designer.</p>",
            title_en: "Careers",
            text_en: "<p>Looking for a job in gamedev or esports? Join our team!</p><p>Open positions: Frontend Developer, Tournament Admin, UI/UX Designer.</p>"
        },
        "branding": {
            title_ru: "Брендинг",
            text_ru: "<p>Здесь вы можете скачать наш логотип, шрифты и гайдлайны по использованию бренда KGCUP.</p>",
            title_en: "Branding",
            text_en: "<p>Here you can download our logo, fonts, and guidelines for using the KGCUP brand.</p>"
        },
        "faq": {
            title_ru: "FAQ",
            text_ru: "<p><strong>Как начать играть?</strong><br>Просто нажмите кнопку 'Установить' и зарегистрируйтесь.</p><p><strong>Это бесплатно?</strong><br>Да, участие в большинстве турниров бесплатно.</p>",
            title_en: "FAQ",
            text_en: "<p><strong>How to start playing?</strong><br>Just click the 'Install' button and register.</p><p><strong>Is it free?</strong><br>Yes, participation in most tournaments is free.</p>"
        }
    };

    // --- 3. СЛОВАРЬ ПЕРЕВОДОВ ИНТЕРФЕЙСА ---
    const i18n = {
        "ru": {
            "signin": "Вход",
            "hero_title": "Бесплатный матчмейкинг, турниры игр",
            "install": "Установить",
            "stat_number_1": "240 миллионов+",
            "stat_label_1": "Игроков",
            "stat_number_2": "2 миллиарда+",
            "stat_label_2": "Сыграных матчей",
            "stat_label_3": "Доступно",
            "players": "Игроков",
            "matches": "Сыграных матчей",
            "available": "Доступно",
            "avail_games": "Доступные игры",
            "sort": "Сортировка по популярности",
            "company": "Компания",
            "about": "О нас",
            "partnership": "Партнерство",
            "careers": "Карьера",
            "branding": "Брендинг",
            "faq": "FAQ",
            "socials": "Соц. сети",
            "created": "Создано с любовью",
            "rules": "Правила",
            "privacy": "Политика конфидециальности",
            "play_btn": "Начать играть",
            "search_ph": "Поиск"
        },
        "en": {
            "signin": "Sign In",
            "hero_title": "Free matchmaking, game tournaments",
            "install": "Install",
            "stat_number_1": "240 millions+",
            "stat_label_1": "players",
            "stat_number_2": "2 Billions+",
            "stat_label_2": "played matches",
            "stat_label_3": "available",
            "players": "Players",
            "matches": "Matches played",
            "available": "Available",
            "avail_games": "Available Games",
            "sort": "Sort by popularity",
            "company": "Company",
            "about": "About Us",
            "partnership": "Partnership",
            "careers": "Careers",
            "branding": "Branding",
            "faq": "FAQ",
            "socials": "Socials",
            "created": "Created with love",
            "rules": "Rules",
            "privacy": "Privacy Policy",
            "play_btn": "Play Now",
            "search_ph": "Search"
        }
    };

    // --- ЭЛЕМЕНТЫ DOM ---
    const langBtn = document.getElementById('langBtn');
    const searchInput = document.getElementById('searchInput') || document.querySelector('.search-bar input');

    // Модалка ИГР
    const gameModal = document.getElementById('gameModal');
    const closeGameModal = document.getElementById('closeGameModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalImage = document.getElementById('modalImage');
    const modalBtnText = document.getElementById('modalBtnText');

    // Модалка ИНФО
    const infoModal = document.getElementById('infoModal');
    const closeInfoModal = document.getElementById('closeInfoModal');
    const infoTitle = document.getElementById('infoTitle');
    const infoText = document.getElementById('infoText');

    // --- ФУНКЦИИ ЛОГИКИ ---

    // 1. Переключение языка
    const switchLanguage = () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';

        // Меняем текст кнопки языка
        langBtn.textContent = currentLang === 'ru' ? 'Русский' : 'English';

        // Меняем тексты по data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[currentLang][key]) {
                el.textContent = i18n[currentLang][key];
            }
        });

        // Меняем плейсхолдер поиска
        if (searchInput) {
            searchInput.placeholder = i18n[currentLang]["search_ph"];
        }
    };

    // Слушатель на кнопку языка
    if(langBtn) {
        langBtn.style.cursor = 'pointer';
        langBtn.addEventListener('click', switchLanguage);
    }

    // 2. Открытие Модалки ИГР
    const openGameModal = (gameKey) => {
        if (!gameKey) return;
        const key = gameKey.toLowerCase().trim();
        let data = gamesDB[key];

        // Поиск по частичному совпадению
        if (!data) {
             const foundKey = Object.keys(gamesDB).find(k => k.includes(key) || key.includes(k));
             if(foundKey) data = gamesDB[foundKey];
        }

        if (data) {
            modalTitle.textContent = data.title;
            // Выбираем описание в зависимости от языка
            modalDesc.textContent = currentLang === 'ru' ? data.desc_ru : data.desc_en;
            modalImage.src = data.img;
            modalBtnText.textContent = i18n[currentLang]["play_btn"];

            gameModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // 3. Открытие Модалки ИНФО (Вторая страница)
    const openInfoModal = (pageKey) => {
        const data = infoPagesDB[pageKey];
        if (data) {
            infoTitle.textContent = currentLang === 'ru' ? data.title_ru : data.title_en;
            infoText.innerHTML = currentLang === 'ru' ? data.text_ru : data.text_en;

            infoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    // 4. Закрытие модалок
    const closeModals = () => {
        gameModal.classList.remove('active');
        infoModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Слушатели закрытия
    if(closeGameModal) closeGameModal.addEventListener('click', closeModals);
    if(closeInfoModal) closeInfoModal.addEventListener('click', closeModals);

    // Закрытие по клику на фон
    [gameModal, infoModal].forEach(modal => {
        if(modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModals();
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModals();
    });

    // --- СЛУШАТЕЛИ КЛИКОВ НА САЙТЕ ---

    // Клик по карточкам игр
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.game-title').textContent;
            openGameModal(title);
        });
    });

    // Клик по навигации (Игры)
    document.querySelectorAll('.nav-item-top, .footer-column:last-child ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openGameModal(link.textContent);
        });
    });

    // Клик по Инфо-страницам (Футер) - НОВОЕ
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            openInfoModal(page);
        });
    });

    // --- ПОИСК (ОБНОВЛЕННЫЙ) ---
    const searchResults = document.getElementById('searchResults') || (() => {
        const div = document.createElement('div');
        div.id = 'searchResults';
        div.className = 'search-results';
        searchInput.parentNode.appendChild(div);
        return div;
    })();

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (query.length < 2) {
                searchResults.classList.remove('active');
                return;
            }

            const matches = Object.keys(gamesDB).filter(key => {
                return key.includes(query) || gamesDB[key].title.toLowerCase().includes(query);
            });

            if (matches.length > 0) {
                matches.forEach(key => {
                    const game = gamesDB[key];
                    const item = document.createElement('div');
                    item.className = 'search-item';
                    item.innerHTML = `
                        <img src="${game.img}" alt="${game.title}">
                        <span>${game.title}</span>
                    `;
                    item.addEventListener('click', () => {
                        openGameModal(key);
                        searchInput.value = '';
                        searchResults.classList.remove('active');
                    });
                    searchResults.appendChild(item);
                });
                searchResults.classList.add('active');
            } else {
                searchResults.classList.remove('active');
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove('active');
            }
        });
    }

    // --- АНИМАЦИИ (Остаются без изменений) ---
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateValue = (obj, start, end, duration, suffix) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
            if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
    };
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const match = text.match(/\d+/);
                if (match) {
                    const num = parseInt(match[0]);
                    const suf = text.replace(match[0], '');
                    animateValue(entry.target, 0, num, 2000, suf);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    statNumbers.forEach(stat => statsObserver.observe(stat));

    // Tilt Effect
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xRot = -((y - rect.height/2)/rect.height * 15);
            const yRot = ((x - rect.width/2)/rect.width * 15);
            card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
            card.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
            card.style.zIndex = '1';
        });
    });

    // Scroll Reveal
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});
    document.querySelectorAll('.game-card').forEach((card, i) => {
        card.classList.add('scroll-hidden');
        card.style.transitionDelay = `${i*100}ms`;
        scrollObserver.observe(card);
    });

    // Hero Reveal
    const heroEls = document.querySelectorAll('.hero-title, .stats-group, .download-button-hero');
    heroEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * (i+1));
    });
});
