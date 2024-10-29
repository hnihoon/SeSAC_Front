import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

async function fetchDustInfo() {
  const apiKey = process.env.GONG_API_KEY_2;
  
  const baseURL =
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc";
  const path = '/getCtprvnRltmMesureDnsty'
  const params = new URLSearchParams({
    serviceKey: apiKey,
    returnType: 'json',
    numOfRows: 100,
    pageNo: 1,
    sidoName: '서울',
    ver: '1.0'
  })
  const URL = `${baseURL}${path}?${params}`;
  const res = await fetch(URL);
  let data = await res.text();

  console.log(data);
}

fetchDustInfo();
