import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Gemini: Character = {
  name: 'Gemini',
  from: 'vtm',
  city: 'New York',
  description: 'Работает на Uncle Smelly, бывшый член Шабаша',
  sheet: {
    personal: {
      clan: VampireClans.Nosferatu,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 4,
        stamina: 4,
      },
      social: {
        charisma: 1,
        manipulation: 2,
        appearence: 0,
      },
      mental: {
        perception: 4,
        intelligence: 2,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        alertness: 2,
        brawl: 1,
        dodge: 3,
        intimidation: 1,
        intrigue: 1, // ?
        scrounding: 3, // ?
        search: 3, // ?
        streetwise: 2,
      },
      skills: {
        animalKen: 1,
        firearms: 1,
        performance: 1,
        security: 4,
        stealth: 5,
        survival: 4,
      },
      knowledges: {
        computer: 2,
        investigation: 3,
        occult: 2,
        politics: 2,
        areaKnowledge: { value: 4, spec: 'Manhattan, Bronx, Brooklyn, Queens' }, // ?
        citySecrets: 2, // ?
        sewerLore: 2, // ?
    },
  },
    advantages: {
      disciplines: {
        obfuscate: 5,
        potence: 1,
        obtenebration: 1,
      },
      backgrounds: {
          clanPrestige: 1,
      },
      virtues: {
        conscience: 2,
        selfControl: 4,
        courage: 4
      }
    },
    points: {
      morale: {
        humanity: 5
      },
      willpower: 4
    }
  }
}
