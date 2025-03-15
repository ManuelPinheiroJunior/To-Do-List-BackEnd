import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private jwtService : JwtService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req : any, @Body() loginDto: LoginDto) {

    if (req.user.status === 200) {
      return { status: req.user.status, message: req.user.message };
    }

    const user = req.user;

    const payload = { 
        userId: user.id,
        email: user.email, 
        firsName: user.firstName,
        lastName: user.lastName,
        role: user.role,
    };

    return { token: this.jwtService.sign(payload) };
  }
}
