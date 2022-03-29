const Mock = require("mockjs");
const data = [
  {
    title:"张三你好",
    author:"张三",
    nun:"10000",
    returnInfo:8
  },
  {
    title:"李四你好",
    author:"李四",
    nun:"20000",
    returnInfo:8
  },
  {
    title:"王五你好",
    author:"王五",
    nun:"1000",
    returnInfo:8
  },
  {
    title:"赵六你好",
    author:"赵六",
    nun:"3000",
    returnInfo:56
  }

]
Mock.mock('/api/list','get',function(config){
  return data
})  
//删除

Mock.mock(/\/api\/list\/delete\/\d/,'delete',function(config){
  console.log(config)
  const index= config.url.split('/').pop()
  console.log(index)
  data.splice(index,1)
  console.log(data)
  return data
  
})




export default Mock