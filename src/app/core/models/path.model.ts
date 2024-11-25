export interface Path {
  path: string;
  cardinality: 'ONE' | 'ONE_REQUIRED' | 'MANY' | 'MANY_REQUIRED';
  isObject?: boolean;
  shortName: string;
  description: string;
}
