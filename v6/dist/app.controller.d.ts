import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private configService;
    constructor(configService: ConfigService);
    login(body: {
        login?: string;
        senha?: string;
    }): Promise<{
        redirect: string;
    }>;
}
