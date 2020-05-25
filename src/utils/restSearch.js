const axios = require('axios');
const distance = require('./distance');

const BASE_URL_REST_SEARCH = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'; // レストラン検索API
const BASE_URL_PHOTO_SEARCH = 'https://api.gnavi.co.jp/PhotoSearchAPI/v3/'; // 応援口コミAPI
const CATEGORY_S = 'RSFST08008'; // ラーメン

const restSearchApi = async (KEYID, latitude, longitude) => {
  return new Promise(async (resolve, reject) => {
    try {
      const range = 5;
      const otherParams = `&category_s=${CATEGORY_S}&latitude=${latitude}&longitude=${longitude}&range=${range}`; // &から始めること
      const url = `${BASE_URL_REST_SEARCH}?keyid=${KEYID}${otherParams}`;
      console.log(url);
      const res = await axios.get(encodeURI(url));

      // 距離追加
      for(let rest of res.data.rest) {
        rest.distance = distance(
          latitude,
          longitude,
          rest.latitude,
          rest.longitude
        );
      };

      resolve(res.data.rest); // この下には name, latitude, longitude, image_urlを含む複数レストランの配列がある。
    } catch (err) {
      reject(err.response); // この下には status, statusTextなどある。
    }
  });
};

const restByIdApi = async (KEYID, id) => {
  return new Promise(async (resolve, reject) => {
    try {
       const url = `${BASE_URL_REST_SEARCH}?keyid=${KEYID}&id=${id}`;
      console.log(url);
      const res = await axios.get(url);

      resolve(res.data.rest[0]); // この下には name, latitude, longitude, image_urlを含む複数レストランの配列がある。
    } catch (err) {
      reject(err.response); // この下には status, statusTextなどある。
    }
  });
};

const imageUrlsByIdApi = async (KEYID, shopId) => {
  return new Promise(async (resolve, reject) => {
    try {
       const url = `${BASE_URL_PHOTO_SEARCH}?keyid=${KEYID}&shop_id=${shopId}`;
      // console.log(url);
      const res = await axios.get(url);

      const urls = [];

      for (let i = 0; i < res.data.response.total_hit_count; i++) {
        urls.push(res.data.response[i].photo.image_url.url_320);
      }

      resolve(urls); // この下にはphoto.image_url.url_1024 を含む複数レストランの配列がある。
    } catch (err) {
      reject(err.response); // この下には status, statusTextなどある。
    }
  });
};

module.exports = { restSearchApi, restByIdApi, imageUrlsByIdApi };
