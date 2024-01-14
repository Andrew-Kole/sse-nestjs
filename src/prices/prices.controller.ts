import {Controller, Sse} from "@nestjs/common";
import {interval, map, Observable} from "rxjs";
import {PricesConfigService} from "../common/config/prices.config.service";
import {PricesService} from "./prices.service";
import {extractPriceData} from "../common/utils/prices.extract.util";

@Controller()
export class PricesController {
    constructor(
        private readonly pricesConfigService: PricesConfigService,
        private readonly pricesService: PricesService,
    ) {}
    @Sse('prices')
    async prices(): Promise<Observable<MessageEvent>> {
        const resData = await this.pricesService.getPrices();
        const extractedData = extractPriceData(resData.data)
        return interval(this.pricesConfigService.updateInterval).pipe(
            map((_) => ({
                data: extractedData,
            }) as MessageEvent),
        );
    }
}