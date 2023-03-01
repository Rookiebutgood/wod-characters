const translate = {
  strength: 'Сила',
  dexterity: 'Ловкость',
  stamina: 'Выносливость',

  charisma: 'Обаяние',
  manipulation: 'Манипуляция',
  appearence: 'Внешность',

  perception: 'Восприятие',
  intelligence: 'Интелект',
  wits: 'Смекалка',

  alertness: 'Внимательность',
  athletics: 'Атлетика',
  brawl: 'Рукопашный бой',
  dodge: 'Уклонение',
  empathy: 'Эмпатия', 
  expression: 'Экспрессия',
  intimidation: 'Запугивание',
  leadership: 'Лидерство',
  streetwise: 'Знание улиц',
  subterfuge: 'Хитрость',
  
  search: 'Поиск', //?
  diplomacy: 'Дипломатия', // ?
  grace: 'Изящество', // ?
  interrogation: 'Допрос', // ?
  intrigue: 'Интриги', // ?
  intuition: 'Интуиция', // ?

  animalKen: 'Знание животных', // skills
  crafts: 'Ремесло',
  drive: 'Вождение',
  etiquette: 'Этикет',
  firearms: 'Стрельба',
  melee: 'Фехтование',
  performance: 'Исполнение',
  security: 'Безопасность',
  stealth: 'Скрытность',
  survival: 'Выживание',
  
  camouflage: 'Маскировка', // ?
  disguise: 'Переодевание', // ?
  martialArts: 'Боевые искусства',

  academic: 'Академические', //knowledges
  computer: 'Компьютеры',
  finance: 'Финансы',
  investigation: 'Расследования',
  law: 'Законы',
  linguistic: 'Лингвистика',
  medicine: 'Медицина',
  occult: 'Оккультизм',
  politics: 'Политика',
  science: 'Наука',

  clanKnowledge: 'Знание кланов', // ?
  clanPrestige: 'Престиж в клане', //? 
  camarillaLore: 'Знание Камарильи', // ?
  sabbatLore: 'Знание Шабаша', // ?
  areaKnowledge: 'Знание местности', // Manhetten // ?
  bureaucracy: 'Бюрократия', // ?
  citySecrets: '', // ?
  history: 'История', // ?
  sewerLore: 'Знание канализации', // ?

  animalism: 'Анимализм',
  auspex: 'Прорицание',
  celerity: 'Стремительность',
  dementation: 'Помешательство',
  dominate: 'Доминирование',
  fortitude: 'Стойкость',
  obfuscate: 'Затемнение',
  obtenebration: 'Власть над Тенью',
  potence: 'Могущество',
  protean: 'Превращение',
  necromacy: 'Некромантия',
  necromacyAsh: 'Некромантия - Путь Праха',
  necromacyBone: 'Некромантия - Путь Кости',
  necromacyCenotaph: 'Некромантия - Путь Кенотафа',
  necromacyMortuus: 'Некромантия - Путь Мортууса',
  necromacySepulchre: 'Некромантия - Путь Склепа',
  // necromacySepulchre: 'Некромантия - Путь Склепа', //Стекловидный Путь (Vitreous Path)
  presence: 'Присутствие',
  quietus: 'Смертоносность',
  serpentis: 'Серпентис',
  thaumaturgy: 'Тауматургия',
  thaumaturgyAlchemy: 'Тауматургия - Алхимия',
  thaumaturgyBiothaumaturgy: 'Тауматургия - Биотауматургия',
  thaumaturgyMovementMind: 'Тауматургия - Движение Разума',
  thaumaturgyGreenPath: 'Тауматургия - Зеленый Путь',
  thaumaturgyOneiromancy:'Тауматургия - Онейромантия',
  thaumaturgyFlames: 'Тауматургия - Привлечение Огней',
  thaumaturgyFather: 'Тауматургия - Путь Возмездия Отца',
  thaumaturgyLevinbolt: 'Тауматургия - Путь Громовержца',
  thaumaturgyBlood: 'Тауматургия - Путь Крови',
  thaumaturgyFocusedMind: 'Тауматургия - Сосредоточенный Разум',
  thaumaturgySpirit: 'Тауматургия - Путь Управления Духом',
  thaumaturgyTechnomancy: 'Тауматургия - Путь Техномантии',
  thaumaturgyElemental: 'Тауматургия - Путь Управления Стихиями',
  thaumaturgyHearth: 'Тауматургия - Путь Домашнего Очага',
  thaumaturgyCorruption: 'Тауматургия - Путь Искажения',
  thaumaturgyMars: 'Тауматургия - Путь Марса',
  thaumaturgyNeptune: 'Тауматургия - Путь Мощи Нептуна',
  thaumaturgyShadow: 'Тауматургия - Путь Создания Теней',
  thaumaturgyConjuring: 'Тауматургия - Путь Сотворения',
  thaumaturgyWeather: 'Тауматургия - Путь Управления Погодой',
  thaumaturgyDestruction: 'Тауматургия - Руки Разрушения',
  thaumaturgyMortal: 'Тауматургия - Управление Смертной Оболочкой',
  thaumaturgyCountermagic: 'Тауматургия - Контрмагия',
  vicissitude: 'Изменчивость',

  loreTransfiguration: 'Знание Метаморфоз',
  loreLonging: 'Знание Желания',
  loreStorms: 'Знание Бурь',

  allies: 'Союзники',
  contacts: 'Связи',
  fame: 'Слава',
  herd: 'Стадо',
  influence: 'Влияние',
  mentor: 'Ментор',
  resources: 'Ресурсы',
  retainers: 'Слуги',
  status: 'Статус',
  rituals: 'Ритуалы', //?
  //wta
  ancestors: 'Предки',
  fetish: 'Фетиш',
  kinfolk: 'Родня',
  pureBreed: 'Чистота рода',
  rites: 'Обряды',
  totem: 'Тотем',
  //mta
  arcane: 'Сокрытие',
  avatar: 'Аватар',
  destiny: 'Судьба',
  dream: 'Греза',
  library: 'Библиотека',
  node: 'Узел',
  wonder: 'Талисман', 
  //dtf
  eminence: 'Высокое положение',
  followers: 'Последователи',
  legacy: 'Наследие',
  pacts: 'Договоры',
  paragon: 'Совершенство',

  conscience: 'Сознательность',
  selfControl: 'Самоконтроль',
  courage: 'Смелость', 
  conviction: 'Убежденность',
  instincts: 'Инстинкты'
}

export const translateAttribute = (name: string): string => {
  return translate[name]
}



