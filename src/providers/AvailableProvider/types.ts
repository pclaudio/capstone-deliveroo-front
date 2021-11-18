export interface AvailableData {
  GetProductComent: (id: number) => void;
  setFeedProduct: ([]) => void;
  feedProduct: IFeedAvailable[];
  windowFeed: boolean;
  setWindowFeed: (item: boolean) => void;
  PostProductComent: (data: IFeedAvailable) => void;
}
export interface IFeedAvailable {
  description: string;
  avaliation: string;
  id: number;
  productId?: number;
}
