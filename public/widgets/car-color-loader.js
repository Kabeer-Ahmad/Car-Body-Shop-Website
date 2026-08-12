/**
 * Embeddable car-color widget loader. Drop this on any site:
 *   <script src="https://YOUR-DOMAIN/widgets/car-color-loader.js" async></script>
 * Optional: <script ... data-shop="your-shop-id"></script> to identify the shop later.
 * No dependencies, no build step — self-contained vanilla JS.
 *
 * Positioned above the mobile sticky bar so they don't overlap.
 */
(function () {
  var thisScript = document.currentScript;

  // Don't load the floating launcher on the widget page itself (iframe or direct)
  if (/\/widget\/car-color/.test(window.location.pathname)) {
    return;
  }

  // Prefer the script URL origin (cross-site embeds); fall back to page origin
  // when Next.js Script (or similar) leaves currentScript null.
  var origin = thisScript && thisScript.src
    ? new URL(thisScript.src).origin
    : window.location.origin;
  var shopId = (thisScript && thisScript.getAttribute("data-shop")) || "";
  var widgetSrc = origin + "/widget/car-color" + (shopId ? "?shop=" + encodeURIComponent(shopId) : "");

  var STYLE_ID = "car-color-widget-style";
  if (!document.getElementById(STYLE_ID)) {
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent =
      ".ccw-launcher{position:fixed;bottom:24px;right:20px;z-index:999999;" +
      "background:#155dfc;color:#fff;border:none;border-radius:999px;" +
      "padding:14px 20px;font-family:-apple-system,system-ui,sans-serif;" +
      "font-size:14px;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,.25);" +
      "cursor:pointer;transition:transform .15s ease;}" +
      ".ccw-launcher:hover{transform:scale(1.04);}" +
      ".ccw-panel{position:fixed;bottom:24px;right:20px;z-index:999999;" +
      "width:380px;max-width:92vw;height:600px;max-height:70vh;" +
      "background:#fff;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,.3);" +
      "overflow:hidden;display:none;flex-direction:column;}" +
      ".ccw-panel.open{display:flex;}" +
      ".ccw-panel iframe{flex:1;border:none;width:100%;height:100%;}" +
      ".ccw-close{position:absolute;top:8px;right:8px;z-index:1000000;" +
      "background:rgba(0,0,0,.55);color:#fff;border:none;border-radius:999px;" +
      "width:28px;height:28px;font-size:16px;line-height:1;cursor:pointer;}" +
      "@media (max-width:767px){.ccw-launcher,.ccw-panel{bottom:80px;right:12px;}" +
      ".ccw-panel{max-height:calc(100vh - 100px);}}";
    document.head.appendChild(style);
  }

  var launcher = document.createElement("button");
  launcher.className = "ccw-launcher";
  launcher.textContent = "Customise Car Colour";
  launcher.setAttribute("aria-label", "Customise car colour");

  var panel = document.createElement("div");
  panel.className = "ccw-panel";

  var close = document.createElement("button");
  close.className = "ccw-close";
  close.textContent = "×";
  close.setAttribute("aria-label", "Close");

  var iframe = null;

  function open() {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.src = widgetSrc;
      iframe.title = "Car color visualizer";
      panel.appendChild(iframe);
    }
    panel.classList.add("open");
    launcher.style.display = "none";
  }

  function close_() {
    panel.classList.remove("open");
    launcher.style.display = "block";
  }

  launcher.addEventListener("click", open);
  close.addEventListener("click", close_);

  panel.appendChild(close);
  document.body.appendChild(launcher);
  document.body.appendChild(panel);
})();
