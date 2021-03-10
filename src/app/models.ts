export interface Album{
  id: number;
  title: string;
  body: string;
}
export interface Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
}
