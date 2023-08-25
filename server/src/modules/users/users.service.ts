import {
    Injectable,
    NotFoundException,
    ForbiddenException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersRepository } from "./repositories/user.repository";

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {}
    async create(createUserDto: CreateUserDto) {
        const newUser = await this.usersRepository.create(createUserDto);
        return newUser;
    }

    async findAll() {
        const users = await this.usersRepository.findAll();
        return users;
    }

    async findOne(id: string) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findByEmail(email);

        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto, authId: string) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        if (id !== authId) {
            throw new ForbiddenException("Insufficient permission");
        }

        const userUpdate = await this.usersRepository.update(id, updateUserDto);

        return userUpdate;
    }

    async remove(id: string, authId: string) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        if (id !== authId) {
            throw new ForbiddenException("Insufficient permission");
        }
        await this.usersRepository.delete(id);
    }
}
