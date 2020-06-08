# form, ajax, onclick
<a>1.什么是api</a>  
<a>2.构建简单api</a>  
<a>3.form的概念</a>  
<a>4.onclick事件</a>  

## 1.什么是api。

原则上来说，用HTTP协议请求对应的地址，带对应的参数，返还期望内容，就是api。

## 2.构建简单api

HTTP协议有5种方法，根据RESTful定义，对应的请求方法有对应的约定含义
1.GET  获取  
2.POST  新增  
3.PUT  全更新  
4.DELETE  删除  
5.PATCH  局部更新  

以前只有两种，一种是GET,一种POST。 以前的定义就是GET比较透明，数据都要放在url，用户可以乱调，不安全。 POST如果不是有相关知识，更改不到内容。  
PUT DELETE PATCH其实是POST的补充方法，内容其实跟POST完全一致，但是用的时候就知道自己是新增还是更新。

```javascript
app.post('/posts', function(req, res) {
  res.send({text: '新增成功'});
});

app.put('/posts', function (req, res) {
  res.send({text: '修改成功'});
})
```

## 3.form
当写了`form`表单的`action`，点击`type`为`submit`的`button`，就会把参数`跳转`到`action`的`url`.  
body里面可以放两种参数，一种是`FormData`，一种是`raw-body`

## 4.nodemon
方便后端改动

## Todo Task
1. 回调  
2. 需要了解Promise, 建议看一下阮一峰的ES6  
3. 下次过完Promise，就开始React/vue, 加上Antd库。  
  
附加  
4. Webpack  
5. Typescript  