export interface BasicGetResult<T> {
  code: number;
  message: string;
  status: string;
  data: T;
}
