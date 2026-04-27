export interface Cita {
    idCita: number;
    idVisitante:number ;   
    fechaCita: Date;
    horaCita: string;
    motivo: string;
    observaciones: string;
    estado: 'programada' | 'confirmada' | 'completada' | 'cancelada';
    fechaCreacion: Date;
    activo: boolean;
}
