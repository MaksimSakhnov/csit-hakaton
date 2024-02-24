import { Controller, Get, Post, Body, Request, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';

// http://localhost:3000/api/auth
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  // http://localhost:3000/api/auth/signup
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  // http://localhost:3000/api/auth/login
  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.authService.login(loginDto);
  }

  // http://localhost:3000/api/auth/profile
  @Get('/profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}