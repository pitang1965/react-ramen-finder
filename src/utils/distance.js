// https://keisan.casio.jp/exec/system/1257670779

const deg2rad = (deg) => deg * (Math.PI / 180);

const distance = (latitude1, longitude1, latitude2, longitude2) => {
  if (!latitude2 || !longitude2)
    return (Infinity);
  
  const r = 6378.137; // 赤道半径[km]

  const { sin, cos, acos, round } = Math;

  const y1 = deg2rad(latitude1);
  const y2 = deg2rad(latitude2);
  const x1 = deg2rad(longitude1);
  const x2 = deg2rad(longitude2);

  const deltaX = x2 - x1; //経度の差

  const distance =
    r * acos(sin(y1) * sin(y2) + cos(y1) * cos(y2) * cos(deltaX));

  // kmからmに変換し、10mで丸める。

  return round(distance * 100) * 10;
};

module.exports = distance;