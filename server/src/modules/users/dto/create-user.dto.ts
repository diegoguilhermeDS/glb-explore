import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional } from "class-validator";
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
    @MinLength(4)
    @Transform(({ value }: { value: string }) => hashSync(value, 10), {
        groups: ['transform'],
    })
    password: string;

    @IsString()
    @IsOptional()
    avatar_url: string
}
