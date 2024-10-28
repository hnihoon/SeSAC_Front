import dotenv from 'dotenv';
// const dotenv = require('dotenv')
dotenv.config();

async function start(){
    const api_key = process.env.GONG_API_KEY;
    const response = await fetch(`https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?${api_key}`)
    const data = await response.json();
    const maparr = data.
    response.body.items.map((num) => {
        return num;
      });
      

      for(let i = 0; i < maparr.length; i++){
        console.log(maparr[i].stationName);
      }
    
    //   console.log(data.response.body);
}

start()

