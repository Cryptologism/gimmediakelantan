// Random TikTok embed (runs after DOM is ready because of "defer")
(function () {
  // IMPORTANT: view via http(s) (GitHub Pages / localhost), not file://
  const ids = [
    "7535009405780151560",
    "7523876437204438280",
    "7524230653819325704",
    "7332783681913818370" // fallback/known-good
  ];

  const spot = document.getElementById("tiktok-spot");
  if (!spot) return;

  // pick random id
  const id = ids[Math.floor(Math.random() * ids.length)];

  // build blockquote in the correct spot
  spot.innerHTML = "";
  const bq = document.createElement("blockquote");
  bq.className = "tiktok-embed";
  bq.style.maxWidth = "325px";
  bq.style.minWidth = "325px";
  bq.setAttribute("cite", `https://www.tiktok.com/@garage.kelate/video/${id}`);
  bq.setAttribute("data-video-id", id);
  bq.appendChild(document.createElement("section"));

  // clickable fallback (shows even if embed is blocked)
  const p = document.createElement("p");
  p.innerHTML = `<a href="https://www.tiktok.com/@garage.kelate/video/${id}" target="_blank" rel="noopener">Open video on TikTok</a>`;
  bq.appendChild(p);

  spot.appendChild(bq);

  // load TikTok embed script once (or re-scan if already present)
  const existing = document.querySelector('script[src^="https://www.tiktok.com/embed.js"]');
  const loader = document.createElement("script");
  loader.src = "https://www.tiktok.com/embed.js";
  loader.async = true;

  if (existing) {
    // re-adding triggers a re-scan of new blockquotes
    document.body.appendChild(loader);
  } else {
    document.body.appendChild(loader);
  }
})();
