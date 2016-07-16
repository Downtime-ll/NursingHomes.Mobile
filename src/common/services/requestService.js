
export default {
  async get(url, data = {} , options) {
    let newoptions = {
      caching: 'permanent',
      ...options
    };
    let params = [];
    Object.keys(data).forEach((param) => {
      params.push(`${param}=${encodeURIComponent(data[param])}`);
    });
    params = params.join('&');
    let urlwithParams = `${url}?${params}`;
    const cacheKey = 'cache.' + newoptions.keyPrefix + urlwithParams;
    console.log(urlwithParams);
    if (!newoptions.caching) {
      let keys = await global.storage.getAllKeys();
      await global.storage.multiRemove(keys.filter(key => key.startsWith(newoptions.keyPrefix)));

      console.log(urlwithParams);
      return await fetch(urlwithParams);
      // return await response.json();
    }

    let cached = await global.storage.getItem(cacheKey);
    if (cached) {
        // console.log("from cached")
      return cached;
    } else {
        // console.log("from fetch")
      let response = await fetch(urlwithParams);
      let result = await response.json();
      await global.storage.setItem(cacheKey, result);
      return result;
    }
  },
  async post(url, data = {}) {
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    let response = await fetch(url,options);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`post failed,err stack:${response.error ? response.error() : ''}`);
    }
  }
};
