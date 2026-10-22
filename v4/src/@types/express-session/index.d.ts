import 'express-session';

declare module 'express-session' {
  interface SessionData {
    usuario?: {
      id: number;
      nome: string;
      email: string;
      papel?: string;
    };
  }
}

declare global{
    namespace Express{
        interface Request{
            sesson: import('express-session').Session & Partial<import('express-session').SessionData>;
        }
    }
}