import { Injectable } from '@nestjs/common';
import { genSalt, hash, compare } from 'bcryptjs';

@Injectable()
export class PasswordService {
  async generateSalt(round: number): Promise<string> {
    return await genSalt(10);
  }

  async hashPassword(password: string, salt: string): Promise<string> {
    return hash(password, salt);
  }
  async comparePassword(
    providedPass: string,
    storedPass: string,
  ): Promise<boolean> {
    const passwordIsMatched = await compare(providedPass, storedPass);
    return passwordIsMatched;
  }
}
