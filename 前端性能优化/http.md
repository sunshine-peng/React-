get / http1.1
refer: 值
user-agent
etag:
cache-control




http 响应
Content-length: 7877长度
空行
body <html>
标题信息 都是http body
</html>


DNS预加载
1. 如何少加载文件
    1. 合理利用浏览器的文件缓存

main.js的加载来看待这个问题
1. 首次加载 http请求， server正常返回
    1. 返回响应头加上强缓存说明(这是针对时间的)
    2. expire: wed 11 May 2020 16:04:00(过期时间)
    3. cache-control: max-age=3135650000时间精准，优先级高
    4. 两个header都是浏览器告诉后端，这个文件，多好时间不过期(比如一小时)
    5. 浏览器接收上面两个header,都会将文件件存起来
    

    2. 1小时请求这个文件
        1. 浏览器识别到 强缓存命中，请求不发出，直接使用本地的缓存文件 状态码是200 from cache

    3. 2个小时候在此请求这个文件，强缓存失效，使用协商缓存，
        1. 浏览器不会慧姐发出请求、而是问一下后端，header带上请求头
            1. if-modfile-since: 日期  后端小老弟，这个文件，在这个日子之后，有没有修改过
            2. 后端告诉你 没改过 响应码 304 not modfile
            3. 浏览器使用缓存
            4. 优先级更高的， 是etag 文件指纹 内容不变 指纹不变
     4. 后端告诉你改过了 只能重新加载  