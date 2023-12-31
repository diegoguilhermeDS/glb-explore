import { Controller, Post, UseGuards, Body } from "@nestjs/common";
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDTO } from "./dto/login.dto";

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("")
  @UseGuards(LocalAuthGuard)
  login(@Body() user: LoginDTO) {
    return this.authService.login(user.email)
  }
}
