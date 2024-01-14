import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class PricesConfigService {
    constructor(
        private readonly configService: ConfigService,
    ) {}

    get updateInterval() {
        return this.configService.get('RESPONSE_INTERWAL');
    }

    get coincapApiUrl() {
        return this.configService.get('COINCAP_API_URL');
    }
}