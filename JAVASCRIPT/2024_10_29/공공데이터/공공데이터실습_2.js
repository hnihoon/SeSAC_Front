import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

function filterNetworkError(data) {
  const result = data.filter((el) => {
    if (el.pm25Flag === '통신장애') return false;

    return true;
  });
  return result;
}

async function fetchDustInfo() {
  const apiKey = process.env.GONG_API_KEY;
  const URL =
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?${apiKey}`;
  const res = await fetch(URL);
  let data = await res.json();

  data = data.response.body.items;

  // 통신장애 데이터를 거르고 싶다.
  data = filterNetworkError(data);

  let minPm25Value = Infinity;
  let minPm25StationName = '';

  for (let datum of data) {
    const pm25Value = parseInt(datum.pm25Value);

    if (pm25Value < minPm25Value) {
      minPm25Value = pm25Value;
      minPm25StationName = datum.stationName;
    }
  }
  console.log(minPm25Value);
  console.log(minPm25StationName);
}

fetchDustInfo();
