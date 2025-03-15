import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt"; 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private configService: ConfigService) {
        super({
           jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
           ignoreExpiration: false,
           secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(payload: any) {
        if (!payload || !payload.role) {
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
