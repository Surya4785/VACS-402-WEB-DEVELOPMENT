// Fetching the data from an API.

const url="https://fakestoreapi.com/products/";
const option={};
const pr=fetch(url,option);
console.log(pr);

const successCB=(res)=>{
  //  console.log("Data Fetched, res");
    const pr2=res.json();
    pr2.then(result);
}

const errorCB=(res)=>{
    console.log("Data Failed", res);
}
pr.then(successCB).catch(errorCB);

const result=(data)=>{
    console.log("Final Data here", data)
}