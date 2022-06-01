export interface BasicGetResult<T> {
  code: number;
  message: string;
  status: string;
  total?: number;
  data: T;
}
