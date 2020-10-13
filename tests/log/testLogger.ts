import LogHelp from '../../src/log/LogHelp'


var logger = new LogHelp()
logger.set({
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
