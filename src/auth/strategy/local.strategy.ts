import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);

    constructor(private usersService: UsersService) {
        super({
            usernameField: "email",
            passwordField: "password",
        });
    }

    async validate(email: string, password: string): Promise<any> {
        this.logger.log(`Attempting login for email: ${email}`);

        const user = await this.usersService.findUserByEmail(email);

        if (!user) {
            this.logger.warn(`Login failed: User not found - ${email}`);
            throw new UnauthorizedException("User not found");
        }

        this.logger.log(`User found: ${user.email}. Validating password...`);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            this.logger.warn(`Login failed: Invalid password for ${email}`);
            throw new UnauthorizedException("Invalid password");
        }

        this.logger.log(`Login successful for ${email}`);
        return user;
    }
}
