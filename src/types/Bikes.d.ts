export interface BikeTec {
  peso: string;
  altura: string;
  comprimento: string;
  marchas: number;
  roda: number;
}

export interface Bike {
  name: string;
  description: string;
  skills: string[];
  estoque: number;
  preco: number;
  image: string;
  id: string;
  tec: BikeTec;
}
