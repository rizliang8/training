const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.get('/posts', function (req, res) {
  res.send('');
  // res.send([
  //   { title: "有哪些网络副业可做？", content: "中新网客户端6月3日电(谢艺观)6月3日，香港恒生指数现横盘震荡态势，收涨1.37%，实现“三连阳”。个股方面，五菱汽车收盘大涨53.27%，盘中一度暴涨126.13%；美团点评收涨5.57%，盘中一度涨超9%，市值突破9000亿港元。",collapse:true,  },
  //   { title: "程序员喜欢逛什么样的网站呢？", content:"c2" },
  //   { title: "程序员喜欢逛什么样的网站呢？", content: "九章算法： 1.Github 敲有意思，比如能用Python最高效地在抖音找漂亮小姐姐，自动生成动漫人脸~ 好了，正经点。Github是程序员托管代码的平台，很多开发者都会在上面找各种各样的开源项目来学习。",img:"img/tupian.jpg",up: "赞同1.1万",angle:"", down:"",downwrapper:"", comment:"281条评论" ,share:"分享",collection:"收藏",like:"喜欢", },
  //   { title: "t4", content: "c4", },
  // ]);
});

app.post('/posts', function(req, res) {
  res.send({text: '新增成功'});
});

app.put('/posts', function (req, res) {
  res.send({text: '修改成功'});
})

app.listen(8999, () => {
  console.log('Open success');
})