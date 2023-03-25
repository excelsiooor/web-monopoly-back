import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from 'express'
import { GoogleAuthGuard } from "./guards/google-auth.guard";

@Controller('auth')
export class AuthController {

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {}

  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleRedirect(@Req() req: Request) {
    return { res: req.user }
  }
}