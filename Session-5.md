### 0.express入门
在自己的项目上面按
```shell
npm init # 初始化项目，一直回车
```

### 1.使用阿里云的npm
直接使用npm是外国的镜像很慢，我们需要用国内的镜像。  
现在切换阿里的镜像。

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 2.file 与 http
如果用本地文件开发，就是 `file://` 开头，很多东西都操作不了，比如`ajax`。  
你可以见到有很多东西都是 `http://` | `https://` 开头。  
为了让我们方便操作，应该搭建本地服务器。

### 3.新建express服务器
先安装 `express`
```
cnpm install -S express
```
上面的命令意思是安装 `express` 的包，并且添加到依赖。 
依赖有两种，一种是`--save`(等-S) `--dev`(-D)。  
`--save`的包会进入`dependencies`，-D会进入`devDependencies`。  
下载完之后会在项目里出现 `node_modules`。

### 3.1 入口文件 index.js
```js
// require 代表引入什么包，前提是你已经install的包，否则报错
// require('express') => 引入 express的包
const express = require('express');

// 创建app
const app = express();

// 创建静态文件
app.use('/', express.static('public'));

// 创建服务
app.listen(8888, () => {
  console.log('Open success');
})
```

然后执行
```shell
node index.js
```

见到Open Success就代表成功运行了。  

`express.static`的意思就是可以直接访问的文件。

### 0.1 题外话 let 和 var 区别
`var`可以变量提升, `let`不可以 

**example 1 for var and let**
```js
 (function() {
    console.log(a);
    var a = 1;
})()
```

```js
(function() {
    console.log(a);
    let a = 1;
})()
```

### 0.2 题外话， 3元，新3元

经典三元
```js
1 ? 2 : 3
```

缩三元
```js
1 ?? 3
```

```js
0 undefined null false
```

### 0.3 今天over了，任务和其他题外话
Mission: 
了解`form`, `ajax`, `onclick`  
check完之后就开始学React了。

很多事情回过头来看才知道是什么，打基础虽然重要，但是时代不一样了，回头学习法才是这个时代的王道。  
你有没有想过自己是处于哪个level（无论是技术还是社会阶层，你要怎么打败其他人）。  
舒适区。  
我以前想面试的时候，职业规划没用，就是胡说八道，钱是王道，现在意识到，职业规划就是未来，就是一切。  

