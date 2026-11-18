# 照片日记 接口文档

## GET /api/diaries
- 作用: 取出全部日记
- 地址：http://localhost:3000/api/diaries
- 方法：GET
- 请求体：无
- 返回：状态码 200，JSON 数组，每条含 title / mood / date
- 返回示例：
[
  { "title": "第一天", "mood": "开心", "date": "11.07" }
]

## GET /api/owner
- 作用: 取出作者姓名
- 地址: http://localhost:3000/api/owner
- 方法: GET
- 请求体: 无
- 返回: 状态码200,返回的是一个JSON对象，里面有个owner字段
- 返回示例:{"owner":"李俊豪"}

## POST /api/diaries
- 作用: 往日记里新加一条
- 地址: http://localhost:3000/api/diaries
- 方法: POST
- 请求体: test = {"title"="测试","mood"="测试","date"="测试"}
- 返回: 状态码200,返回的是JSON数组,包含 title/mood/date
- 返回示例:[
  {"title"="1","mood"="1","date"="1"}
  {2}
  {3}
  {4}
]