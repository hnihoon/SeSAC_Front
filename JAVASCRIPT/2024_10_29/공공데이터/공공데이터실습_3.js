import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

async function fetchDustInfo() {
  const apiKey = process.env.GONG_API_KEY;
  const URL =
    `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?${apiKey}`;
  const res = await fetch(URL);
  let data = await res.json();

  data = data.response.body.items;

  const objectData = {};
  for(let datum of data) {
    const stationName = datum.stationName;
    objectData[stationName] = datum
  }
  console.log(objectData['광진구']);
  
}

fetchDustInfo();
