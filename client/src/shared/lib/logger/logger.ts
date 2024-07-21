import log from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

// Настройка уровней логирования в зависимости от окружения
log.setLevel(process.env.NODE_ENV === 'production' ? 'error' : 'debug');

// Настройка плагина для добавления префиксов к сообщениям лога
prefix.reg(log);

// Функция для форматирования сообщений
prefix.apply(log, {
  format(level, name, timestamp) {
    return `${timestamp} | ${name} | [${level.toUpperCase()}] | `;
  },
});

export default log;
