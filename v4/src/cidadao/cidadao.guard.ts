import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";

//Pode ser injetada como também injetarem outras funções nesta
@Injectable()

// Este CanActivate é uma pergunta, este código pode ser ativado?

export class CidadaoGuard implements CanActivate{

    //Entre várias funções use o execução de contexto
    //execução de contexto = como verificar se pode?
    
    canActivate(context: ExecutionContext): boolean {
    //Sempre é booleano, mais é bom definir

    
        const request = context.switchToHttp().getRequest();

        const usuario = request.session?.usuario;

        if (!usuario){
            throw new UnauthorizedException('Acesso não autorizado. Faça login como cidadão.')
        }

        return true;
    }
}