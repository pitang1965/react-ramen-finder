const debugMode = false;

const currentLocation = async () => {
  return new Promise((resolve, reject) => {
    let latitude = 35.7;
    let longitude = 139.7;
    // let latitude = 39.7;
    // let longitude = 149.7;
  
    if (debugMode || !navigator.geolocation) {
      resolve ({ latitude, longitude });
      // このブラウザでは位置情報を利用できないので適当な値を返す。
    }
  
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      // console.log(`緯度:${latitude}　経度:${longitude}`);
      resolve ({ latitude, longitude });
    });
  });
};

module.exports = { currentLocation };
