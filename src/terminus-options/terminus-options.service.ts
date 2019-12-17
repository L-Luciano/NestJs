import {
  TerminusEndpoint,
  TerminusOptionsFactory,
  TerminusModuleOptions,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(private readonly typeOrm: TypeOrmHealthIndicator) {}

  createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: '/health',
      healthIndicators: [async () => this.typeOrm.pingCheck('typeOrm', {})],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
