import LogHelp from '../../src/log/LogHelp'



var logger = new LogHelp()
LogHelp.setEnvName('test');
LogHelp.setLevels(['error','info'])
logger.set({
    context_id:'123',
    store_id:220108,
    brand_id:100090,
    other:{"aaa":123}

})

logger.debug('debug',1);
logger.red('dddd',22)
logger.info('info',1);
logger.green('blue',233);
logger.error('error',{aa:1});
logger.yellow('yellow',{xx:1});
logger.error('error',2)
logger.error('1111111');
logger.error({aa:1});