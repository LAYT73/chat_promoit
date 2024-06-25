import log from 'loglevel';

log.setLevel(process.env.NODE_ENV === 'production' ? 'error' : 'debug');

export default log;
