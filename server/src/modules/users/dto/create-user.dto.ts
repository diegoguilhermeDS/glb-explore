import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";
import { Transform } from "class-transformer";
import { hashSync } from "bcryptjs";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ['transform'],
    })
    password: string;

    @IsString()
    avatar_url: string
}
