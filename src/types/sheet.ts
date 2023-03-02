import type { DemonFactions, DemonHouses } from './demons'
import type { Disciplines } from './disciplines'
import type { Lores } from './lores'
import type { MageTraditions } from './mages'
import type { Spheres } from './spheres'
import type { VampireClans } from './vampireClans'

type usualValue = number | undefined
type attributeValue = usualValue | { value: number, spec: string }

export type Sheet = {
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
      allies?: usualValue;
      contacts?: usualValue;
      fame?: usualValue;
      herd?: usualValue;
      influence?: usualValue;
      mentor?: usualValue;
      resources?: usualValue;
      retainers?: usualValue;
      status?: usualValue;
      [index: string]: usualValue;
    };
    disciplines?: Disciplines;
    gifts?: object;
    spheres?: Spheres;
    lores?: object;
    virtues?: object;
  };
  points: object;
}

export type VampireSheet = Sheet & {
  personal: {
    clan: VampireClans;
    generation: number;
  };
  advantages: {
    disciplines: Disciplines;
  }
}

export type MageSheet = Sheet & {
  personal: {
    tradition: MageTraditions;
  };
  advantages: {
    spheres: Spheres;
  }
}

export type DemonSheet = Sheet & {
  personal: {
    house: DemonHouses;
    faction: DemonFactions;
  };
  advantages: {
    lores: Lores
  }
}