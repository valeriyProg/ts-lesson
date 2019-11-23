export interface IList<T> {
  add(item: T): void;
  remove(item: T): void;
  indexOf(item: T): number;
}
