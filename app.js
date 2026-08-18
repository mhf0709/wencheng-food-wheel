const DATA_UPDATED_AT = "2026-08-18";
const STORAGE_KEYS = {
  custom: "wencheng-food-custom-v1",
  history: "wencheng-food-history-v1",
};

const categories = [
  { id: "bbq", label: "烧烤", subtitle: "炭火与夜宵", icon: "火", colors: ["#b94735", "#d8a43e", "#76515b"] },
  { id: "bubble", label: "泡泡", subtitle: "甜品饮品小吃", icon: "泡", colors: ["#76515b", "#d8a43e", "#b94735"] },
  { id: "noodles", label: "面食", subtitle: "粉面饼与主食", icon: "面", colors: ["#d8a43e", "#2e5a4c", "#b94735"] },
  { id: "stirfry", label: "炒菜", subtitle: "农家菜与正餐", icon: "炒", colors: ["#2e5a4c", "#b94735", "#d8a43e"] },
];

const legacyDianpingStores = [
  {
    id: "ahua",
    name: "阿华农家菜（文成店）",
    type: "农家菜",
    area: "文成县中心城区",
    price: 75,
    reviews: 228,
    dishes: ["糯米山药", "葱油拌面", "目鱼干番薯粉"],
    url: "https://www.dianping.com/shop/l12KCD9MtmQXgoIy",
  },
  {
    id: "wutong",
    name: "無同小院·文成菜（体育场路店）",
    type: "温州菜",
    area: "文成县中心城区",
    price: 77,
    reviews: 479,
    dishes: ["你没吃过我的豆腐", "飘香鱼", "面包诱惑"],
    url: "https://www.dianping.com/shop/G90D58W1Lb4f5ofH",
  },
  {
    id: "waxiansheng",
    name: "哇鲜生（苔湖店）",
    type: "温州菜",
    area: "伯温路",
    price: 53,
    reviews: 13,
    dishes: ["哇鲜生招牌牛蛙煲", "沸腾牛蛙", "鲫鱼钉螺"],
    url: "https://www.dianping.com/shop/k35WMBJKaRBlgElr",
  },
  {
    id: "yuyuan",
    name: "芋圆壹号（温州文成县店）",
    type: "甜品",
    area: "文成县中心城区",
    price: 9,
    reviews: 3,
    dishes: ["芋泥麻薯芋圆", "桃胶木薯炖奶", "青涧青团芋圆"],
    url: "https://www.dianping.com/shop/H42tZEuT0lroP2sO",
  },
  {
    id: "xiangmanlou",
    name: "香满楼餐厅（文成店）",
    type: "客家菜",
    area: "文成县",
    price: 37,
    reviews: 15,
    dishes: ["高山地瓜粉", "家烧猪蹄", "野生溪鱼"],
    url: "https://www.dianping.com/shop/H9gUft50tC4CRNnO",
  },
  {
    id: "naixiang",
    name: "奶香铺子（文成店）",
    type: "甜品",
    area: "文成县中心城区",
    price: 22,
    reviews: 17,
    dishes: ["芋泥盒子", "蜜红豆厚酸奶", "软糯进口香蕉"],
    url: "https://www.dianping.com/shop/l2M9RV2UBn9TG2VA",
  },
  {
    id: "liangquanqimei",
    name: "粮全其美手抓饼（大峃街店）",
    type: "小吃面食",
    area: "文成县中心城区",
    price: 19,
    reviews: 23,
    dishes: ["芳香大鸡排", "生磨豆奶", "肉丸子"],
    url: "https://www.dianping.com/shop/k5gCz2Fshtwyza3W",
  },
  {
    id: "yikeshu",
    name: "一棵树咖啡（文成店）",
    type: "咖啡",
    area: "文成县中心城区",
    price: 32,
    reviews: 18,
    dishes: ["卡布奇诺", "三明治", "咖啡"],
    url: "https://www.dianping.com/shop/k23PbwA9CNkQiJZL",
  },
  {
    id: "yangxiezi",
    name: "羊蝎子火锅（文成店）",
    type: "羊蝎子火锅",
    area: "文成县中心城区",
    price: 50,
    reviews: 15,
    dishes: ["烤鸭头", "烤新疆羊肉串", "新鲜牛肉串"],
    url: "https://www.dianping.com/shop/l34XyFURdlbzgfxn",
  },
  {
    id: "wenchenghotel",
    name: "文成宾馆中餐厅",
    type: "温州菜",
    area: "文成宾馆",
    price: 79,
    reviews: 7,
    dishes: ["南田小炒肉", "百香果马蹄", "冰花煎饺"],
    url: "https://www.dianping.com/shop/l7OaYeQEdp3oMubN",
  },
  {
    id: "mojmatcha",
    name: "MOJMATCHA磨迹抹茶（文成巨屿店）",
    type: "饮品",
    area: "文成县",
    price: 30,
    reviews: 3,
    dishes: ["美式", "抹茶迪拜巧克力", "渐变巧克力"],
    url: "https://www.dianping.com/shop/HagAqozBEZjDncfo",
  },
  {
    id: "daocaoren",
    name: "稻草人（诚意路店）",
    type: "咖啡 / 简餐",
    area: "文成县",
    price: null,
    reviews: 4,
    dishes: ["榴莲披萨", "牛排", "红烧土豆"],
    url: "https://www.dianping.com/shop/G6tQsH9M8kAO5w86",
  },
  {
    id: "jiang",
    name: "匠·日式融合料理",
    type: "日式料理",
    area: "文成县中心城区",
    price: 120,
    reviews: 38,
    dishes: ["天妇罗虾卷", "日式炸鸡排", "三文鱼握"],
    url: "https://www.dianping.com/shop/k56QiEFTTSZaScjd",
  },
  {
    id: "jiudufansi",
    name: "九都饭司美食咖啡",
    type: "地方菜系",
    area: "文成县",
    price: 61,
    reviews: 1,
    dishes: [],
    url: "https://www.dianping.com/shop/k8BIxzirZwbs9zdS",
  },
  {
    id: "yunkafei",
    name: "芸咖coffee",
    type: "咖啡",
    area: "文成县中心城区",
    price: null,
    reviews: 1,
    dishes: ["意式浓咖啡"],
    url: "https://www.dianping.com/shop/k1bVshA88TVapMad",
  },
];

