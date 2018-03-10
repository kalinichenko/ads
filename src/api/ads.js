export const loadAds = () =>
  fetch('/api/ads')
    .then((res) => {
      return res.status >= 400 ? {
        error: res.status,
      } : res.json();
    })
    .then((res) => ({
      data: res,
    }));
