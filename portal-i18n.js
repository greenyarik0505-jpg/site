(function(){
  var KEY='portal_lang';
  var LANGS=['ru','uk','en'];
  var current=localStorage.getItem(KEY);
  if(!LANGS.includes(current)) current='ru';

  var gameText={
    sandbox:{ru:['Песочница','Физика, рисование, объекты'],uk:['Пісочниця','Фізика, малювання, об’єкти'],en:['Sandbox','Physics, drawing, objects']},
    sandboxels:{ru:['Sandboxels','Симулятор 25+ стихий и частиц'],uk:['Sandboxels','Симулятор 25+ стихій і частинок'],en:['Sandboxels','25+ elements and particles simulator']},
    bubblepop:{ru:['Шарики POP','Стреляй и лопай шарики!'],uk:['Кульки POP','Стріляй і лопай кульки!'],en:['Bubble POP','Shoot and pop bubbles!']},
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
      portalTitle:'🎮 ИГРОВОЙ ПОРТАЛ', portalSubtitle:'Выбери игру и играй!', footer:'Игровой Портал • Open Source • 2026',
      arcade:'🕹 Аркады', puzzle:'🧩 Головоломки', creative:'🎨 Творческие', sim:'☕ Симуляторы', custom:'✨ Пользовательские',
      home:'Главное меню', language:'Язык',
      citySub:'Развивай город: людям нужны дома, работа, энергия, парки и сервисы.', build:'Строительство', nextDay:'Следующий день', upgrade:'Улучшить выбранное', bulldoze:'Снести выбранное',
      day:'День', budget:'Бюджет', people:'Люди', jobs:'Работа', energy:'Энергия', happy:'Счастье',
      cityHelp:'Дом даёт жителей, офис даёт работу, электростанция даёт энергию, парк и больница поднимают счастье. Если энергии или работы мало, город теряет доход.',
      mazeLevel:'Уровень', coins:'Монеты', moves:'Ходы', nextLevel:'Следующий уровень', mazeHelp:'Собери монеты и найди зелёный выход.',
      cafeSub:'Сажай гостей, готовь заказы, следи за складом и прокачивай зал.',
      farmSub:'Выращивай культуры, поливай грядки, корми животных, закрывай заказы и развивай ферму.',
      clickerSub:'Кликай, строй бизнесы, закрывай миссии, уходи в престиж и соревнуйся с собой.',
      musicHint:'Нажимай плитки и делай ритм.'
    },
    uk:{
      portalTitle:'🎮 ІГРОВИЙ ПОРТАЛ', portalSubtitle:'Обери гру та грай!', footer:'Ігровий Портал • Open Source • 2026',
      arcade:'🕹 Аркади', puzzle:'🧩 Головоломки', creative:'🎨 Творчі', sim:'☕ Симулятори', custom:'✨ Користувацькі',
      home:'Головне меню', language:'Мова',
      citySub:'Розвивай місто: людям потрібні домівки, робота, енергія, парки та сервіси.', build:'Будівництво', nextDay:'Наступний день', upgrade:'Покращити вибране', bulldoze:'Знести вибране',
      day:'День', budget:'Бюджет', people:'Люди', jobs:'Робота', energy:'Енергія', happy:'Щастя',
      cityHelp:'Будинок дає жителів, офіс дає роботу, електростанція дає енергію, парк і лікарня піднімають щастя. Якщо енергії або роботи мало, місто втрачає дохід.',
      mazeLevel:'Рівень', coins:'Монети', moves:'Ходи', nextLevel:'Наступний рівень', mazeHelp:'Збери монети та знайди зелений вихід.',
      cafeSub:'Саджай гостей, готуй замовлення, стеж за складом і прокачуй зал.',
      farmSub:'Вирощуй культури, поливай грядки, годуй тварин, виконуй замовлення і розвивай ферму.',
      clickerSub:'Клікай, будуй бізнеси, виконуй місії, йди у престиж і змагайся із собою.',
      musicHint:'Натискай плитки та роби ритм.'
    },
    en:{
      portalTitle:'🎮 GAME PORTAL', portalSubtitle:'Choose a game and play!', footer:'Game Portal • Open Source • 2026',
      arcade:'🕹 Arcade', puzzle:'🧩 Puzzles', creative:'🎨 Creative', sim:'☕ Simulators', custom:'✨ Custom',
      home:'Main menu', language:'Language',
      citySub:'Grow your city: people need homes, jobs, energy, parks, and services.', build:'Construction', nextDay:'Next day', upgrade:'Upgrade selected', bulldoze:'Demolish selected',
      day:'Day', budget:'Budget', people:'People', jobs:'Jobs', energy:'Energy', happy:'Happiness',
      cityHelp:'Homes add people, offices add jobs, power plants add energy, parks and clinics raise happiness. If jobs or energy are low, the city loses income.',
      mazeLevel:'Level', coins:'Coins', moves:'Moves', nextLevel:'Next level', mazeHelp:'Collect coins and find the green exit.',
      cafeSub:'Seat guests, cook orders, manage stock, and upgrade the dining room.',
      farmSub:'Grow crops, water plots, feed animals, complete orders, and expand the farm.',
      clickerSub:'Click, build businesses, complete missions, prestige, and compete with yourself.',
      musicHint:'Tap pads and make a rhythm.'
    }
  };

  function t(key){return (ui[current]&&ui[current][key])||ui.ru[key]||key}
  function game(id){return (gameText[id]&&gameText[id][current])||gameText[id]&&gameText[id].ru}
  function file(){return (location.pathname.split('/').pop()||'index.html').toLowerCase()}
  function setText(sel,text){var el=document.querySelector(sel); if(el&&text) el.textContent=text}
  function setAll(sel,values){document.querySelectorAll(sel).forEach(function(el,i){if(values[i])el.textContent=values[i]})}

  function ensureSwitcher(){
    if(document.getElementById('portalLang')) return;
    var wrap=document.createElement('div');
    wrap.id='portalLang';
    wrap.innerHTML='<span>'+t('language')+'</span><button data-lang="ru">RU</button><button data-lang="uk">UK</button><button data-lang="en">EN</button>';
    wrap.style.cssText='position:fixed;top:12px;right:12px;z-index:10070;display:flex;gap:5px;align-items:center;background:rgba(0,0,0,.58);border:1px solid rgba(255,255,255,.24);border-radius:12px;padding:6px 7px;color:#fff;font:800 11px Arial,sans-serif;backdrop-filter:blur(8px)';
    document.body.appendChild(wrap);
    wrap.querySelectorAll('button').forEach(function(btn){
      btn.style.cssText='border:0;border-radius:8px;padding:5px 7px;font-weight:900;cursor:pointer;background:'+(btn.dataset.lang===current?'#feca57':'rgba(255,255,255,.16)')+';color:'+(btn.dataset.lang===current?'#111':'#fff');
      btn.onclick=function(){localStorage.setItem(KEY,btn.dataset.lang);location.reload()};
    });
  }

  function translateIndex(){
    setText('.header h1',t('portalTitle'));
    setText('.header p',t('portalSubtitle'));
    var footer=document.querySelector('.footer');
    if(footer){
      var joke=footer.querySelector('#joke');
      footer.innerHTML='';
      if(joke) footer.appendChild(joke);
      footer.appendChild(document.createElement('br'));
      footer.appendChild(document.createTextNode(t('footer')));
    }
    window.PORTAL_LANG=current;
    window.PORTAL_T=function(key){return t(key)};
    window.PORTAL_GAME_TEXT=gameText;
    if(typeof DEFAULT_GAMES!=='undefined'){
      DEFAULT_GAMES.forEach(function(g){
        var tr=game(g.id);
        if(tr){g.name=tr[0];g.desc=tr[1]}
      });
      if(window.CATEGORY_LABELS){
        CATEGORY_LABELS.arcade=t('arcade');CATEGORY_LABELS.puzzle=t('puzzle');CATEGORY_LABELS.creative=t('creative');CATEGORY_LABELS.sim=t('sim');CATEGORY_LABELS.custom=t('custom');
      }
      if(typeof renderGames==='function') renderGames();
    }
  }

  function translateGame(){
    var f=file();
    var map={
      'city_sim.html':'citysim','maze.html':'maze','music_pad.html':'musicpad','cafe_sim.html':'cafesim','clicker.html':'clicker','farm.html':'farm',
      'snake.html':'snake','pacman.html':'pacman','tetris.html':'tetris','arkanoid.html':'arkanoid','memory.html':'memory','minesweeper.html':'minesweeper',
      'tic_tac_toe.html':'tictactoe','pixel_art.html':'pixelart','sandbox.html':'sandbox','sandboxels.html':'sandboxels','new_game.html':'bubblepop','flappy_bird.html':'flappy'
    };
    var id=map[f], tr=game(id);
    document.querySelectorAll('.portal-home-btn').forEach(function(a){a.textContent=t('home')});
    if(tr){document.title=tr[0];setText('h1',(document.querySelector('h1')&&document.querySelector('h1').textContent.match(/^[^A-Za-zА-Яа-яІіЇїЄєҐґ]*/)||[''])[0]+tr[0])}
    if(f==='city_sim.html'){
      setText('.sub',t('citySub')); setText('aside h3',t('build')); setText('button[onclick="nextDay()"]',t('nextDay')); setText('button[onclick="upgradeSelected()"]',t('upgrade')); setText('button[onclick="bulldoze()"]',t('bulldoze')); setText('.mini',t('cityHelp'));
      setAll('.stat span',[t('day'),t('budget'),t('people'),t('jobs'),t('energy'),t('happy')]);
    }
    if(f==='maze.html'){
      setText('button[onclick="nextLevel()"]',t('nextLevel')); setText('#msg',t('mazeHelp'));
      var labels=[t('mazeLevel')+': ',t('coins')+': ',t('moves')+': '];
      document.querySelectorAll('.hud .pill').forEach(function(el,i){var b=el.querySelector('b'); if(b) el.firstChild.textContent=labels[i]});
    }
    if(f==='cafe_sim.html') setText('.subtitle',t('cafeSub'));
    if(f==='farm.html') setText('.sub',t('farmSub'));
    if(f==='clicker.html') setText('.sub',t('clickerSub'));
    if(f==='music_pad.html') setText('#info',t('musicHint'));
  }

  function apply(){
    document.documentElement.lang=current;
    ensureSwitcher();
    if(file()==='index.html'||file()==='') translateIndex(); else translateGame();
  }

  window.PortalI18n={lang:function(){return current},t:t,game:game,apply:apply};
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply); else apply();
})();
