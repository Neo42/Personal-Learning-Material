//创建一个新的XHL对象
var http = new XMLHttpRequest();

http.open(method, url, async);
//method：请求的类型；GET 或 POST
//url：文件在服务器上的位置
//async：true（异步）或 false（同步）

(function addPic() {
  var xhr = new XMLHttpRequest();
  var url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.response));
    }
  }
  xhr.open('GET', url, true);
  xhr.send();
  console.log('text');
})();
