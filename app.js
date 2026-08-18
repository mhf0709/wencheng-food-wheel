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

const dianpingStores = [
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

const seedItems = [
  storeItem("yangxiezi", "bbq", "烤鸭头"),
  storeItem("yangxiezi", "bbq", "烤新疆羊肉串"),
  storeItem("yangxiezi", "bbq", "新鲜牛肉串"),

  storeItem("yuyuan", "bubble", "芋泥麻薯芋圆", "甜口收尾"),
  storeItem("naixiang", "bubble", "蜜红豆厚酸奶"),
  storeItem("yikeshu", "bubble", "三明治＋咖啡"),
  storeItem("mojmatcha", "bubble", "抹茶迪拜巧克力"),
  storeItem("yunkafei", "bubble", "意式浓咖啡"),
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

  storeItem("liangquanqimei", "noodles", "手抓饼＋芳香大鸡排"),
  storeItem("ahua", "noodles", "葱油拌面"),
  storeItem("ahua", "noodles", "目鱼干番薯粉"),
  storeItem("xiangmanlou", "noodles", "高山地瓜粉"),
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

  storeItem("ahua", "stirfry", "糯米山药"),
  storeItem("wutong", "stirfry", "飘香鱼", "再配一份豆腐"),
  storeItem("waxiansheng", "stirfry", "哇鲜生招牌牛蛙煲"),
  storeItem("xiangmanlou", "stirfry", "家烧猪蹄＋野生溪鱼"),
  storeItem("wenchenghotel", "stirfry", "南田小炒肉"),
  storeItem("daocaoren", "stirfry", "牛排＋红烧土豆"),
  storeItem("jiudufansi", "stirfry", "地方菜系，进店看今日菜单"),
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
let wheelRotation = 0;
let isSpinning = false;
let currentResult = null;
let customItems = loadJson(STORAGE_KEYS.custom, []);
let historyItems = loadJson(STORAGE_KEYS.history, []);

const elements = {
  categoryList: document.querySelector("#category-list"),
  modeButtons: [...document.querySelectorAll(".mode-button")],
  poolTitle: document.querySelector("#pool-title"),
  poolCount: document.querySelector("#pool-count"),
  wheel: document.querySelector("#wheel"),
  wheelLabels: document.querySelector("#wheel-labels"),
  spinButton: document.querySelector("#spin-button"),
  wheelStatus: document.querySelector("#wheel-status"),
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
  customForm: document.querySelector("#custom-form"),
  customName: document.querySelector("#custom-name"),
  customCategory: document.querySelector("#custom-category"),
  customDish: document.querySelector("#custom-dish"),
  customArea: document.querySelector("#custom-area"),
  clearCustom: document.querySelector("#clear-custom"),
  formMessage: document.querySelector("#form-message"),
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
  return [...seedItems, ...customItems];
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
  elements.wheelStatus.textContent = mode === "all"
    ? `全部 ${pool.length} 个候选，随缘开转`
    : `${category.label}类 ${pool.length} 个候选，准备好了`;
  renderWheel(pool);
}

function renderWheel(pool) {
  const category = mode === "all" ? null : categoryFor(selectedCategory);
  const colors = category?.colors || ["#b94735", "#d8a43e", "#76515b", "#2e5a4c"];
  const displayItems = pool.slice(0, 8);
  const segments = Math.max(displayItems.length, 1);
  const stops = [];
  for (let index = 0; index < segments; index += 1) {
    const start = (index / segments) * 100;
    const end = ((index + 1) / segments) * 100;
    stops.push(`${colors[index % colors.length]} ${start}% ${end}%`);
  }
  elements.wheel.style.background = `conic-gradient(${stops.join(", ")})`;
  elements.wheelLabels.replaceChildren();

  displayItems.forEach((item, index) => {
    const label = document.createElement("span");
    const angle = (360 / displayItems.length) * index + 360 / displayItems.length / 2;
    label.className = "wheel-label";
    label.textContent = item.name.length > 8 ? `${item.name.slice(0, 8)}…` : item.name;
    label.style.transform = `rotate(${angle}deg) translateY(-126px) rotate(${-angle}deg) translate(-50%, -50%)`;
    elements.wheelLabels.append(label);
  });
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function spin() {
  if (isSpinning) return;
  const pool = currentPool();
  if (!pool.length) {
    elements.wheelStatus.textContent = "这个分类还没有候选，先添加一家吧。";
    return;
  }

  isSpinning = true;
  currentResult = randomFrom(pool);
  const extraTurns = 5 + Math.floor(Math.random() * 3);
  const landingOffset = Math.floor(Math.random() * 300) + 30;
  wheelRotation += extraTurns * 360 + landingOffset;
  elements.wheel.style.transform = `rotate(${wheelRotation}deg)`;
  elements.spinButton.disabled = true;
  elements.wheelStatus.textContent = "签筒正在替你们吵架……";
  elements.resultBadge.textContent = "正在抽签";

  window.setTimeout(() => {
    isSpinning = false;
    elements.spinButton.disabled = false;
    elements.wheelStatus.textContent = "决定好了，不许反悔。";
    showResult(currentResult);
    pushHistory(currentResult);
  }, 3350);
}

function showResult(item) {
  const category = categoryFor(item.category);
  elements.resultEmpty.hidden = true;
  elements.resultContent.hidden = false;
  elements.resultContent.classList.remove("is-revealing");
  void elements.resultContent.offsetWidth;
  elements.resultContent.classList.add("is-revealing");
  elements.resultBadge.textContent = item.sourceKind === "platform" ? "点评店铺签" : item.sourceKind === "custom" ? "私房签" : "文成风味签";
  elements.resultNumber.textContent = `NO. ${String(Math.floor(Math.random() * 90) + 10)}`;
  elements.resultCategory.textContent = `${category.label} / ${item.type || "自定义"}`;
  elements.resultName.textContent = item.name;
  elements.resultDish.textContent = item.dish ? `建议就点：${item.dish}` : "到店看当天菜单，听老板推荐。";
  elements.resultMeta.replaceChildren();

  const meta = [
    ["位置", item.area || "文成县"],
    ["人均", item.price ? `约 ¥${item.price}` : "页面暂无"],
    ["评价", Number.isFinite(item.reviews) ? `${item.reviews} 条` : "—"],
    ["数据", item.sourceKind === "platform" ? DATA_UPDATED_AT : item.sourceKind === "custom" ? "当前浏览器" : "公开资料"],
  ];
  meta.forEach(([label, value]) => {
    const wrap = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    wrap.append(dt, dd);
    elements.resultMeta.append(wrap);
  });

  elements.resultSourceNote.textContent = item.sourceKind === "platform"
    ? "价格、评价和推荐菜来自大众点评页面快照，出发前请以平台最新页面为准。"
    : item.sourceKind === "custom"
      ? "这是你自己保存的候选，只存放在当前浏览器。"
      : `来源：${item.source}。地方菜资料不代表具体店铺实时供应。`;

  elements.resultLink.hidden = !item.url;
  if (item.url) elements.resultLink.href = item.url;
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
  dianpingStores.forEach((store, index) => {
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
    link.textContent = `${store.area} · ${store.reviews} 条评价`;
    card.append(top, name, dishes, link);
    elements.storeGrid.append(card);
  });
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
  elements.formMessage.textContent = `“${name}”已经放进签筒。`;
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

async function copyCurrentResult() {
  if (!currentResult) return;
  const text = `今晚吃：${currentResult.name}\n推荐：${currentResult.dish || "到店再点"}\n位置：${currentResult.area || "文成县"}`;
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
    elements.copyResult.textContent = "已复制";
    window.setTimeout(() => { elements.copyResult.textContent = "复制结果"; }, 1400);
  } catch {
    elements.copyResult.textContent = "复制失败";
  }
}

elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mode = button.dataset.mode;
    updateControls();
  });
});
elements.spinButton.addEventListener("click", spin);
elements.copyResult.addEventListener("click", copyCurrentResult);
elements.customForm.addEventListener("submit", addCustomItem);
elements.clearCustom.addEventListener("click", clearCustomItems);

renderStores();
renderHistory();
updateControls();
