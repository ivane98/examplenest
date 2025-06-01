import { IsString, IsNotEmpty, IsEnum, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'])
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
