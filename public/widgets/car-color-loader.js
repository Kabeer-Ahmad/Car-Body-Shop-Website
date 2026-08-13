/**
 * Embeddable car-color widget loader.
 *   <script src="https://YOUR-DOMAIN/widgets/car-color-loader.js" async></script>
 */
(function () {
  var thisScript = document.currentScript;

  if (/\/widget\/car-color/.test(window.location.pathname)) {
    return;
  }

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
      "display:inline-flex;align-items:center;gap:8px;" +
      "background:linear-gradient(135deg,#1d4ed8,#155dfc);color:#fff;border:none;border-radius:999px;" +
      "padding:14px 20px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;" +
      "font-size:14px;font-weight:600;letter-spacing:.01em;" +
      "box-shadow:0 8px 24px rgba(21,93,252,.35);cursor:pointer;" +
      "transition:transform .18s ease,box-shadow .18s ease;}" +
      ".ccw-launcher:hover{transform:translateY(-1px) scale(1.03);box-shadow:0 12px 28px rgba(21,93,252,.42);}" +
      ".ccw-launcher:active{transform:scale(.98);}" +
      ".ccw-launcher svg{width:18px;height:18px;flex-shrink:0;}" +
      ".ccw-backdrop{position:fixed;inset:0;z-index:999998;background:rgba(15,23,42,.45);" +
      "opacity:0;pointer-events:none;transition:opacity .2s ease;}" +
      ".ccw-backdrop.open{opacity:1;pointer-events:auto;}" +
      ".ccw-panel{position:fixed;bottom:24px;right:20px;z-index:999999;" +
      "width:400px;max-width:calc(100vw - 24px);height:640px;max-height:calc(100vh - 48px);" +
      "background:#fff;border-radius:20px;box-shadow:0 20px 50px rgba(15,23,42,.28);" +
      "overflow:hidden;display:none;flex-direction:column;" +
      "transform:translateY(12px) scale(.98);opacity:0;" +
      "transition:transform .22s ease,opacity .22s ease;}" +
      ".ccw-panel.open{display:flex;transform:translateY(0) scale(1);opacity:1;}" +
      ".ccw-header{flex-shrink:0;display:flex;align-items:center;justify-content:space-between;" +
      "gap:12px;padding:14px 16px;background:linear-gradient(135deg,#0f172a,#1e3a8a);color:#fff;}" +
      ".ccw-header-title{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;" +
      "font-size:15px;font-weight:700;line-height:1.2;}" +
      ".ccw-header-sub{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;" +
      "font-size:11px;opacity:.7;margin-top:2px;}" +
      ".ccw-close{flex-shrink:0;background:rgba(255,255,255,.15);color:#fff;border:none;" +
      "border-radius:999px;width:32px;height:32px;font-size:20px;line-height:1;" +
      "cursor:pointer;display:flex;align-items:center;justify-content:center;}" +
      ".ccw-close:hover{background:rgba(255,255,255,.25);}" +
      ".ccw-panel iframe{flex:1;border:none;width:100%;height:100%;background:#f8fafc;}" +
      "@media (max-width:767px){" +
      ".ccw-launcher{bottom:80px;right:12px;left:auto;max-width:calc(100vw - 24px);" +
      "padding:10px 14px;font-size:12px;gap:6px;box-shadow:0 6px 18px rgba(21,93,252,.3);}" +
      ".ccw-launcher svg{width:14px;height:14px;}" +
      ".ccw-panel{top:auto;left:0;right:0;bottom:0;width:100%;max-width:100%;" +
      "height:min(92vh,720px);max-height:calc(100dvh - 8px);" +
      "border-radius:20px 20px 0 0;transform:translateY(100%);opacity:1;}" +
      ".ccw-panel.open{transform:translateY(0);}" +
      "}";
    document.head.appendChild(style);
  }

  var launcher = document.createElement("button");
  launcher.className = "ccw-launcher";
  launcher.setAttribute("aria-label", "Customise car colour");
  launcher.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>' +
    '<circle cx="12" cy="12" r="4"/></svg>' +
    "<span>Customise Car Colour</span>";

  var backdrop = document.createElement("div");
  backdrop.className = "ccw-backdrop";

  var panel = document.createElement("div");
  panel.className = "ccw-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "true");
  panel.setAttribute("aria-label", "Customise Car Colour");

  var header = document.createElement("div");
  header.className = "ccw-header";
  header.innerHTML =
    '<div><div class="ccw-header-title">Customise Car Colour</div>' +
    '<div class="ccw-header-sub">Preview a new paint finish on your car</div></div>';

  var close = document.createElement("button");
  close.className = "ccw-close";
  close.innerHTML = "&times;";
  close.setAttribute("aria-label", "Close");
  header.appendChild(close);

  var iframe = null;

  function open() {
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.src = widgetSrc;
      iframe.title = "Customise Car Colour";
      iframe.allow = "clipboard-write";
      panel.appendChild(iframe);
    }
    backdrop.classList.add("open");
    panel.classList.add("open");
    launcher.style.display = "none";
    document.documentElement.style.overflow = "hidden";
  }

  function close_() {
    backdrop.classList.remove("open");
    panel.classList.remove("open");
    launcher.style.display = "";
    document.documentElement.style.overflow = "";
  }

  launcher.addEventListener("click", open);
  close.addEventListener("click", close_);
  backdrop.addEventListener("click", close_);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && panel.classList.contains("open")) close_();
  });

  panel.appendChild(header);
  document.body.appendChild(launcher);
  document.body.appendChild(backdrop);
  document.body.appendChild(panel);
})();
