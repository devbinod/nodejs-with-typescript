export interface IRead<T> {
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}

export interface IWrite<T> {
  save(t: T): Promise<boolean>;
  update(t: T): Promise<boolean>;
  delete(id: string): Promise<boolean>;
}
