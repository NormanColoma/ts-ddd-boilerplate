import winston from 'winston';
import Logger from '../../domain/services/logger';

const { combine, timestamp, json, errors } = winston.format;

const newLinesRemover = winston.format((info) => {
  info.message = info.message.replace(/\n|\r/g, '');
  return info;
})();

class WinstonLogger implements Logger {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: combine(
        newLinesRemover,
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss', alias: 'dateTime' }),
        errors({ stack: false }),
        json()),
      transports: [new winston.transports.Console()],
    });
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }
}

export default WinstonLogger;
