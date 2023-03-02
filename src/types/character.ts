import type { DemonSheet, MageSheet, Sheet, VampireSheet } from './sheet'

export type Character = {
  name: string;
  player?: string;
  from: string;
  city: string;
  description: string;
  sheet: VampireSheet | MageSheet | DemonSheet;
}