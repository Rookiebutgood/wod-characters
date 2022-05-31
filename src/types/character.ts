import type { Sheet } from './sheet'

export type Character = {
  name: string;
  player?: string;
  from: string;
  city: string;
  description: string;
  sheet: Sheet;
}