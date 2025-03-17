import { IsEmail, IsNotEmpty, IsEnum, IsString, Length } from 'class-validator';
import { UserRole } from '../../../common/enums/user-role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty({
    example: 'ivanov@example.com',
    description: 'Email пользователя',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'password123', description: 'Пароль пользователя' })
  @IsNotEmpty()
  @IsString()
  @Length(6, 50)
  readonly password: string;

  @ApiProperty({ example: UserRole.Student, description: 'Роль пользователя' })
  @IsNotEmpty()
  @IsEnum(UserRole)
  readonly role: UserRole;
}
