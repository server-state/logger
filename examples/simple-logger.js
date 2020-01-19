const logger = require('../src/index');

const rootLogger = logger.getLogger('root');

console.log(JSON.stringify(rootLogger, null, 2));

logger.trace('Test test');
logger.fatal('Lol');
//logger.fatal('Something exceptional happened.');
