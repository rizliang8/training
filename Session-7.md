# 回调

正常函数
```javascript
function callback(str) {
  // todo 
  console.log(str);
}

callback('123')
```

异步，有些时候做某些事情需要时间，但是这个时候由于js是单线程，他会在下一次循环的时候检测异步函数状态。
```javascript
setTimeout(() => {
  console.log('I am setTimeout');
},1000);
console.log('before I am setTimeout');
```

为什么会出现回调，有些通用逻辑是需要时间去完成的，我们不能直接拿到返还值，完成之后又根据不一样的场景去做不一样的事情，这个时候就需要回调(callback)。    
我们用setTimeout代表请求返还结果。  
```javascript
// 请求 
function ajax(url, callback) {
  setTimeout(() => {
    const res = {statusCode: 0, message: 'ok', data: [1,2,3,4]}
    callback(res)
  }, 1000);
}

ajax('/posts', function (res) {
  // todo response
  console.log(res);
})

```
## Promise是用来解决什么事情
有时候回调之后需要接着回调，更有一些极端情况，需要不断回调，Promise就是为了解决以下问题。  
回调地狱。
```javascript
ajax('/posts', function (res) {
  ajax('/' + res.url, function (res) {
    ajax('/' + res.done, function () {
      ...
    })
  })
})
```

Promise的语法，当你new Promise的时候，他就马上执行了。
```javascript
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
}).then( param => {

  return new Promise((resolve, reject) => {
    console.log('第一层', param);
    setTimeout(() => {
      resolve(321);
    }, 1000);
  })
  
}).then( param => {
  return new Promise((resolve, reject) => {
    console.log('第二层', param);
    // over
  })
})
```

resolve 是执行成功， reject就是失败，怎么获取reject的值
```javascript
new Promise((resolve, reject) => {
  reject(123);
  // throw new Error('不是123')
}).then(param => {
  console.log(param);
}).catch(err => {
  console.log(err.message);
})
```

# async/await 本质是Promise，他是语法糖
引用 <a href="https://es6.ruanyifeng.com/#docs/async">https://es6.ruanyifeng.com/#docs/async</a>
```javascript
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
```

# 创建一个新的React应用
```shell
$ cnpm install -g create-react-app # 安装，只需要一次
$ create-react-app my-project # 创建应用
```