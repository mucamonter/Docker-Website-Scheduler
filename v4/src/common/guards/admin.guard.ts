import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, ForbiddenException } from "@nestjs/common";


@Injectable()

//Definindo os erros, caso não tenha a string e caso tenha
export class AdminGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean{
        const request = context.switchToHttp().getRequest();
        const papel = request.session?.papel;

        if(!papel) {
            throw new UnauthorizedException('Autenticação necessária');
        }

        const papeisPermitidos = ['admin', 'visualisador'];
        if(!papeisPermitidos.includes(papel)){
            throw new ForbiddenException('Acesso negado.');
        }
        return true;
    }
}