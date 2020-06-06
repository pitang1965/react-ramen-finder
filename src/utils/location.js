const currentLocation = async (demoMode = false) => {
  return new Promise((resolve, reject) => {
    let latitude = 35.7;
    let longitude = 139.7;
    if (demoMode || !navigator.geolocation) {
      console.log(`#1 緯度:${latitude}　経度:${longitude}`);
      // このブラウザでは位置情報を利用できないので適当な値を返す。
      resolve({ latitude, longitude });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(`#2 緯度:${latitude}　経度:${longitude}`);
        resolve({ latitude, longitude });
      }, (error) => {
        if (error.code === 1) {
          console.log(error.code);
          resolve({ latitude, longitude });
        }
        else {
          reject(error);
        }
      });
    }
  });
};

module.exports = { currentLocation };
