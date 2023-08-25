import { users } from "src/database/db";
import { CreateUserDto } from "../../dto/create-user.dto";
import { UpdateUserDto } from "../../dto/update-user.dto";
import { User } from "../../entities/user.entity";
import { UsersRepository } from "../user.repository";
import { plainToInstance } from "class-transformer";

export class UsersInMemoryRepository implements UsersRepository {
    create(data: CreateUserDto): User | Promise<User> {
        const newUser = new User();

        Object.assign(newUser, { ...data });

        users.push(newUser);

        return plainToInstance(User, newUser);
    }

    findAll(): User[] | Promise<User[]> {
        return plainToInstance(User, users);
    }

    findOne(id: string): User | Promise<User> {
        const user = users.find((user) => user.id === id);

        return plainToInstance(User, user);
    }

    findByEmail(email: string): User {
        const user = users.find((user) => user.email === email);

        return user;
    }

    update(id: string, data: UpdateUserDto): User | Promise<User> {
        const indexByUser = users.findIndex((user) => user.id === id);
        users[indexByUser] = { ...users[indexByUser], ...data };

        return plainToInstance(User, users[indexByUser]);
    }

    delete(id: string): void | Promise<void> {
        const indexByUser = users.findIndex((user) => user.id === id);
        users.splice(indexByUser, 1);
    }
}
