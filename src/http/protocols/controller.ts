export interface Controller<I, O> {
  exec: (input: I) => Promise<O>;
}
