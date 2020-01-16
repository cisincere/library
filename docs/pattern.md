## URL和方法命名规范

### RESTFUL URL命名规范

API URI design
API URI 设计最重要的一个原则： nouns (not verbs!) ，名词（而不是动词）。

CRUD 简单 URI：

|  方法   | URL       |       功能       |
|--------|-----------|------------------|
| GET    | /user    | 获取用户列表       |
| GET    | /user/1  | 获取 id 为 1 的用户|
| POST   | /user    | 创建一个用户       |
| PUT    | /user/1  | 替换 id 为 1 的用户|
| PATCH  | /user/1  | 修改 id 为 1 的用户|
| DELETE | /user/1  | 删除 id 为 1 的用户|

上面是对某一种资源进行操作的 URI，那如果是有关联的资源，或者称为级联的资源，该如何设计 URI 呢？比如某一用户下的产品：

|  方法   | URL                 |             功能                   |
|--------|---------------------|------------------------------------|
| GET    | /user/1/product   | 获取 Id 为 1 用户下的产品列表         |
| GET    | /user/1/product/2 | 获取 Id 为 1 用户下 Id 为 2 的产品    |
| POST   | /user/1/product   | 在 Id 为 1 用户下，创建一个产品       |
| PUT    | /user/1/product/2 | 在 Id 为 1 用户下，替换 Id 为 2 的产品|
| PATCH  | /user/1/product/2 | 修改 Id 为 1 的用户下 Id 为 2 的产品  |
| DELETE | /user/1/product/2 | 删除 Id 为 1 的用户下 Id 为 2 的产品  |

## 请求规范

### Ajax请求
一定要携带authorization参数，该参数是后端需要校验的参数!!
在api中写ajax请求，数据处理可以放在当前模块的js，也可以在utils中写通用解析