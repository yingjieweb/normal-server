console.log('这是一段JavaScript代码！')

getCss.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET','/style.css');
  http.onreadystatechange = ()=>{
    if (http.readyState === 4){ //当前仅表示下载完成，不知道是下载成功的完成还是失败的完成
      if(http.status === 200){
        let style = document.createElement('style');
        style.innerHTML = http.response;
        document.head.appendChild(style);
      }else{
        console.log('css加载失败')
      }
    }
  }
  http.send();
}

getJS.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET','/main.js');
  http.onreadystatechange = ()=>{
    if (http.readyState === 4){ //当前仅表示下载完成，不知道是下载成功的完成还是失败的完成
      if(http.status === 200){
        let script = document.createElement('script');
        script.innerHTML = http.response;
        document.body.appendChild(script);
      }else{
        console.log('css加载失败')
      }
    }
  }
  http.send();
}

getHTML.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET','/block.html');
  http.onreadystatechange = ()=>{
    if (http.readyState === 4) { //当前仅表示下载完成，不知道是下载成功的完成还是失败的完成
      let template = document.createElement('div');
      template.innerHTML = http.response;
      document.body.appendChild(template);
    }
  }
  http.send();
}

getXML.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET','/message.xml');
  http.onreadystatechange = () => {
    if (http.readyState === 4){ //当前仅表示下载完成，不知道是下载成功的完成还是失败的完成
      if(http.status === 200){
        const dom = http.responseXML;   //XMLHttpRequest对象自带一个responseXML属性，直接是个dom元素
        const text = dom.getElementsByTagName(' warning')[0].textContent;
        console.log(text. trim())
      }else{
        console.log('css加载失败')
      }
    }
  }
  http.send();
}

getJSON.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET','/data.json');
  http.onreadystatechange = () => {
    if (http.readyState === 4){ //当前仅表示下载完成，不知道是下载成功的完成还是失败的完成
      if(http.status === 200){
        span.textContent = JSON.parse(http.response).name;  //将json字符串转换为对象（不一定全是对象）
      }else{
        console.log('css加载失败')
      }
    }
  }
  http.send();
}

let pageFlag = 1;
getPage.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET',`/page${pageFlag + 1}.json`);
  http.onreadystatechange = () => {
    if (http.readyState === 4){ //当前仅表示下载完成，不知道是下载成功的完成还是失败的完成
      if(http.status === 200){
        let array = JSON.parse(http.response);
        array.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.id;
          ul.appendChild(li);
        });
        pageFlag += 1;
      }else{
        console.log('css加载失败')
      }
    }
  }
  http.send();
}