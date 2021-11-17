export interface AvailableData {
  GetProductComent: (id: number) => void;
  feedProduct: IFeedAvailable[];
}
export interface IFeedAvailable {
  description: string;
  avaliation: string;
  id: number;
}
