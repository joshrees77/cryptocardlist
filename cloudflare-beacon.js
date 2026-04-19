(function () {
  const token = "YOUR_CLOUDFLARE_WEB_ANALYTICS_TOKEN";

  if (!token || token === "YOUR_CLOUDFLARE_WEB_ANALYTICS_TOKEN") {
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token }));
  document.head.appendChild(script);
})();