const dianpingStores = window.DIANPING_STORES?.length
  ? window.DIANPING_STORES
  : legacyDianpingStores;

function categoryForStore(store) {
  const text = [store.name, store.type, ...store.dishes].join(" ");
  if (/咖啡|甜品|面包|蛋糕|饮品|茶饮|水果|鲜果|栗子|糖水|冷饮|奶茶|西点|烘焙|Cake/i.test(text)) {
    return "bubble";
  }
  if (/面馆|馄饨|抄手|扁食|饺子|拉面|面食|酸辣粉|炸酱面|花甲粉|螺蛳粉|猪脏粉/.test(text)) {
    return "noodles";
  }
  if (/烧烤|烤串|烤肉|小龙虾|炸鸡炸串|炸串|鸭脖|熏鸡|羊蝎子/.test(text)) {
    return "bbq";
  }
  return "stirfry";
}

const platformItems = dianpingStores.map((store) => ({
  id: `dp-${store.id}`,
  name: store.name,
  category: categoryForStore(store),
  dish: store.dishes.length ? store.dishes.join(" / ") : "到店看今日菜单",
  area: store.area,
  type: store.type,
  price: store.price,
  reviews: store.reviews,
  url: store.url,
  source: "大众点评页面快照",
  sourceKind: "platform",
}));

const storeById = Object.fromEntries(dianpingStores.map((store) => [store.id, store]));

