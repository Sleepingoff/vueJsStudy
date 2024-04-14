interface FilterType<T> {
  readonly id: string;
  name: T;
  checked?: boolean;
}
