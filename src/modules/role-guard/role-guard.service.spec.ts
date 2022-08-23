import { Test, TestingModule } from '@nestjs/testing';
import { RoleGuardService } from './role-guard.service';

describe('RoleGuardService', () => {
  let service: RoleGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleGuardService],
    }).compile();

    service = module.get<RoleGuardService>(RoleGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
