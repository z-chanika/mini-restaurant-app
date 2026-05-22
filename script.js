const menuListElement = document.querySelector("#menu-list");
const orderResultElement = document.querySelector("#order-result");
const orderLogsElement = document.querySelector("#order-logs");

const menuItems = [
  {
    id: 1,
    name: "Curry",
    description: "スパイス香る定番カレー",
    price: 1200,
    stock: 3
  },
  {
    id: 2,
    name: "Pasta",
    description: "トマトソースのパスタ",
    price: 1000,
    stock: 2
  },
  {
    id: 3,
    name: "Salad",
    description: "野菜たっぷりサラダ",
    price: 800,
    stock: 0
  }
];

const orderLogs = [];

function renderMenu() {
  menuListElement.innerHTML = menuItems
    .map((item) => {
      const isSoldOut = item.stock === 0;

      return `
        <article class="menu-card">
          <h3>${item.name}</h3>
          <p class="menu-meta">${item.description}</p>
          <p class="menu-meta">¥${item.price}</p>
          <p class="menu-meta">在庫：${item.stock}</p>
          <button
            class="order-button"
            data-id="${item.id}"
            ${isSoldOut ? "disabled" : ""}
          >
            ${isSoldOut ? "Sold Out" : "Order"}
          </button>
        </article>
      `;
    })
    .join("");
}

function attachOrderButtonEvents() {
  const orderButtons = document.querySelectorAll(".order-button");

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = Number(button.dataset.id);
      handleOrder(itemId);
    });
  });
}
function createOrder(itemId) {
  console.log("[Pseudo API] order received:", { itemId });

  const menuItem = menuItems.find((item) => item.id === itemId);

  if (!menuItem) {
    return {
      ok: false,
      status: "FAILED",
      message: "商品が見つかりませんでした。"
    };
  }

  if (menuItem.stock === 0) {
    return {
      ok: false,
      status: "FAILED",
      itemName: menuItem.name,
      message: `${menuItem.name} は売り切れです。`
    };
  }

  menuItem.stock = menuItem.stock - 1;

  return {
    ok: true,
    status: "SUCCESS",
    itemName: menuItem.name,
    message: `${menuItem.name} の注文が完了しました。`
  };
}

function handleOrder(itemId) {
  console.log("[Frontend] order button clicked:", { itemId });

  const response = createOrder(itemId);

  console.log("[Frontend] response received:", response);

  renderOrderResult(response);
  addOrderLog(response);
  renderMenu();
  attachOrderButtonEvents();
  renderOrderLogs();
}

function renderOrderResult(response) {
  orderResultElement.classList.remove("success", "error");
  orderResultElement.classList.add(response.ok ? "success" : "error");

  orderResultElement.innerHTML = `
    <strong>${response.ok ? "注文成功" : "注文失敗"}</strong><br />
    ${response.message}
  `;
}

function addOrderLog(response) {
  const log = {
    id: Date.now(),
    status: response.ok ? "SUCCESS" : "FAILED",
    message: response.message,
    createdAt: new Date().toLocaleTimeString()
  };

  orderLogs.unshift(log);

  console.log("[Log] order log added:", log);
}

function renderOrderLogs() {
  if (orderLogs.length === 0) {
    orderLogsElement.innerHTML = "<li>注文ログはここに表示されます。</li>";
    return;
  }

  orderLogsElement.innerHTML = orderLogs
    .map((log) => {
      return `<li>[${log.createdAt}] ${log.status} - ${log.message}</li>`;
    })
    .join("");
}

function initApp() {
  console.log("[App] Mini Restaurant App started.");
  renderMenu();
  attachOrderButtonEvents();
}

function initApp() {
  console.log("[App] Mini Restaurant App started.");
  renderMenu();
  attachOrderButtonEvents();
  renderOrderLogs();
}

initApp();