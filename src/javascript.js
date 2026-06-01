export function onScrollParallax(imgEl) {
  if (!imgEl || !imgEl.parentElement) return;

  const rect = imgEl.parentElement.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;

  // progress: 0 when the container just enters from the bottom of the viewport,
  //           1 when it has fully exited past the top.
  // This makes the image feel "pinned" — it lags behind the scroll.
  const totalTravel = vh + rect.height;
  const traveled = vh - rect.top;
  const progress = Math.max(0, Math.min(1, traveled / totalTravel));

  const imgH = imgEl.offsetHeight;
  const containerH = rect.height;
  const maxShift = Math.max(0, imgH - containerH);

  imgEl.style.transform = `translateY(${-(progress * maxShift)}px)`;
}