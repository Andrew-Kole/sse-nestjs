import {Injectable} from "@nestjs/common";
import {PricesConfigService} from "../common/config/prices.config.service";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class PricesService {
    constructor(
        private readonly pricesConfigService: PricesConfigService,
        private readonly httpService: HttpService,
    ) {}

    getPrices() {
        const apiUrl = this.pricesConfigService.coincapApiUrl;
        const options = {
            params: {
                limit: 5,
            },
        }
        return this.httpService.get(apiUrl, options).toPromise();
    }
}