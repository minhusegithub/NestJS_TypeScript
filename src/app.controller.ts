import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';



@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private  configService: ConfigService,
    
  ) {}
  




}
