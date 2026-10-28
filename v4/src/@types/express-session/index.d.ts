import 'express-session';

declare module 'express-session' {
  interface SessionData {
    papel?: string;
    email?: string;
    usuario?: {
      id: number;
      nome: string;
      email: string;
    };
    cidadaoId?: number;
    cidadaoEmail?: string;
    cidadaoNome?: string;
  }
}

declare global{
    namespace Express{
        interface Request{
            sesson: import('express-session').Session & Partial<import('express-session').SessionData>;
        }
    }
}