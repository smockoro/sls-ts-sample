import { injectable } from 'inversify';

@injectable()
class DatabaseConfig {
  public readonly host: string;
  public readonly port: string;
  public readonly user: string;
  public readonly password: string;
  public readonly database: string;

  constructor(
    host: string,
    port: string,
    user: string,
    password: string,
    database: string
  ) {
    this.host = host;
    this.port = port;
    this.user = user;
    this.password = password;
    this.database = database;
  }
}

export { DatabaseConfig };
