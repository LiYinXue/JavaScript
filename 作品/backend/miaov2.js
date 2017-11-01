const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const app = express();

const fs = require('fs');
const bodyParser = require('body-parser')

// 设置静态文件
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())  // 解析json的格式

const utils = require('./lib/utils.js')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
let shopList = {};
fs.readFile('./data/shop-list.json', (error, data) => {
  shopList = {
    list: JSON.parse(data.toString())
  }
})

// let shopItem = {};
// fs.readFile('./data/shop-item.json', (error, data) => {
//   shopItem = {
//     list: JSON.parse(data.toString())
//   }
// })

app.get('/api/list', (req, res) => {
  // 暂时先已读取的形式
  res.send(shopList)
})

app.post('/api/setShopCarList', (req, res) => {
  let {carList} = req.body
  let isExist = fs.existsSync('./data/carList.json')
  let arr = []
  if(isExist){
    let d = fs.readFileSync('./data/carList.json')
    if(d.toString()){
      arr = JSON.parse(d);
    }

  }

  let getDate = JSON.parse(carList);

  let findData = arr.find((item) => {
    return item.spec_id === getDate.spec_id
  })

  if(findData){
    if(findData.sku_num < 5){
      findData.sku_num = ++findData.sku_num
    }else{
      res.send({
        code: 1,
        mesText: '已达到上限',
        car_list: arr
      })
      return;
    }


  }else {
    getDate.sku_num = 1
    getDate.item_price = shopItem.list[getDate.spec_id].data.item_price
    arr.push(getDate);
  }

  fs.writeFileSync('./data/carList.json', JSON.stringify(arr))

  res.send({
    code: 0,
    car_list: arr
  })


})



app.get('/api/getShopCarList', (req, res) => {
  let isExist = fs.existsSync('./data/carList.json')
  if(isExist){
    let d = fs.readFileSync('./data/carList.json')
    if(d.toString()){
      res.send({
        car_list: JSON.parse(d)
      })
    }
    return

  }
  res.send({
    car_list: []
  })
})
//  fs.readFile('./data/shop-item.json', (error, data) => {
//   let data2 = JSON.parse(data.toString());
//   let json = {};
//   data2.map((item) => {
//     if(item.data){
//       json[item.data.id] = item
//     }
//   })
// }) 

app.post('/api/removeCarShopById', (req, res) => {
  let {removeId} = req.body;
  let isExist = fs.existsSync('./data/carList.json')
  if(isExist){
    let d = fs.readFileSync('./data/carList.json')
    if(d.toString()){
      d = JSON.parse(d.toString())
      d = d.filter(item => {
        return item.spec_id !== removeId
      })
      fs.writeFileSync('./data/carList.json', JSON.stringify(d))
      res.send({
        car_list: d
      })
    }
  }
})

app.get('/item', (req, res) => {
  let {id} = req.query;

})
//'192.168.2.81',
app.listen(8000,  () => {
  console.log('Listening on: http://localhost:8000');
});
