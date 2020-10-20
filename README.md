# itachi_core
itachi_core 放了一些列util类。本来这个项目可以和itachi_util 合在一起。
考虑util可以让前端同学用，特意将一些类拆分出来，弄成一个新项目。但是前端也不用util。-_-
## FileContext
FileContext是context的子类，最重要的方法是:loadFromPath。这个方法会扫描给定的路径，将所有扫描到的js文件、ts文件、json文件。将他们require进来，如果该类有Server装饰器，这个类就会被注册到context中。
``` typescript
var fileContext = new FileContext();
MysqlContext.regContext(fileContext)
fileContext.regClazz('MqttServer',MqttServer);
fileContext.regClazz('RabbitmqServer',RabbitmqServer);
fileContext.regClazz('PosRedis',PosRedis);
//从指定的目录里面载入含有Server标签的类
fileContext.loadFromPath(path.join(__dirname))
```
## util
各种工具类，估计大部分类方法在loadash里面都有了
### ArrayUtil
各种操作Array的工具类
重要方法
join： 一对一关联两个数组。
joinArray: 一对多关联两个数组。
joinMany:多对多关联两个数组。
这几个方法在loadash里面没有，但是很好用。
### BeanUtil
对象处理类。
重要方法
shallowCombine 合并两个类
check(obj, param) 检查param和obj是否一样
shallowClone 浅克隆一个对象
shallowCloneList(list:Array<any>,map?,forbit?:boolean) 克隆一组对象
### DateUtil
日期处理类。
重要方法：
format 格式化日期。
parse 将字符串转成日期。

## BaseHttpEntry
BaseHttpEntry和他的子类，是通过http调用的接口类。
支持各种方法的http和https调用。

## ConfigFac
读取配置类。




