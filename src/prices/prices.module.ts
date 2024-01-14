import { Module } from '@nestjs/common';
import {PricesController} from "./prices.controller";
import {HttpModule} from "@nestjs/axios";
import {PricesConfigService} from "../common/config/prices.config.service";
import {PricesService} from "./prices.service";

@Module({
    imports: [HttpModule],
    controllers: [PricesController],
    providers: [PricesConfigService, PricesService],
})
export class PricesModule {}
