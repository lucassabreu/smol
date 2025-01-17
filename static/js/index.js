document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".article-summary").forEach((e) =>
    e.addEventListener("click", function () {
      window.location.href = e.querySelector("header h2 a").href;
    })
  );

  // copied from: https://web.dev/browser-level-image-lazy-loading/
  if ("loading" in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      img.src = img.dataset.src;
      img.addEventListener(
        "load",
        () => (img.className = img.className + " lazyloaded")
      );
    });
  } else {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js";
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.integrity =
      "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.crossorigin = "anonymous";
    script.referrerpolicy = "no-referrer";
    document.body.appendChild(script);
  }

  document.querySelectorAll("a.heading-anchor").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const i = document.createElement("input");
      i.style.visibility = "none";
      i.value = anchor.href;

      document.body.appendChild(i);
      i.select();

      document.execCommand("copy");
      i.remove();
    });
  });
});

window.addEventListener("scroll", () => {
  const el = document.getElementById("back-to-top");
  const show =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;

  el.className = show ? "show" : "hide";
});
