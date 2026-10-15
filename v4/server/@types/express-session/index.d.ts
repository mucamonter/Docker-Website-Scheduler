import 'express-session';

declare module 'express-session' {
  interface SessionData {
    
    papel?: 'admin' | 'visualizador' | string; 
  }
}
