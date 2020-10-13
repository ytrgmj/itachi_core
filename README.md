### Publish

> 注: package.json -> name -> @dt/itachi_core 使用时注意

* npm `login` --registry=http://nexus.downtown8.com:8081/repository/npm-hosted
  * user: downtown
  * pwd: downtown#2013
  * email: ...
* `tsc`
* package.json
  * `version++` (不支持原版本更新)
* npm `publish` --registry=http://nexus.downtown8.com:8081/repository/npm-hosted

> 如果有权限问题, 把各个 registry logout 下, 然后再试试