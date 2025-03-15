import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "src/modules/users/users.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            usernameField: "email",
            passwordField: "password",
        });
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.usersService.findUserByEmail(email);

        if (!user) {
            return { status: 200, message: "User not found" }; 
        }

        if (user.password !== password) {
            return { status: 200, message: "Invalid password" }; 
        }

        return user;
    }
}