function storeItem(id, category, dish, suffix = "") {
  const store = storeById[id];
  return {
    id: `dp-${id}-${category}-${dish}`,
    name: store.name,
    category,
    dish: suffix ? `${dish} · ${suffix}` : dish,
    area: store.area,
    type: store.type,
    price: store.price,
    reviews: store.reviews,
    url: store.url,
    source: "大众点评页面快照",
    sourceKind: "platform",
  };
}

const sourceUrls = {
  localGuide: "https://wz.bendibao.com/tour/48122.shtm",
  topDishes: "https://wz.bendibao.com/meishi/20211125/55843.shtm",
  hundredBowls: "https://zjnews.zjol.com.cn/zjnews/wznews/201811/t20181120_8791446.shtml",
  goodWencheng: "https://www.66wz.com/wendu/system/2026/07/15/105805522.shtml",
};

const localItems = [
  {
    id: "local-nine-layer-cake",
    name: "文成九层糕",
    category: "bubble",
    dish: "蒸、煮或煎都可以，乳香软糯",
    area: "文成县",
    type: "地方小吃",
    price: null,
    reviews: null,
    url: sourceUrls.localGuide,
    source: "文成特色美食公开资料",
    sourceKind: "local",
  },
  {
    id: "local-she-rice-cake",
    name: "畲家糯米糍粑",
    category: "bubble",
    dish: "软糯小吃，适合饭后再来一点",
    area: "文成县",
    type: "畲家小吃",
    price: null,
    reviews: null,
    url: sourceUrls.hundredBowls,
    source: "温州百碗公开名单",
    sourceKind: "local",
  },

  {
    id: "local-wencheng-noodles",
    name: "文成拉面",
    category: "noodles",
    dish: "手工拉面配香菇、鸡蛋和时蔬",
    area: "县城二新街一带",
    type: "文成传统面食",
    price: null,
    reviews: null,
    url: sourceUrls.localGuide,
    source: "文成特色美食公开资料",
    sourceKind: "local",
  },
  {
    id: "local-berwin-cake",
    name: "伯温烧饼",
    category: "noodles",
    dish: "梅干菜猪肉馅，皮薄酥脆",
    area: "南田镇 / 刘伯温故里一带",
    type: "文成特色主食",
    price: null,
    reviews: null,
    url: sourceUrls.topDishes,
    source: "文成十大小吃公开资料",
    sourceKind: "local",
  },
  {
    id: "local-pig-intestine-noodles",
    name: "猪脏粉",
    category: "noodles",
    dish: "猪肠、鸭血和粉干，汤鲜偏浓郁",
    area: "文成县城",
    type: "温州风味粉面",
    price: null,
    reviews: null,
    url: sourceUrls.localGuide,
    source: "文成特色美食公开资料",
    sourceKind: "local",
  },

  {
    id: "local-shanxi-fish",
    name: "珊溪包头鱼",
    category: "stirfry",
    dish: "包头鱼一鱼多吃，适合两个人慢慢点",
    area: "珊溪镇",
    type: "文成地方鱼鲜",
    price: null,
    reviews: null,
    url: sourceUrls.goodWencheng,
    source: "好吃文成公开报道",
    sourceKind: "local",
  },
  {
    id: "local-berwin-rabbit",
    name: "伯温贡兔",
    category: "stirfry",
    dish: "伯温家宴里的文成兔肉菜",
    area: "南田镇",
    type: "伯温家宴",
    price: null,
    reviews: null,
    url: sourceUrls.localGuide,
    source: "文成特色美食公开资料",
    sourceKind: "local",
  },
  {
    id: "local-pork-leg",
    name: "伯温瓦缸猪脚",
    category: "stirfry",
    dish: "瓦缸慢煨，适合想吃扎实正餐的晚上",
    area: "南田镇",
    type: "伯温家宴",
    price: null,
    reviews: null,
    url: sourceUrls.hundredBowls,
    source: "温州百碗公开名单",
    sourceKind: "local",
  },
];

let mode = "all";
let selectedCategory = "stirfry";
let isDrawing = false;
let currentResult = null;
let customItems = loadJson(STORAGE_KEYS.custom, []);
let historyItems = loadJson(STORAGE_KEYS.history, []);
let visibleStoreCount = 18;

