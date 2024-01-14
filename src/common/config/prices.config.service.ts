import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class PricesConfigService {
    constructor(
        private readonly configService: ConfigService,
    ) {}

    get updateInterval() {
        return 30000;
    }

    get coincapApiUrl() {
        return this.configService.get('COINCAP_API_URL');
    }
}