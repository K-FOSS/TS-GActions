// src/Utils/types.ts
export interface ClassType<T = any> {
  new (...args: any[]): T;
}

export type ObjectGet<X> = {
  readonly [key in keyof X]: X[key] extends string | number
    ? X[key]
    : ObjectGet<X[key]>;
};

export type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

export type ArrayType<T> = T extends (infer A)[] ? A : T;

export type Intersect<T> = (T extends any ? (x: T) => 0 : never) extends (
  x: infer R,
) => 0
  ? R
  : never;