const elements = {
  categoryList: document.querySelector("#category-list"),
  modeButtons: [...document.querySelectorAll(".mode-button")],
  poolTitle: document.querySelector("#pool-title"),
  poolCount: document.querySelector("#pool-count"),
  blindBoxMachine: document.querySelector("#blind-box-machine"),
  capsuleBed: document.querySelector("#capsule-bed"),
  machinePoolCount: document.querySelector("#machine-pool-count"),
  drawnCapsule: document.querySelector("#drawn-capsule"),
  drawnCapsuleIcon: document.querySelector("#drawn-capsule-icon"),
  drawnCapsuleName: document.querySelector("#drawn-capsule-name"),
  drawButton: document.querySelector("#draw-button"),
  drawStatus: document.querySelector("#draw-status"),
  resultBadge: document.querySelector("#result-badge"),
  resultNumber: document.querySelector("#result-number"),
  resultEmpty: document.querySelector("#result-empty"),
  resultContent: document.querySelector("#result-content"),
  resultCategory: document.querySelector("#result-category"),
  resultName: document.querySelector("#result-name"),
  resultDish: document.querySelector("#result-dish"),
  resultMeta: document.querySelector("#result-meta"),
  resultSourceNote: document.querySelector("#result-source-note"),
  resultLink: document.querySelector("#result-link"),
  copyResult: document.querySelector("#copy-result"),
  historyList: document.querySelector("#history-list"),
  storeGrid: document.querySelector("#store-grid"),
  loadMoreStores: document.querySelector("#load-more-stores"),
  customForm: document.querySelector("#custom-form"),
  customName: document.querySelector("#custom-name"),
  customCategory: document.querySelector("#custom-category"),
  customDish: document.querySelector("#custom-dish"),
  customArea: document.querySelector("#custom-area"),
  clearCustom: document.querySelector("#clear-custom"),
  formMessage: document.querySelector("#form-message"),
  resultModal: document.querySelector("#result-modal"),
  modalClose: document.querySelector("#modal-close"),
  modalResultBadge: document.querySelector("#modal-result-badge"),
  modalResultCategory: document.querySelector("#modal-result-category"),
  modalResultName: document.querySelector("#modal-result-name"),
  modalResultDish: document.querySelector("#modal-result-dish"),
  modalResultMeta: document.querySelector("#modal-result-meta"),
  modalResultSource: document.querySelector("#modal-result-source"),
  modalResultLink: document.querySelector("#modal-result-link"),
  modalCopyResult: document.querySelector("#modal-copy-result"),
  modalRespin: document.querySelector("#modal-respin"),
  modalAccept: document.querySelector("#modal-accept"),
};

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage may be unavailable in a restrictive private browser.
  }
}

function allItems() {
  return [...platformItems, ...localItems, ...customItems];
}

function currentPool() {
  const items = allItems();
  return mode === "all" ? items : items.filter((item) => item.category === selectedCategory);
}

function categoryFor(id) {
  return categories.find((category) => category.id === id) || categories[0];
}

function renderCategories() {
  elements.categoryList.replaceChildren();
  const items = allItems();

  categories.forEach((category) => {
    const count = items.filter((item) => item.category === category.id).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-button";
    button.dataset.category = category.id;
    button.setAttribute("aria-pressed", String(mode === "category" && selectedCategory === category.id));

    const icon = document.createElement("span");
    icon.className = "category-icon";
    icon.textContent = category.icon;

    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const subtitle = document.createElement("small");
    title.textContent = category.label;
    subtitle.textContent = category.subtitle;
    copy.append(title, subtitle);

    const countEl = document.createElement("span");
    countEl.className = "category-count";
    countEl.textContent = `${count}签`;

    button.append(icon, copy, countEl);
    if (mode === "category" && selectedCategory === category.id) button.classList.add("is-active");
    button.addEventListener("click", () => {
      mode = "category";
      selectedCategory = category.id;
      updateControls();
    });
    elements.categoryList.append(button);
  });
}

