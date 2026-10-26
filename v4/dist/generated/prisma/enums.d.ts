export declare const usuarios_admin_papel: {
    readonly admin: "admin";
    readonly visualizador: "visualizador";
};
export type usuarios_admin_papel = (typeof usuarios_admin_papel)[keyof typeof usuarios_admin_papel];
export declare const agendamentos_atendimento: {
    readonly no_paco: "no_paco";
    readonly marcado: "marcado";
};
export type agendamentos_atendimento = (typeof agendamentos_atendimento)[keyof typeof agendamentos_atendimento];
export declare const agendamentos_tipo_atendimento: {
    readonly unico: "unico";
    readonly grupo: "grupo";
};
export type agendamentos_tipo_atendimento = (typeof agendamentos_tipo_atendimento)[keyof typeof agendamentos_tipo_atendimento];
export declare const agendamentos_status: {
    readonly cancelado: "cancelado";
    readonly pedido_nao_atendido: "pedido_nao_atendido";
    readonly pedido_atendido: "pedido_atendido";
    readonly pedido_pendente: "pedido_pendente";
};
export type agendamentos_status = (typeof agendamentos_status)[keyof typeof agendamentos_status];
