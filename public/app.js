document.getElementById('search').onfocus = function () {
  // this 
  document.getElementById('search-list').style.display = "block"
}

document.getElementById('search').onblur = function () {
  // this 
  document.getElementById('search-list').style.display = "none"
}

fetch('/posts', {method: "GET"})
  .then( res => {
    if (res.status != 200) {// 报错

    }
    return res.json();
  }).then( json => {
    renderPostList(json);
  })

function renderPostList(postList) {
  let str = ""
  for (let i = 0; i < postList.length; i++) {
    /*
      <div class="content-item">每一个title</div>
    */
    str += '<div class="content-item">' 
      + '<div class="title-font">' 
      + postList[i].title 
      + '</div>' 
      + '<br/>' 
      + '<div class="flex content-img">' 
      + '<img src="' + (postList[i].img ?? '') + '">' 
      + '<div class="content-font">' 
      + (postList[i].content ?? '')
      + '</div>' 
      + '</div>' 
      + '<br/>' 
      + '<div class="foot">' 
      + '<div class="up-wrapper">' 
      + '<div class="angle">' 
      + (postList[i].angle ?? '')
      + '</div>' 
      + '<div class="up">' 
      + (postList[i].up ?? '') + '</div>' 
      + '</div>' 
      + '<div class="downwrapper">'
      + (postList[i].downwrapper ?? '')
      + '</div>'+'<div class="down">' 
      + (postList[i].down ?? '')
      + '</div>'+'<div class="foot-wrapper">' 
      + (postList[i].comment ?? '')
      + '</div>'+'<div class="foot-wrapper">' 
      + (postList[i].share ?? '')
      + '</div>'+'<div class="foot-wrapper">' 
      + (postList[i].collection ?? '')
      + '</div>' 
      + '<div class="foot-wrapper">' 
      + (postList[i].like ?? '')
      + '</div>'+'</div>'+'</div>'
  
    // 执行内容， i ++ ->继续执行 直到不满足第二个内容里面的条件
    // document.getElementById('dynamic-list').appendChild('<div class="content-item"></div>');
  }
  document.getElementById('dynamic-list').innerHTML = str
  console.log(str);
  console.log(postList);
  
}
// let postList = [
//   { title: "有哪些网络副业可做？", content: "中新网客户端6月3日电(谢艺观)6月3日，香港恒生指数现横盘震荡态势，收涨1.37%，实现“三连阳”。个股方面，五菱汽车收盘大涨53.27%，盘中一度暴涨126.13%；美团点评收涨5.57%，盘中一度涨超9%，市值突破9000亿港元。",collapse:true,  },
//   { title: "程序员喜欢逛什么样的网站呢？", content:"c2" },
//   { title: "程序员喜欢逛什么样的网站呢？", content: "九章算法： 1.Github 敲有意思，比如能用Python最高效地在抖音找漂亮小姐姐，自动生成动漫人脸~ 好了，正经点。Github是程序员托管代码的平台，很多开发者都会在上面找各种各样的开源项目来学习。",img:"img/tupian.jpg",up: "赞同1.1万",angle:"", down:"",downwrapper:"", comment:"281条评论" ,share:"分享",collection:"收藏",like:"喜欢", },
//   { title: "t4", content: "c4", },
// ];