function updateControls() {
  elements.modeButtons.forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderCategories();
  const pool = currentPool();
  const category = categoryFor(selectedCategory);
  elements.poolTitle.textContent = mode === "all" ? "全部美食" : category.label;
  elements.poolCount.textContent = String(pool.length);
  elements.drawStatus.textContent = mode === "all"
    ? `全部 ${pool.length} 颗盲盒球，随缘抽一颗`
    : `${category.label}类 ${pool.length} 颗盲盒球，准备好了`;
  renderCapsules(pool);
}

function renderCapsules(pool) {
  const positions = [
    [5, 68, 58, -12], [22, 66, 64, 8], [43, 69, 56, -7], [61, 64, 66, 13], [81, 68, 55, -10],
    [11, 48, 63, 11], [33, 51, 54, -14], [51, 46, 62, 5], [72, 48, 58, -5], [86, 45, 52, 14],
    [20, 27, 54, -8], [42, 28, 60, 12], [64, 25, 55, -12], [79, 23, 61, 7],
  ];
  const displayCount = Math.min(positions.length, pool.length);
  const displayItems = Array.from({ length: displayCount }, (_, index) => (
    pool[Math.floor((index * pool.length) / displayCount)]
  ));

  elements.capsuleBed.replaceChildren();
  displayItems.forEach((item, index) => {
    const [x, y, size, rotation] = positions[index];
    const capsule = document.createElement("span");
    const category = categoryFor(item.category);
    capsule.className = `capsule-ball capsule-${item.category}`;
    capsule.style.setProperty("--x", `${x}%`);
    capsule.style.setProperty("--y", `${y}%`);
    capsule.style.setProperty("--size", `${size}px`);
    capsule.style.setProperty("--rotation", `${rotation}deg`);
    capsule.style.setProperty("--delay", `${(index % 7) * -0.09}s`);
    capsule.textContent = category.icon;
    elements.capsuleBed.append(capsule);
  });

  elements.machinePoolCount.textContent = `${pool.length} BALLS`;
  elements.blindBoxMachine.classList.remove("is-drawing", "is-delivering");
  elements.drawnCapsule.className = "drawn-capsule";
  elements.drawnCapsuleIcon.textContent = "？";
  elements.drawnCapsuleName.textContent = "等待出球";
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function drawBlindBox() {
  if (isDrawing) return;
  const pool = currentPool();
  if (!pool.length) {
    elements.drawStatus.textContent = "这个分类还没有盲盒球，先添加一家吧。";
    return;
  }

  isDrawing = true;
  currentResult = randomFrom(pool);
  const resultCategory = categoryFor(currentResult.category);
  elements.blindBoxMachine.classList.remove("is-delivering");
  elements.drawnCapsule.className = "drawn-capsule";
  elements.drawnCapsuleIcon.textContent = "？";
  elements.drawnCapsuleName.textContent = "盲盒球翻滚中";
  elements.drawButton.disabled = true;
  elements.drawStatus.textContent = "球仓正在替你们做决定……";
  elements.resultBadge.textContent = "正在抽盲盒";
  window.requestAnimationFrame(() => elements.blindBoxMachine.classList.add("is-drawing"));

  window.setTimeout(() => {
    elements.blindBoxMachine.classList.remove("is-drawing");
    elements.blindBoxMachine.classList.add("is-delivering");
    elements.drawnCapsule.classList.add("is-visible", `capsule-${currentResult.category}`);
    elements.drawnCapsuleIcon.textContent = resultCategory.icon;
    elements.drawnCapsuleName.textContent = currentResult.name;
    elements.drawStatus.textContent = "出球了，正在揭晓今晚的答案……";
  }, 1750);

  window.setTimeout(() => {
    isDrawing = false;
    elements.drawButton.disabled = false;
    elements.drawStatus.textContent = "抽到了，不许反悔。";
    showResult(currentResult);
    pushHistory(currentResult);
  }, 2650);
}

function renderMeta(target, meta) {
  target.replaceChildren();
  meta.forEach(([label, value]) => {
    const wrap = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    wrap.append(dt, dd);
    target.append(wrap);
  });
}

function closeResultModal() {
  if (typeof elements.resultModal.close === "function" && elements.resultModal.open) {
    elements.resultModal.close();
  } else {
    elements.resultModal.removeAttribute("open");
  }
}

function openResultModal() {
  if (elements.resultModal.open) closeResultModal();
  if (typeof elements.resultModal.showModal === "function") {
    elements.resultModal.showModal();
  } else {
    elements.resultModal.setAttribute("open", "");
  }
}

function showResult(item) {
  const category = categoryFor(item.category);
  const badge = item.sourceKind === "platform" ? "点评店铺球" : item.sourceKind === "custom" ? "私房球" : "文成风味球";
  const dishText = item.dish ? `建议就点：${item.dish}` : "到店看当天菜单，听老板推荐。";
  const sourceNote = item.sourceKind === "platform"
    ? "价格、评价和推荐菜来自大众点评页面快照，出发前请以平台最新页面为准。"
    : item.sourceKind === "custom"
      ? "这是你自己保存的候选，只存放在当前浏览器。"
      : `来源：${item.source}。地方菜资料不代表具体店铺实时供应。`;
  const meta = [
    ["位置", item.area || "文成县"],
    ["人均", item.price ? `约 ¥${item.price}` : "页面暂无"],
    ["评价", Number.isFinite(item.reviews) ? `${item.reviews} 条` : "—"],
    ["数据", item.sourceKind === "platform" ? DATA_UPDATED_AT : item.sourceKind === "custom" ? "当前浏览器" : "公开资料"],
  ];

  elements.resultEmpty.hidden = true;
  elements.resultContent.hidden = false;
  elements.resultContent.classList.remove("is-revealing");
  void elements.resultContent.offsetWidth;
  elements.resultContent.classList.add("is-revealing");
  elements.resultBadge.textContent = badge;
  elements.resultNumber.textContent = `NO. ${String(Math.floor(Math.random() * 90) + 10)}`;
  elements.resultCategory.textContent = `${category.label} / ${item.type || "自定义"}`;
  elements.resultName.textContent = item.name;
  elements.resultDish.textContent = dishText;
  renderMeta(elements.resultMeta, meta);
  elements.resultSourceNote.textContent = sourceNote;

  elements.resultLink.hidden = !item.url;
  if (item.url) elements.resultLink.href = item.url;

  elements.modalResultBadge.textContent = badge;
  elements.modalResultCategory.textContent = `${category.label} / ${item.type || "自定义"}`;
  elements.modalResultName.textContent = item.name;
  elements.modalResultDish.textContent = dishText;
  elements.modalResultSource.textContent = sourceNote;
  renderMeta(elements.modalResultMeta, meta);
  elements.modalResultLink.hidden = !item.url;
  if (item.url) elements.modalResultLink.href = item.url;
  openResultModal();
}

function pushHistory(item) {
  historyItems = [
    { name: item.name, dish: item.dish, category: item.category, time: new Date().toISOString() },
    ...historyItems,
  ].slice(0, 5);
  saveJson(STORAGE_KEYS.history, historyItems);
  renderHistory();
}

function renderHistory() {
  elements.historyList.replaceChildren();
  if (!historyItems.length) {
    const empty = document.createElement("li");
    empty.className = "history-empty";
    empty.textContent = "还没有记录，先转一次。";
    elements.historyList.append(empty);
    return;
  }

  historyItems.forEach((item) => {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const meta = document.createElement("span");
    title.className = "history-item-title";
    meta.className = "history-item-meta";
    title.textContent = item.name;
    meta.textContent = `${categoryFor(item.category).label} · ${item.dish || "随店点单"}`;
    li.append(title, meta);
    elements.historyList.append(li);
  });
}

function renderStores() {
  elements.storeGrid.replaceChildren();
  dianpingStores.slice(0, visibleStoreCount).forEach((store, index) => {
    const card = document.createElement("article");
    card.className = "store-card";

    const top = document.createElement("div");
    top.className = "store-card-top";
    const number = document.createElement("span");
    const price = document.createElement("span");
    number.textContent = `DP-${String(index + 1).padStart(2, "0")} / ${store.type}`;
    price.textContent = store.price ? `人均 ¥${store.price}` : "人均暂无";
    top.append(number, price);

    const name = document.createElement("h3");
    name.textContent = store.name;
    const dishes = document.createElement("p");
    dishes.className = "store-dishes";
    dishes.textContent = store.dishes.length
      ? `推荐菜：${store.dishes.join(" / ")}`
      : "页面未展示推荐菜";

    const link = document.createElement("a");
    link.href = store.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    const reviewText = Number.isFinite(store.reviews) ? `${store.reviews} 条评价` : "评价数暂无";
    link.textContent = `${store.area} · ${reviewText}`;
    card.append(top, name, dishes, link);
    elements.storeGrid.append(card);
  });

  const remaining = dianpingStores.length - visibleStoreCount;
  elements.loadMoreStores.hidden = remaining <= 0;
  if (remaining > 0) {
    elements.loadMoreStores.textContent = `再看 ${Math.min(18, remaining)} 家（已显示 ${visibleStoreCount}/${dianpingStores.length}）`;
  }
}

function addCustomItem(event) {
  event.preventDefault();
  const name = elements.customName.value.trim();
  if (!name) return;

  customItems.push({
    id: `custom-${Date.now()}`,
    name,
    category: elements.customCategory.value,
    dish: elements.customDish.value.trim(),
    area: elements.customArea.value.trim() || "文成县",
    type: "我的收藏",
    price: null,
    reviews: null,
    url: "",
    source: "用户自定义",
    sourceKind: "custom",
  });
  saveJson(STORAGE_KEYS.custom, customItems);
  elements.customForm.reset();
  elements.formMessage.textContent = `“${name}”已经放进球池。`;
  updateControls();
}

function clearCustomItems() {
  if (!customItems.length) {
    elements.formMessage.textContent = "目前没有自定义内容。";
    return;
  }
  if (!window.confirm(`确定清空 ${customItems.length} 条自定义候选吗？`)) return;
  customItems = [];
  saveJson(STORAGE_KEYS.custom, customItems);
  elements.formMessage.textContent = "自定义候选已清空。";
  updateControls();
}

async function copyCurrentResult(button = elements.copyResult) {
  if (!currentResult) return;
  const text = `今晚吃：${currentResult.name}\n推荐：${currentResult.dish || "到店再点"}\n位置：${currentResult.area || "文成县"}`;
  const originalLabel = button.textContent;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.append(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    button.textContent = "已复制";
    window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
  } catch {
    button.textContent = "复制失败";
    window.setTimeout(() => { button.textContent = originalLabel; }, 1400);
  }
}

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    updateControls();
  });
});
elements.drawButton.addEventListener("click", drawBlindBox);
elements.copyResult.addEventListener("click", () => copyCurrentResult(elements.copyResult));
elements.modalCopyResult.addEventListener("click", () => copyCurrentResult(elements.modalCopyResult));
elements.modalClose.addEventListener("click", closeResultModal);
elements.modalAccept.addEventListener("click", closeResultModal);
elements.modalRespin.addEventListener("click", () => {
  closeResultModal();
  window.setTimeout(drawBlindBox, 160);
});
elements.resultModal.addEventListener("click", (event) => {
  if (event.target === elements.resultModal) closeResultModal();
});
elements.customForm.addEventListener("submit", addCustomItem);
elements.clearCustom.addEventListener("click", clearCustomItems);
elements.loadMoreStores.addEventListener("click", () => {
  visibleStoreCount = Math.min(visibleStoreCount + 18, dianpingStores.length);
  renderStores();
});

renderStores();
renderHistory();
updateControls();
