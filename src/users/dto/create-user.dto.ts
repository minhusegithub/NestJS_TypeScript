// data transfer object
import { Type } from 'class-transformer';
import { IsEmail, IsMongoId, isNotEmpty, IsNotEmpty, IsNotEmptyObject, IsObject, IsString, ValidateNested } from 'class-validator';


export class CreateUserDto {

    @IsNotEmpty({message: 'Tên không được để trống'})
    name: string;

    @IsEmail({},{message: 'Email không đúng định dạng'})
    @IsNotEmpty({message: 'Email không được để trống'})
    email: string;

    @IsNotEmpty({message: 'Mật khẩu không được để trống'})
    password: string;

    @IsNotEmpty({message: 'Tuổi không được để trống'})
    age: number;

    @IsNotEmpty({message: 'Giới tính không được để trống'})
    gender: string;

    @IsNotEmpty({message: 'Địa chỉ không được để trống'})
    address: string;

    @IsNotEmpty({message: 'Vai trò không được để trống'})
    role: string;


}

export class RegisterUserDto {
    @IsNotEmpty({message: 'Tên không được để trống'})
    name: string;

    @IsEmail({},{message: 'Email không đúng định dạng'})
    @IsNotEmpty({message: 'Email không được để trống'})
    email: string;

    @IsNotEmpty({message: 'Mật khẩu không được để trống'})
    password: string;

    @IsNotEmpty({message: 'Tuổi không được để trống'})
    age: number;

    @IsNotEmpty({message: 'Giới tính không được để trống'})
    gender: string;

    @IsNotEmpty({message: 'Địa chỉ không được để trống'})
    address: string;

    @IsNotEmpty({message: 'Vai trò không được để trống'})
    role: string;
}

export class LoginUserDto {
    @IsEmail({},{message: 'Email không đúng định dạng'})
    @IsNotEmpty({message: 'Email không được để trống'})
    email: string;

    @IsNotEmpty({message: 'Mật khẩu không được để trống'})
    password: string;

    // @IsNotEmpty({message: 'Vai trò không được để trống'})
    // role: string;
}