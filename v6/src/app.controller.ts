import { Controller, Post, Body, HttpCode, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('api') // Prefixo 'api' para todas as rotas deste controller
export class AppController {
  constructor(private configService: ConfigService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK) // Força o retorno com status 200 OK quando der certo
  async login(@Body() body: { login?: string; senha?: string }) {
    const { login, senha } = body;

    // Pega as variáveis configuradas no .env
    const adminPass = this.configService.get<string>('ADMIN_PASSWORD');
    const adminUser = this.configService.get<string>('ADMIN_USER'); // Se você tiver variável de usuário no .env

    // Validação da senha (e usuário, se usar)
    const loginValido = !adminUser || login === adminUser;
    const senhaValida = senha === adminPass;

    if (!loginValido || !senhaValida) {
      // Retorna o formato exato { mensagem: '...' } esperado pelo seu frontend em caso de erro
      throw new UnauthorizedException({
        mensagem: 'Usuário ou senha inválidos.'
      });
    }

    // Retorna a chave 'redirect' esperada pelo location.href do seu frontend
    // Substitua '/index.html' ou '/agenda.html' pela página de destino após o login
    return {
      redirect: '/index.html' 
    };
  }
}