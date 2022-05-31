import type { Disciplines } from './disciplines'
import type { Lore } from './lore'
import type { Spheres } from './spheres'
import type { VampireClans } from './vampireClans'

type attributeValue = number | { value: number, spec: string }

export type Sheet = {
  personal: {
    clan?: VampireClans;
    generation?: number;
    [index: string]: any;
  };
  attributes: {
    physical: {
      strength: attributeValue;
      dexterity: attributeValue;
      stamina: attributeValue;
    },
    social: {
      charisma: attributeValue;
      manipulation: attributeValue;
      appearence: attributeValue;
    },
    mental: {
      perception: attributeValue;
      intelligence: attributeValue;
      wits: attributeValue;
    }
  }
  abilities: {
    talents: {
      alertness?: attributeValue;
      athletics?: attributeValue;
      brawl?: attributeValue;
      dodge?: attributeValue;
      empathy?: attributeValue;
      expression?: attributeValue;
      intimidation?: attributeValue;
      leadership?: attributeValue;
      streetwise?: attributeValue;
      subterfuge?: attributeValue;
      [index: string]: attributeValue;
    };
    skills: {
      animalKen?: attributeValue;
      bodyCraft?: attributeValue;
      crafts?: attributeValue;
      drive?: attributeValue;
      etiquette?: attributeValue;
      firearms?: attributeValue;
      melee?: attributeValue;
      performance?: attributeValue;
      security?: attributeValue;
      stealth?: attributeValue;
      survival?: attributeValue;
      [index: string]: attributeValue;
    };
    knowledges: {
      academic?: attributeValue;
      computer?: attributeValue;
      finance?: attributeValue;
      investigation?: attributeValue;
      law?: attributeValue;
      linguistic?: attributeValue;
      medicine?: attributeValue;
      occult?: attributeValue;
      politics?: attributeValue;
      science?: attributeValue;
      [index: string]: attributeValue;
    }; 
  }
  advantages: {
    backgrounds?: {
      allies?: number;
      contacts?: number;
      fame?: number;
      herd?: number;
      influence?: number;
      mentor?: number;
      resources?: number;
      retainers?: number;
      status?: number;
      [index: string]: number;
    };
    disciplines?: Disciplines;
    gifts?: object;
    spheres?: Spheres;
    lore?: Lore;
    virtues?: object;
  };
  points: object;
}