const winston = require('winston');
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, colorize, prettyPrint} = format;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            format: combine(
                timestamp(),
                colorize(),
                prettyPrint()
            )
        }),
        new winston.transports.File({
            filename: 'combined.log',
            format: combine(
                timestamp(),
                colorize(),
                prettyPrint()
            )
        }),
    ],
});

if (process.env.NODE_ENV === 'development') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;