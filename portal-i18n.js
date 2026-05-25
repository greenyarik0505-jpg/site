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
