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

export interface Productos {
  productos: Producto[];
}

export interface Producto {
  id:           number;
  nombre:       string;
  imagen:       string;
  descripcion:  string;
  precio:       string;
  marca:        Marca;
  signo_precio: SignoPrecio;
  uso:          string;
  categoria:    Categoria;
}

export enum Categoria {
  Cuerpo = "Cuerpo",
  CuidadoFacial = "Cuidado Facial",
  Labios = "Labios",
  Manos = "Manos",
  Ojos = "Ojos",
  Rostro = "Rostro",
}

export enum Marca {
  AnastasiaBeverlyHills = "ANASTASIA BEVERLY HILLS",
  Essie = "ESSIE",
  Garnier = "GARNIER",
  LoréalParis = "LORÉAL PARIS",
  Maybelline = "MAYBELLINE",
  Nars = "NARS",
}

export enum SignoPrecio {
  Empty = "$",
}
