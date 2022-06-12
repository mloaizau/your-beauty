export interface Usuario{
  nombres: string;
  apellidos: string;
  correo: string;
  passwd: string;
  direccion: string;
  historial: Array<Compra>;
}

export interface Compra {
  ordenID: number;
  cantidad: string;
  total: string;
}
