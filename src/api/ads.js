let cache;
export const loadAds = () => (!cache ?
  fetch('/api/ads')
    .then((res) => {
      return res.status >= 400 ? {
        error: res.status,
      } : res.json();
    })
    .then((res) => {
      cache = {
        data: res,
      };
      return cache;
    }) : new Promise(resolve => resolve(cache)));
