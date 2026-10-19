import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}
  async health(): Promise<{ server: string; database: string }> {
    const status = { server: '', database: '' };
    status.database = await this.databaseHealth();
    status.server = 'ok';
    return status;
  }

  async databaseHealth(): Promise<string> {
    await this.dataSource.query('SELECT 1');
    return 'ok';
  }
}
