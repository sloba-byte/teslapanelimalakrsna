const t=async({fetch:a,params:l})=>{const e=await(await a("https://sheets.googleapis.com/v4/spreadsheets/1m1MZ8M5Klu1JEtz0izLJXnIdBpzYFPBaV0QdMu7ag70/values/TK5_Panel?key=AIzaSyAOEQWWM7bDPWDCeISNqTfduR64vEWK55o")).json();console.log("res:"+e);const o=e.values[0],s=e.values;return s.shift(),console.log("h:"+o),console.log("rest:"+s),{header:o,values:s}},r=Object.freeze(Object.defineProperty({__proto__:null,load:t},Symbol.toStringTag,{value:"Module"}));export{r as _,t as l};
