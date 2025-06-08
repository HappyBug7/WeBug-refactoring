# WeBug
*A start page made by HappyBug*
# Introduction
This start page project is based on Vue3 and Gin, for front-end and back-end respectively. Only basic module added, leaving spaces for further customization.
# Usage
## Backend
Firstly, clone the back-end from [HappyBug7/WeBug-Back-end: Back end for WeBug](https://github.com/HappyBug7/WeBug-Back-end), and then install `tz-gin`, a custom abstraction based on Gin [xjtu-tenzor/tz-gin-template: tz-gin-template](https://github.com/xjtu-tenzor/tz-gin-template)

After all that, write a `.env` file, according to the template below:
```
APP_SECRET = templete               # session密钥
APP_LANGUAGE = zh                   # 翻译语言
APP_MYSQL_HOST = 127.0.0.1          # MySQL地址
APP_MYSQL_PORT = 3306               # MySQL端口号
APP_MYSQL_NAME = webug              # MySQL数据库名称
APP_MYSQL_USER = root               # MySQL用户名
APP_MYSQL_PASS = ******             # MySQL密码
APP_ALLOW_ORIGINS = *               # 允许跨域的源
APP_ALLOW_HEADERS = Origin|Content-Length|Content-Type|Authorization # 允许跨域的请求头,中间使用`|`作为分隔符
KEY = ***                           # Baidu auto complementation api key
```

orgnize the directory struture as:
```
common\
config\
controller\
middleware\
model\
router\
service\
.env
.gitignore
...
```
then run
```
tz-gin r
```
it should successfully start back-end service

## Frontend
Clone this repo, then run
```
npm install
```
it should download all npm packages needed
then run
```
npm dev
```
it should run successfully as below:
```
> webug-refactoring@0.0.0 dev D:\Coding\webug-refactoring
> vite

Re-optimizing dependencies because lockfile has changed

  VITE v5.4.11  ready in 1346 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
  ➜  Vue DevTools: Press Alt(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools
  ➜  press h + enter to show help
```
then visit [WeBug](http://localhost:5173/), you should see
![[Pasted image 20250608210648.png]]
congrats, you've successfully deployed webug on your device

for production environment, remember to build backend and frontend respectively and then deploy them on your server
```
go build -o back_end
```

```
npm run build
```
