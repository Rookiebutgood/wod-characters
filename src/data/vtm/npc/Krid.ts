import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Krid: Character = {
  name: 'Krid',
  from: 'vtm',
  city: 'New York',
  description: '',
  sheet: {
    personal: {
      clan: VampireClans.Nosferatu,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 4,
        dexterity: 3,
        stamina: 3
      },
      social: {
        charisma: 4,
        appearence: 2,
        manipulation: 0 
      },
      mental: {
        perception: 3,
        intelligence: 3,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        brawl: 2,
        empathy: 2,
        expression: 2,
        streetwise: 3,
        subterfuge: 3,
      },
      skills: {
        animalKen: 2,
        drive: 3,
        etiquette: 2,
        performance: 1,
        stealth: 2,
      },
      knowledges: {
        academic: 1,
        areaKnowledge: 1, // ?
        computer: 1,
        occult: 1,
        politics: 3,
      }
    },
    advantages: {
      disciplines: {
        animalism: 1,
        auspex: 1,
        obfuscate: 1,
        potence: 1,
      },
      backgrounds: {
        resources: 2,
      },
      virtues: {
        conscience: 3,
        selfControl: 4,
        courage: 4,
      }
    },
    points: {
      morale: {
        humanity: 7
      },
      willpower: 4
    }
  }
}