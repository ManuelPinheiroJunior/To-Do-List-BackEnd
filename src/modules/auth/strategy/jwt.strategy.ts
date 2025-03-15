import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt"; 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    private readonly logger = new Logger(JwtStrategy.name);

    constructor(private configService: ConfigService) {
        super({
           jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
           ignoreExpiration: false,
           secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(payload: any) {
        this.logger.log(`Validating JWT for userId: ${payload?.userId}, role: ${payload?.role}`);

        if (!payload || !payload.role) {
            this.logger.error('JWT validation failed: Invalid payload');
            throw new Error('Invalid JWT payload: role is missing');
        }
        
        return {
            userId: payload.userId,
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
            role: payload.role,
        };
    }
}
