(function(){
  var KEY='portal_lang';
  var LANGS=['ru','uk','en'];
  var current=localStorage.getItem(KEY);
  if(!LANGS.includes(current)) current='ru';

  var gameText={
    sandbox:{ru:['Песочница','Физика, рисование, объекты'],uk:['Пісочниця','Фізика, малювання, об’єкти'],en:['Sandbox','Physics, drawing, objects']},
    sandboxels:{ru:['Sandboxels','Симулятор 25+ стихий и частиц'],uk:['Sandboxels','Симулятор 25+ стихій і частинок'],en:['Sandboxels','25+ elements and particles simulator']},
    bubblepop:{ru:['Шарики POP','Стреляй и лопай шарики!'],uk:['Кульки POP','Стріляй і лускай кульки!'],en:['Bubble POP','Shoot and pop bubbles!']},
    flappy:{ru:['Flappy Bird','Летай между трубами!'],uk:['Flappy Bird','Літай між трубами!'],en:['Flappy Bird','Fly between pipes!']},
    snake:{ru:['Змейка','Ешь яблоки и расти!'],uk:['Змійка','Їж яблука та рости!'],en:['Snake','Eat apples and grow!']},
    pacman:{ru:['Pac-Man','Собери точки и убегай от призраков!'],uk:['Pac-Man','Збирай точки та тікай від привидів!'],en:['Pac-Man','Collect dots and escape ghosts!']},
    tetris:{ru:['Тетрис','Падающие блоки, очки и ускорение'],uk:['Тетріс','Падаючі блоки, очки та прискорення'],en:['Tetris','Falling blocks, score, and speed']},
    arkanoid:{ru:['Арканоид','Отбивай шарик и ломай блоки'],uk:['Арканоїд','Відбивай кульку та ламай блоки'],en:['Arkanoid','Bounce the ball and break blocks']},
    memory:{ru:['Memory','Открой пары одинаковых карточек'],uk:['Memory','Відкрий пари однакових карток'],en:['Memory','Find matching card pairs']},
    tictactoe:{ru:['Крестики-нолики','Играй против компьютера или 1 на 1'],uk:['Хрестики-нулики','Грай проти комп’ютера або 1 на 1'],en:['Tic-Tac-Toe','Play versus the computer or 1v1']},
    minesweeper:{ru:['Сапёр','Найди все клетки без мин'],uk:['Сапер','Знайди всі клітинки без мін'],en:['Minesweeper','Find every safe cell']},
    maze:{ru:['Лабиринт','Ищи выход, собирай монеты и открывай уровни'],uk:['Лабіринт','Шукай вихід, збирай монети та відкривай рівні'],en:['Maze','Find the exit, collect coins, unlock levels']},
    pixelart:{ru:['Pixel Art','Рисуй пиксельные картинки'],uk:['Pixel Art','Малюй піксельні картинки'],en:['Pixel Art','Draw pixel pictures']},
    musicpad:{ru:['Музыка Pad','Создавай ритм и световое шоу'],uk:['Музика Pad','Створюй ритм і світлове шоу'],en:['Music Pad','Create beats and light shows']},
    cafesim:{ru:['Моё Кафе','Готовь заказы, следи за складом и развивай уютное кафе'],uk:['Моє Кафе','Готуй замовлення, стеж за складом і розвивай затишне кафе'],en:['My Cafe','Cook orders, manage stock, and grow a cozy cafe']},
    clicker:{ru:['Кликер','Покупай улучшения, миссии, престиж и офлайн-доход'],uk:['Клікер','Купуй покращення, місії, престиж і офлайн-дохід'],en:['Clicker','Buy upgrades, missions, prestige, and offline income']},
    farm:{ru:['Мини Ферма','Культуры, вода, животные, заказы и погода'],uk:['Міні Ферма','Культури, вода, тварини, замовлення і погода'],en:['Mini Farm','Crops, water, animals, orders, and weather']},
    citysim:{ru:['Мини Город','Строй районы, балансируй бюджет, энергию и счастье'],uk:['Міні Місто','Будуй райони, балансуй бюджет, енергію і щастя'],en:['Mini City','Build districts, balance budget, energy, and happiness']}
  };

  var ui={
    ru:{
      portalTitle:'🎮 ИГРОВОЙ ПОРТАЛ',portalSubtitle:'Выбери игру и играй!',footer:'Игровой Портал • Open Source • 2026',
      arcade:'🕹 Аркады',puzzle:'🧩 Головоломки',creative:'🎨 Творческие',sim:'☕ Симуляторы',custom:'✨ Пользовательские',
      home:'Главное меню',language:'Язык',
      citySub:'Развивай город: людям нужны дома, работа, энергия, парки и сервисы.',build:'Строительство',nextDay:'Следующий день',upgrade:'Улучшить выбранное',bulldoze:'Снести выбранное',
      day:'День',budget:'Бюджет',people:'Люди',jobs:'Работа',energy:'Энергия',happy:'Счастье',
      cityHelp:'Дом даёт жителей, офис даёт работу, электростанция даёт энергию, парк и больница поднимают счастье. Если энергии или работы мало, город теряет доход.',
      mazeLevel:'Уровень',coins:'Монеты',moves:'Ходы',nextLevel:'Следующий уровень',mazeHelp:'Собери монеты и найди зелёный выход.',
      cafeSub:'Сажай гостей, готовь заказы, следи за складом и прокачивай зал.',
      farmSub:'Выращивай культуры, поливай грядки, корми животных, закрывай заказы и развивай ферму.',
      clickerSub:'Кликай, строй бизнесы, закрывай миссии, уходи в престиж и соревнуйся с собой.',
      musicHint:'Нажимай плитки и делай ритм.',
      sandboxHint:'Выбирай элемент, рисуй на поле и смешивай стихии.'
    },
    uk:{
      portalTitle:'🎮 ІГРОВИЙ ПОРТАЛ',portalSubtitle:'Обери гру та грай!',footer:'Ігровий Портал • Open Source • 2026',
      arcade:'🕹 Аркади',puzzle:'🧩 Головоломки',creative:'🎨 Творчі',sim:'☕ Симулятори',custom:'✨ Користувацькі',
      home:'Головне меню',language:'Мова',
      citySub:'Розвивай місто: людям потрібні домівки, робота, енергія, парки та сервіси.',build:'Будівництво',nextDay:'Наступний день',upgrade:'Покращити вибране',bulldoze:'Знести вибране',
      day:'День',budget:'Бюджет',people:'Люди',jobs:'Робота',energy:'Енергія',happy:'Щастя',
      cityHelp:'Будинок дає жителів, офіс дає роботу, електростанція дає енергію, парк і лікарня піднімають щастя. Якщо енергії або роботи мало, місто втрачає дохід.',
      mazeLevel:'Рівень',coins:'Монети',moves:'Ходи',nextLevel:'Наступний рівень',mazeHelp:'Збери монети та знайди зелений вихід.',
      cafeSub:'Саджай гостей, готуй замовлення, стеж за складом і прокачуй зал.',
      farmSub:'Вирощуй культури, поливай грядки, годуй тварин, виконуй замовлення і розвивай ферму.',
      clickerSub:'Клікай, будуй бізнеси, виконуй місії, йди у престиж і змагайся із собою.',
      musicHint:'Натискай плитки та роби ритм.',
      sandboxHint:'Обирай елемент, малюй на полі та змішуй стихії.'
    },
    en:{
      portalTitle:'🎮 GAME PORTAL',portalSubtitle:'Choose a game and play!',footer:'Game Portal • Open Source • 2026',
      arcade:'🕹 Arcade',puzzle:'🧩 Puzzles',creative:'🎨 Creative',sim:'☕ Simulators',custom:'✨ Custom',
      home:'Main menu',language:'Language',
      citySub:'Grow your city: people need homes, jobs, energy, parks, and services.',build:'Construction',nextDay:'Next day',upgrade:'Upgrade selected',bulldoze:'Demolish selected',
      day:'Day',budget:'Budget',people:'People',jobs:'Jobs',energy:'Energy',happy:'Happiness',
      cityHelp:'Homes add people, offices add jobs, power plants add energy, parks and clinics raise happiness. If jobs or energy are low, the city loses income.',
      mazeLevel:'Level',coins:'Coins',moves:'Moves',nextLevel:'Next level',mazeHelp:'Collect coins and find the green exit.',
      cafeSub:'Seat guests, cook orders, manage stock, and upgrade the dining room.',
      farmSub:'Grow crops, water plots, feed animals, complete orders, and expand the farm.',
      clickerSub:'Click, build businesses, complete missions, prestige, and compete with yourself.',
      musicHint:'Tap pads and make a rhythm.',
      sandboxHint:'Pick an element, draw on the field, and mix reactions.'
    }
  };

  var phrases=[
    ['Главное меню','Головне меню','Main menu'],['Язык','Мова','Language'],['Кисть','Пензель','Brush'],['Очистить','Очистити','Clear'],['Пауза','Пауза','Pause'],['Старт','Старт','Start'],
    ['Старт / заново','Старт / заново','Start / restart'],['Играть','Грати','Play'],['Начать','Почати','Start'],['Заново','Заново','Restart'],['Сброс','Скинути','Reset'],['Выход','Вихід','Exit'],['Назад','Назад','Back'],
    ['Счёт','Рахунок','Score'],['Счет','Рахунок','Score'],['Очки','Очки','Points'],['Лучший','Найкращий','Best'],['Рекорд','Рекорд','Record'],['Уровень','Рівень','Level'],['Монеты','Монети','Coins'],['Ходы','Ходи','Moves'],
    ['Следующий уровень','Наступний рівень','Next level'],['Сначала найди выход','Спочатку знайди вихід','Find the exit first'],['Монета','Монета','Coin'],['Выход найден','Вихід знайдено','Exit found'],
    ['Строительство','Будівництво','Construction'],['Следующий день','Наступний день','Next day'],['Улучшить выбранное','Покращити вибране','Upgrade selected'],['Снести выбранное','Знести вибране','Demolish selected'],
    ['День','День','Day'],['Бюджет','Бюджет','Budget'],['Люди','Люди','People'],['Работа','Робота','Jobs'],['Энергия','Енергія','Energy'],['Счастье','Щастя','Happiness'],
    ['Дом','Будинок','House'],['Офис','Офіс','Office'],['Парк','Парк','Park'],['Больница','Лікарня','Clinic'],['Магазин','Магазин','Shop'],['Купить','Купити','Buy'],['Выбрать','Обрати','Select'],['Выбрано','Обрано','Selected'],
    ['Склад','Склад','Stock'],['Улучшения','Покращення','Upgrades'],['Кухня','Кухня','Kitchen'],['Очередь гостей','Черга гостей','Guest queue'],['Зал кафе','Зал кафе','Cafe hall'],['Цель смены','Ціль зміни','Shift goal'],
    ['Деньги','Гроші','Money'],['Семена','Насіння','Seeds'],['Урожай','Врожай','Harvest'],['Вода','Вода','Water'],['Погода','Погода','Weather'],['Заказы','Замовлення','Orders'],['Животные','Тварини','Animals'],
    ['Миссии','Місії','Missions'],['Престиж','Престиж','Prestige'],['Доход','Дохід','Income'],['Клик','Клік','Click'],['Кликер','Клікер','Clicker'],
    ['Против компьютера','Проти комп’ютера','Vs computer'],['1 на 1','1 на 1','1v1'],['Ход игрока','Хід гравця','Player turn'],['Победа','Перемога','Win'],['Победа!','Перемога!','You win!'],['Ничья','Нічия','Draw'],['Игра окончена','Гру закінчено','Game over'],
    ['Жди','Чекай','Wait'],['ЖМИ','ТИСНИ','TAP'],['Рано','Рано','Too early'],['Слишком рано','Занадто рано','Too early'],['Новая игра','Нова гра','New game'],['Управление','Керування','Controls'],
    ['Песок','Пісок','Sand'],['Снег','Сніг','Snow'],['Порох','Порох','Gunpowder'],['Соль','Сіль','Salt'],['Пепел','Попіл','Ash'],['Земля','Земля','Dirt'],
    ['Лава','Лава','Lava'],['Кислота','Кислота','Acid'],['Масло','Олія','Oil'],['Мёд','Мед','Honey'],['Огонь','Вогонь','Fire'],['Дым','Дим','Smoke'],['Пар','Пара','Steam'],['Токсичный газ','Токсичний газ','Toxic Gas'],
    ['Камень','Камінь','Stone'],['Дерево','Дерево','Wood'],['Металл','Метал','Metal'],['Стекло','Скло','Glass'],['Лёд','Лід','Ice'],['Обсидиан','Обсидіан','Obsidian'],['Кирпич','Цегла','Brick'],['Губка','Губка','Sponge'],
    ['Клон','Клон','Clone'],['Вирус','Вірус','Virus'],['Растение','Рослина','Plant'],['Пустота','Порожнеча','Void'],['Все элементы','Усі елементи','All elements'],['Порошки','Порошки','Powders'],['Жидкости','Рідини','Liquids'],['Газы','Гази','Gases'],['Твёрдые','Тверді','Solids'],['Особые','Особливі','Special'],['Поиск элемента','Пошук елемента','Search element'],
    ['Стрелки или кнопки на экране. Ешь яблоки и не врезайся.','Стрілки або кнопки на екрані. Їж яблука та не врізайся.','Use arrows or on-screen buttons. Eat apples and do not crash.'],
    ['Стрелки: движение, вверх: поворот, пробел: вниз до конца. Скорость растет с уровнем.','Стрілки: рух, вгору: поворот, пробіл: вниз до кінця. Швидкість росте з рівнем.','Arrows: move, up: rotate, space: hard drop. Speed grows with level.']
  ];

  phrases=phrases.concat([
    ['Жизни','Життя','Lives'],['Жизни:','Життя:','Lives:'],['рейтинг','рейтинг','rating'],['гостей','гостей','guests'],['комбо','комбо','combo'],['ждут','чекають','waiting'],
    ['Двигай платформу мышкой, пальцем или стрелками. Разбей все блоки.','Рухай платформу мишкою, пальцем або стрілками. Розбий усі блоки.','Move the paddle with mouse, finger, or arrows. Break all blocks.'],
    ['Собери все точки и избегай призраков.','Збери всі точки та уникай привидів.','Collect all dots and avoid ghosts.'],
    ['Открой клетки без мин','Відкрий клітинки без мін','Open cells without mines'],['Новое поле','Нове поле','New field'],['Запись','Запис','Record'],['Продолжить','Продовжити','Continue'],
    ['Нажми кнопку ниже или коснись экрана','Натисни кнопку нижче або торкнися екрана','Press the button below or tap the screen'],
    ['НАЧАТЬ','ПОЧАТИ','START'],['ПАУЗА','ПАУЗА','PAUSE'],['ПРОДОЛЖИТЬ','ПРОДОВЖИТИ','CONTINUE'],['ЗАНОВО','ЗАНОВО','RESTART'],['В МЕНЮ','У МЕНЮ','TO MENU'],['ОЙ-ОЙ!','ОЙ-ОЙ!','UH-OH!'],['СЧЕТ','РАХУНОК','SCORE'],['РЕКОРД','РЕКОРД','BEST'],['ИГРАТЬ СНОВА','ГРАТИ ЗНОВУ','PLAY AGAIN'],['ШАРИКИ POP!','КУЛЬКИ POP!','BUBBLE POP!'],['ИГРАТЬ','ГРАТИ','PLAY'],['GAME OVER','КІНЕЦЬ ГРИ','GAME OVER'],
    ['0 объектов','0 об’єктів','0 objects'],['объектов','об’єктів','objects'],['Выбери инструмент и нажми на экран!','Обери інструмент і натисни на екран!','Choose a tool and tap the screen!'],
    ['В режиме 1 на 1 игроки ходят по очереди на одном устройстве.','У режимі 1 на 1 гравці ходять по черзі на одному пристрої.','In 1v1 mode, players take turns on one device.'],['Ход X','Хід X','X turn'],['Ход O','Хід O','O turn'],
    ['Культуры','Культури','Crops'],['Заказ','Замовлення','Order'],['Сдать','Здати','Deliver'],['Новый','Новий','New'],['Улучшить ферму','Покращити ферму','Upgrade farm'],['Ферма проснулась.','Ферма прокинулась.','The farm woke up.'],
    ['Пшеница','Пшениця','Wheat'],['Кукуруза','Кукурудза','Corn'],['Ягоды','Ягоди','Berries'],['Куры','Кури','Chickens'],['Корова','Корова','Cow'],['Пчёлы','Бджоли','Bees'],
    ['Цена урожая','Ціна врожаю','Crop price'],['рост','ріст','growth'],['Доход каждый день','Дохід щодня','Daily income'],['цена','ціна','price'],['Нужно урожая','Потрібно врожаю','Harvest needed'],['Награда','Нагорода','Reward'],['погода','погода','weather'],['Нужны семена.','Потрібне насіння.','You need seeds.'],['Посажено','Посаджено','Planted'],['Грядка полита.','Грядку полито.','Plot watered.'],['Собран урожай','Зібрано врожай','Harvest collected'],['Еще растет. Если есть вода, нажми ещё раз для полива.','Ще росте. Якщо є вода, натисни ще раз для поливу.','Still growing. If you have water, tap again to water it.'],['Нужно 18 монет.','Потрібно 18 монет.','Need 18 coins.'],['Нужно 14 монет.','Потрібно 14 монет.','Need 14 coins.'],['Улучшение стоит','Покращення коштує','Upgrade costs'],['Ферма улучшена до уровня','Ферму покращено до рівня','Farm upgraded to level'],['Куплено','Куплено','Bought'],['Не хватает урожая для заказа.','Не вистачає врожаю для замовлення.','Not enough harvest for the order.'],['Заказ сдан','Замовлення здано','Order delivered'],['Новый день','Новий день','New day'],['Животные дали','Тварини дали','Animals gave'],['дождь','дощ','rain'],['жара','спека','heat'],['солнце','сонце','sun'],['Офлайн прошло дней','Офлайн минуло днів','Offline days passed'],
    ['Бизнес','Бізнес','Business'],['Рынок','Ринок','Market'],['Кликер Империя','Клікер Імперія','Clicker Empire'],['За клик','За клік','Per click'],['В секунду','За секунду','Per second'],['Империя готова к росту.','Імперія готова до росту.','The empire is ready to grow.'],['Сила клика','Сила кліку','Click power'],['Автокликер','Автоклікер','Auto clicker'],['Фабрика','Фабрика','Factory'],['Банк','Банк','Bank'],['Лаборатория','Лабораторія','Laboratory'],['Первые 100','Перші 100','First 100'],['Накопи 1 000','Накопич 1 000','Save 1,000'],['Империя 10 000','Імперія 10 000','Empire 10,000'],['Магнат 100 000','Магнат 100 000','Tycoon 100,000'],['Новый уровень','Новий рівень','New level'],['Для престижа нужно всего заработать 50 000.','Для престижу потрібно всього заробити 50 000.','Prestige requires 50,000 total earned.'],['Постоянный бонус вырос.','Постійний бонус виріс.','Permanent bonus increased.'],['Бонус можно брать раз в 12 часов.','Бонус можна брати раз на 12 годин.','Bonus can be claimed once every 12 hours.'],['Бонус получен.','Бонус отримано.','Bonus received.'],['Реклама подняла рынок до x','Реклама підняла ринок до x','Ads raised the market to x'],['Миссия выполнена','Місію виконано','Mission completed'],['награда','нагорода','reward'],['Множитель рынка','Множник ринку','Market multiplier'],['Увеличивает весь пассивный доход.','Збільшує весь пасивний дохід.','Increases all passive income.'],['Купить рекламу','Купити рекламу','Buy ads'],['Каждый престиж дает +25% ко всему доходу.','Кожен престиж дає +25% до всього доходу.','Each prestige gives +25% to all income.'],['Офлайн доход','Офлайн дохід','Offline income'],
    ['Смена','Зміна','Shift'],['Закупить','Закупити','Restock'],['Кафе открыто. Посади первого гостя за свободный столик.','Кафе відкрито. Посади першого гостя за вільний столик.','Cafe is open. Seat the first guest at a free table.'],['Кофе','Кава','Coffee'],['Латте','Лате','Latte'],['Торт','Торт','Cake'],['Круассан','Круасан','Croissant'],['Комбо','Комбо','Combo'],['Гость','Гість','Guest'],['Нет свободного столика. Купи еще стол или быстрее обслужи гостей.','Немає вільного столика. Купи ще стіл або швидше обслуговуй гостей.','No free table. Buy another table or serve guests faster.'],['сел(а) за столик и хочет','сів/сіла за столик і хоче','sat at a table and wants'],['Не хватает продуктов для заказа','Не вистачає продуктів для замовлення','Not enough ingredients for the order'],['Нажми "Закупить".','Натисни "Закупити".','Press "Restock".'],['Кухня готовит','Кухня готує','Kitchen is cooking'],['Смена выполнена! Бонус +35 монет. Новая цель выше.','Зміну виконано! Бонус +35 монет. Нова ціль вища.','Shift complete! Bonus +35 coins. New goal is higher.'],['Гость доволен.','Гість задоволений.','Guest is happy.'],['ушел без заказа. Рейтинг немного упал.','пішов без замовлення. Рейтинг трохи впав.','left without an order. Rating dropped a bit.'],['Для закупки нужно 38 монет.','Для закупівлі потрібно 38 монет.','Restock needs 38 coins.'],['Склад пополнен','Склад поповнено','Stock refilled'],['Новый столик','Новий столик','New table'],['Больше гостей можно посадить одновременно','Більше гостей можна посадити одночасно','Seat more guests at once'],['Быстрая кухня','Швидка кухня','Fast kitchen'],['Заказы готовятся быстрее','Замовлення готуються швидше','Orders cook faster'],['Уютный зал','Затишний зал','Cozy hall'],['Гости ждут дольше','Гості чекають довше','Guests wait longer'],['Красивое меню','Гарне меню','Beautiful menu'],['Больше чаевых за каждый заказ','Більше чайових за кожне замовлення','More tips for each order'],['Реклама','Реклама','Ads'],['Очередь становится больше','Черга стає більшою','Queue gets bigger'],['Это улучшение уже на максимуме.','Це покращення вже на максимумі.','This upgrade is already maxed.'],['Не хватает монет для улучшения.','Не вистачає монет для покращення.','Not enough coins for the upgrade.'],['Улучшение куплено','Покращення куплено','Upgrade bought'],['Сбросить прогресс кафе?','Скинути прогрес кафе?','Reset cafe progress?'],['Кафе начато заново.','Кафе почато заново.','Cafe restarted.'],['Гости скоро придут','Гості скоро прийдуть','Guests will arrive soon'],['хочет','хоче','wants'],['Столик свободен','Столик вільний','Table is free'],['Готовить','Готувати','Cook'],['Готовится...','Готується...','Cooking...'],['Подать','Подати','Serve'],['Убрать','Прибрати','Remove'],['ждет заказ','чекає замовлення','waiting for order'],['кухня готовит','кухня готує','kitchen cooking'],['можно подавать','можна подавати','ready to serve'],['заказ(а)','замовлень','orders'],['пусто','порожньо','empty'],['Кухня свободна','Кухня вільна','Kitchen is free'],['столик','столик','table'],['остаток на складе','залишок на складі','left in stock'],['Молоко','Молоко','Milk'],['Тесто','Тісто','Dough'],['Макс','Макс','Max'],['без продуктов','без продуктів','no ingredients'],
    ['Выбери здание и нажми на пустую клетку.','Обери будівлю та натисни на порожню клітинку.','Choose a building and tap an empty cell.'],['Не хватает бюджета на','Не вистачає бюджету на','Not enough budget for'],['Построено','Побудовано','Built'],['Сначала выбери здание.','Спочатку обери будівлю.','Choose a building first.'],['улучшено до ур.','покращено до рів.','upgraded to lvl'],['ур.','рів.','lvl'],['Здание снесено, часть денег вернулась.','Будівлю знесено, частину грошей повернено.','Building demolished, some money returned.'],['Городской фестиваль','Міський фестиваль','City festival'],['Перебои энергии','Перебої енергії','Power outages'],['Жители довольны','Жителі задоволені','Residents are happy'],['День прошёл спокойно.','День минув спокійно.','The day passed calmly.'],['Город вырос до уровня','Місто виросло до рівня','City grew to level'],['Бонус','Бонус','Bonus']
    ,['Твой ход: X','Твій хід: X','Your turn: X'],['Компьютер думает...','Комп’ютер думає...','Computer is thinking...'],['Ты выиграл!','Ти виграв!','You won!'],['Компьютер выиграл','Комп’ютер виграв','Computer won'],['Победил X!','Переміг X!','X won!'],['Победил O!','Переміг O!','O won!'],
    ['Звуков в записи','Звуків у записі','Sounds recorded'],['Запись включена','Запис увімкнено','Recording on'],['Запись выключена','Запис вимкнено','Recording off'],['Очищено','Очищено','Cleared'],
    ['Сменить пароль? Потребуется задать новый.','Змінити пароль? Потрібно буде задати новий.','Change password? You will need to set a new one.'],['Удалить эту игру?','Видалити цю гру?','Delete this game?'],['А ты знал? Flappy Bird создали за один вечер','А ти знав? Flappy Bird створили за один вечір','Did you know? Flappy Bird was made in one evening'],['Если игра лагает — это не баг, это фича!','Якщо гра лагає — це не баг, це фіча!','If the game lags, it is not a bug, it is a feature!'],['Рекорд мира в Flappy Bird: 999 очков. Можешь побить?','Світовий рекорд у Flappy Bird: 999 очок. Зможеш побити?','World record in Flappy Bird: 999 points. Can you beat it?'],['Песочница — лучшее место для экспериментов!','Пісочниця — найкраще місце для експериментів!','Sandbox is the best place for experiments!'],['Шарики POP — проверь свой глазомер!','Кульки POP — перевір свій окомір!','Bubble POP tests your aim!'],['очков','очок','points'],['Можешь побить?','Зможеш побити?','Can you beat it?']
  ]);

  phrases=phrases.concat([
    ['Админ-панель','Адмін-панель','Admin panel'],['Вход','Вхід','Login'],['Придумай пароль админа','Придумай пароль адміна','Create admin password'],['Пароль','Пароль','Password'],['Повтори пароль','Повтори пароль','Repeat password'],['Сохранить','Зберегти','Save'],['Войти','Увійти','Sign in'],['Неверный пароль!','Неправильний пароль!','Wrong password!'],
    ['Игры','Ігри','Games'],['Тролль','Троль','Troll'],['Стат','Стат','Stats'],['Сообщение','Повідомлення','Message'],['Тема','Тема','Theme'],['Инструменты','Інструменти','Tools'],['Добавить игру (для всех)','Додати гру (для всіх)','Add game for everyone'],['Управление играми','Керування іграми','Game management'],['Сменить пароль','Змінити пароль','Change password'],['Обновить игры','Оновити ігри','Refresh games'],['Экспорт игр JSON','Експорт ігор JSON','Export games JSON'],['Очистить добавленные игры','Очистити додані ігри','Clear added games'],
    ['Тролль по цели','Троль за ціллю','Targeted troll'],['Выбери все игры или конкретную игру, куда отправить эффект.','Обери всі ігри або конкретну гру, куди відправити ефект.','Choose all games or a specific game to receive the effect.'],['Куда отправить','Куди відправити','Send to'],['Все игры и главная','Усі ігри та головна','All games and home'],['Перевернуть','Перевернути','Flip'],['Матрица','Матриця','Matrix'],['Дискотека','Дискотека','Disco'],['Фейк-вирус','Фейк-вірус','Fake virus'],['Землетрясение','Землетрус','Shake'],['Конфетти','Конфеті','Confetti'],['Убегающие','Тікаючі','Runaway'],['Радуга','Веселка','Rainbow'],['Гравитация','Гравітація','Gravity'],['Блюр','Блюр','Blur'],['Пульс-зум','Пульс-зум','Pulse zoom'],['Призрак','Привид','Ghost'],['Глитч','Глітч','Glitch'],['Снег','Сніг','Snow'],['Пузыри','Бульбашки','Bubbles'],['Темнота','Темрява','Darkout'],['Курсор','Курсор','Cursor'],['Хакер','Хакер','Hacker'],['Эмодзи-дождь','Емодзі-дощ','Emoji rain'],['Большой текст','Великий текст','Big text'],['Текст вверх ногами','Текст догори дриґом','Upside-down text'],['Замедление','Уповільнення','Slow motion'],['Безумный масштаб','Божевільний масштаб','Crazy scale'],['Инверсия','Інверсія','Invert'],['Сброс всем','Скинути всім','Reset for all'],
    ['Статистика','Статистика','Statistics'],['Посещений','Відвідувань','Visits'],['Онлайн сейчас','Онлайн зараз','Online now'],['Последние тролли','Останні тролі','Recent trolls'],['Обновить','Оновити','Refresh'],['Очистить лог троллей','Очистити лог тролів','Clear troll log'],['Сообщение всем','Повідомлення всім','Message everyone'],['Текст сообщения','Текст повідомлення','Message text'],['Отправить всем','Надіслати всім','Send to everyone'],['Новая игра','Нова гра','New game'],['Обновить страницу','Оновити сторінку','Refresh page'],['Убрать сообщение','Прибрати повідомлення','Remove message'],['Тема для всех','Тема для всіх','Theme for everyone'],['Меняет цветовую схему у всех посетителей','Змінює колірну схему у всіх відвідувачів','Changes the color theme for all visitors'],['Тёмная (по умолчанию)','Темна (за замовчуванням)','Dark (default)'],['Неон','Неон','Neon'],['Ретро','Ретро','Retro'],['Обновить статистику','Оновити статистику','Refresh statistics'],['Сбросить эффекты всем','Скинути ефекти всім','Reset effects for everyone'],
    ['Пароль уже задан! Введи существующий пароль.','Пароль уже задано! Введи наявний пароль.','Password is already set. Enter the existing password.'],['Удалить все добавленные через админку игры? Встроенные игры останутся.','Видалити всі ігри, додані через адмінку? Вбудовані ігри залишаться.','Delete all games added through admin? Built-in games will stay.'],['Сообщение отправлено всем!','Повідомлення надіслано всім!','Message sent to everyone!'],['Сообщение очищено.','Повідомлення очищено.','Message cleared.'],
    ['FLAPPY NATURE','FLAPPY NATURE','FLAPPY NATURE'],['СЧЕТ:','РАХУНОК:','SCORE:'],['РЕКОРД:','РЕКОРД:','BEST:'],['Счет:','Рахунок:','Score:'],['Жизни:','Життя:','Lives:'],['Ходы:','Ходи:','Moves:'],['Разбей все блоки.','Розбий усі блоки.','Break all blocks.']
  ]);

  var cp1251='\u0402\u0403\u201A\u0453\u201E\u2026\u2020\u2021\u20AC\u2030\u0409\u2039\u040A\u040C\u040B\u040F\u0452\u2018\u2019\u201C\u201D\u2022\u2013\u2014\u0098\u2122\u0459\u203A\u045A\u045C\u045B\u045F\u00A0\u040E\u045E\u0408\u00A4\u0490\u00A6\u00A7\u0401\u00A9\u0404\u00AB\u00AC\u00AD\u00AE\u0407\u00B0\u00B1\u0406\u0456\u0491\u00B5\u00B6\u00B7\u0451\u2116\u0454\u00BB\u0458\u0405\u0455\u0457\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E\u044F';
  function toMojibake(str){
    var bytes=typeof TextEncoder!=='undefined'?Array.from(new TextEncoder().encode(str)):[];
    if(!bytes.length){
      var raw=unescape(encodeURIComponent(str));
      for(var j=0;j<raw.length;j++)bytes.push(raw.charCodeAt(j));
    }
    var out='';
    bytes.forEach(function(b){out+=b<128?String.fromCharCode(b):cp1251[b-128]});
    return out;
  }

  function t(key){return (ui[current]&&ui[current][key])||ui.ru[key]||key}
  function game(id){return (gameText[id]&&gameText[id][current])||(gameText[id]&&gameText[id].ru)}
  function file(){return (location.pathname.split('/').pop()||'index.html').toLowerCase()}
  function setText(sel,text){var el=document.querySelector(sel);if(el&&text&&el.textContent!==text)el.textContent=text}
  function setAll(sel,values){document.querySelectorAll(sel).forEach(function(el,i){if(values[i]&&el.textContent!==values[i])el.textContent=values[i]})}

  var phraseMap=null;
  function buildPhraseMap(){
    if(phraseMap)return phraseMap;
    phraseMap={};
    function add(src,target){
      if(!src||!target)return;
      phraseMap[src]=target;
      var bad=toMojibake(src);
      if(bad!==src)phraseMap[bad]=target;
    }
    phrases.forEach(function(row){
      var target=row[LANGS.indexOf(current)];
      row.forEach(function(src){add(src,target)});
    });
    Object.keys(ui).forEach(function(lang){
      Object.keys(ui[lang]).forEach(function(key){add(ui[lang][key],t(key))});
    });
    Object.keys(gameText).forEach(function(id){
      LANGS.forEach(function(lang){
        var src=gameText[id][lang],dst=game(id);
        if(src&&dst){add(src[0],dst[0]);add(src[1],dst[1]);}
      });
    });
    return phraseMap;
  }

  function translateString(value){
    if(!value||!value.trim())return value;
    var map=buildPhraseMap();
    var trimmed=value.trim();
    if(map[trimmed])return value.replace(trimmed,map[trimmed]);
    var out=value;
    Object.keys(map).sort(function(a,b){return b.length-a.length}).forEach(function(src){
      if(src.length<3)return;
      if(out.indexOf(src)!==-1)out=out.split(src).join(map[src]);
    });
    return out;
  }

  function translateNodeText(root){
    root=root||document.body;
    if(!root)return;
    var skip={SCRIPT:1,STYLE:1,NOSCRIPT:1,CANVAS:1};
    var walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{
      acceptNode:function(node){
        var parent=node.parentElement;
        if(!parent||skip[parent.tagName]||parent.closest('[data-no-i18n]'))return NodeFilter.FILTER_REJECT;
        if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes=[],n;
    while((n=walker.nextNode()))nodes.push(n);
    nodes.forEach(function(node){
      var next=translateString(node.nodeValue);
      if(next!==node.nodeValue)node.nodeValue=next;
    });
    document.querySelectorAll('input,textarea,button,a,[title],[aria-label]').forEach(function(el){
      ['placeholder','title','aria-label','value'].forEach(function(attr){
        if(!el.hasAttribute(attr))return;
        if(attr==='value'&&el.tagName!=='INPUT'&&el.tagName!=='BUTTON')return;
        var val=el.getAttribute(attr),next=translateString(val);
        if(next!==val)el.setAttribute(attr,next);
      });
    });
  }

  function installSwitcherStyles(){
    if(document.getElementById('portal-lang-style'))return;
    var style=document.createElement('style');
    style.id='portal-lang-style';
    style.textContent=[
      '#portalLang{position:fixed;top:12px;right:12px;z-index:10070;display:grid;grid-template-columns:auto repeat(3,38px);gap:5px;align-items:center;background:rgba(0,0,0,.62);border:1px solid rgba(255,255,255,.24);border-radius:14px;padding:7px;color:#fff;font:800 11px Arial,sans-serif;backdrop-filter:blur(8px);box-shadow:0 8px 22px rgba(0,0,0,.25)}',
      '#portalLang span{white-space:nowrap;line-height:1}',
      '#portalLang button{width:38px;min-height:30px;border:0;border-radius:9px;font-weight:900;cursor:pointer;background:rgba(255,255,255,.16);color:#fff}',
      '#portalLang button.active{background:#feca57;color:#111}',
      '@media(max-width:620px){#portalLang{top:auto;right:10px;bottom:10px;grid-template-columns:repeat(3,40px);padding:6px}#portalLang span{grid-column:1/-1;text-align:center;font-size:10px}#portalLang button{width:40px;min-height:32px}}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function ensureSwitcher(){
    installSwitcherStyles();
    var wrap=document.getElementById('portalLang');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.id='portalLang';
      wrap.innerHTML='<span></span><button data-lang="ru">RU</button><button data-lang="uk">UK</button><button data-lang="en">EN</button>';
      document.body.appendChild(wrap);
      wrap.querySelectorAll('button').forEach(function(btn){
        btn.onclick=function(){localStorage.setItem(KEY,btn.dataset.lang);location.reload()};
      });
    }
    var label=wrap.querySelector('span');
    if(label&&label.textContent!==t('language'))label.textContent=t('language');
    wrap.querySelectorAll('button').forEach(function(btn){btn.classList.toggle('active',btn.dataset.lang===current)});
  }

  var canvasTranslatorInstalled=false,dialogTranslatorInstalled=false,domWriteTranslatorInstalled=false;
  function canTranslateNode(node){
    if(!node)return false;
    var el=node.nodeType===1?node:node.parentElement;
    if(!el)return true;
    if(el.tagName&&/^(SCRIPT|STYLE|NOSCRIPT|CANVAS)$/i.test(el.tagName))return false;
    return !el.closest||!el.closest('[data-no-i18n]');
  }

  function installDomWriteTranslator(){
    if(domWriteTranslatorInstalled)return;
    domWriteTranslatorInstalled=true;
    var textDesc=Object.getOwnPropertyDescriptor(Node.prototype,'textContent');
    if(textDesc&&textDesc.set&&textDesc.get){
      Object.defineProperty(Node.prototype,'textContent',{
        configurable:true,
        enumerable:textDesc.enumerable,
        get:function(){return textDesc.get.call(this)},
        set:function(value){
          if(typeof value==='string'&&canTranslateNode(this))value=translateString(value);
          return textDesc.set.call(this,value);
        }
      });
    }
    var htmlDesc=Object.getOwnPropertyDescriptor(Element.prototype,'innerHTML');
    if(htmlDesc&&htmlDesc.set&&htmlDesc.get){
      Object.defineProperty(Element.prototype,'innerHTML',{
        configurable:true,
        enumerable:htmlDesc.enumerable,
        get:function(){return htmlDesc.get.call(this)},
        set:function(value){
          htmlDesc.set.call(this,value);
          if(typeof value==='string'&&canTranslateNode(this))translateNodeText(this);
        }
      });
    }
  }

  function installCanvasTranslator(){
    if(canvasTranslatorInstalled||!window.CanvasRenderingContext2D)return;
    canvasTranslatorInstalled=true;
    ['fillText','strokeText'].forEach(function(name){
      var original=CanvasRenderingContext2D.prototype[name];
      if(!original)return;
      CanvasRenderingContext2D.prototype[name]=function(text){
        arguments[0]=translateString(String(text));
        return original.apply(this,arguments);
      };
    });
  }

  function installDialogTranslator(){
    if(dialogTranslatorInstalled)return;
    if(file()==='index.html'||file()==='')return;
    dialogTranslatorInstalled=true;
    ['alert','confirm','prompt'].forEach(function(name){
      var original=window[name];
      if(typeof original!=='function')return;
      window[name]=function(message){
        arguments[0]=translateString(String(message));
        return original.apply(window,arguments);
      };
    });
  }

  function translateIndex(){
    setText('.header h1',t('portalTitle'));
    setText('.header p',t('portalSubtitle'));
    var footer=document.querySelector('.footer');
    if(footer){
      var joke=footer.querySelector('#joke');
      footer.innerHTML='';
      if(joke)footer.appendChild(joke);
      footer.appendChild(document.createElement('br'));
      footer.appendChild(document.createTextNode(t('footer')));
    }
    window.PORTAL_LANG=current;
    window.PORTAL_T=function(key){return t(key)};
    window.PORTAL_GAME_TEXT=gameText;
    if(typeof DEFAULT_GAMES!=='undefined'){
      DEFAULT_GAMES.forEach(function(g){var tr=game(g.id);if(tr){g.name=tr[0];g.desc=tr[1]}});
      if(typeof CATEGORY_LABELS!=='undefined'){
        CATEGORY_LABELS.arcade=t('arcade');CATEGORY_LABELS.puzzle=t('puzzle');CATEGORY_LABELS.creative=t('creative');CATEGORY_LABELS.sim=t('sim');CATEGORY_LABELS.custom=t('custom');
      }
      if(typeof renderGames==='function')renderGames();
    }
  }

  function translateGame(){
    var f=file();
    var map={'city_sim.html':'citysim','maze.html':'maze','music_pad.html':'musicpad','cafe_sim.html':'cafesim','clicker.html':'clicker','farm.html':'farm','snake.html':'snake','pacman.html':'pacman','tetris.html':'tetris','arkanoid.html':'arkanoid','memory.html':'memory','minesweeper.html':'minesweeper','tic_tac_toe.html':'tictactoe','pixel_art.html':'pixelart','sandbox.html':'sandbox','sandboxels.html':'sandboxels','new_game.html':'bubblepop','flappy_bird.html':'flappy'};
    var id=map[f],tr=game(id);
    document.querySelectorAll('.portal-home-btn').forEach(function(a){a.textContent=t('home')});
    if(tr){
      document.title=tr[0];
      var h=document.querySelector('h1');
      if(h)h.textContent=h.textContent.replace(/[A-Za-zА-Яа-яІіЇїЄєҐґ][\s\S]*$/,tr[0]);
    }
    if(f==='city_sim.html'){
      setText('.sub',t('citySub'));setText('aside h3',t('build'));setText('button[onclick="nextDay()"]',t('nextDay'));setText('button[onclick="upgradeSelected()"]',t('upgrade'));setText('button[onclick="bulldoze()"]',t('bulldoze'));setText('.mini',t('cityHelp'));
      setAll('.stat span',[t('day'),t('budget'),t('people'),t('jobs'),t('energy'),t('happy')]);
    }
    if(f==='maze.html'){
      setText('button[onclick="nextLevel()"]',t('nextLevel'));setText('#msg',t('mazeHelp'));
      var labels=[t('mazeLevel')+': ',t('coins')+': ',t('moves')+': '];
      document.querySelectorAll('.hud .pill').forEach(function(el,i){var b=el.querySelector('b');if(b)el.firstChild.textContent=labels[i]});
    }
    if(f==='cafe_sim.html')setText('.subtitle',t('cafeSub'));
    if(f==='farm.html')setText('.sub',t('farmSub'));
    if(f==='clicker.html')setText('.sub',t('clickerSub'));
    if(f==='music_pad.html')setText('#info',t('musicHint'));
  }

  var applying=false,observerStarted=false,scheduled=false;
  function observe(){
    if(observerStarted||!document.body)return;
    observerStarted=true;
    new MutationObserver(function(){
      if(applying||scheduled)return;
      scheduled=true;
      requestAnimationFrame(function(){scheduled=false;apply(true)});
    }).observe(document.body,{childList:true,subtree:true,characterData:true});
  }

  function apply(fromObserver){
    if(applying)return;
    applying=true;
    document.documentElement.lang=current;
    ensureSwitcher();
    installDomWriteTranslator();
    installCanvasTranslator();
    installDialogTranslator();
    if(!fromObserver){
      if(file()==='index.html'||file()==='')translateIndex();else translateGame();
    }
    translateNodeText(document.body);
    applying=false;
    if(!fromObserver)observe();
  }

  window.PortalI18n={lang:function(){return current},t:t,game:game,translateString:translateString,apply:function(){apply(false)}};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){apply(false)});else apply(false);
})();
