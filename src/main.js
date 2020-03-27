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
  http.onload = ()=>{
    let script = document.createElement('script');
    script.innerHTML = http.response;
    document.body.appendChild(script);
  }
  http.onerror = ()=>{
    console.log('请求失败');
  }
  http.send();
}

getHTML.onclick = ()=>{
  let http = new XMLHttpRequest();
  http.open('GET','/block.html');
  http.onload = ()=>{
    let template = document.createElement('div');
    template.innerHTML = http.response;
    document.body.appendChild(template);
  }
  http.onerror = ()=>{
    console.log('请求失败');
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

