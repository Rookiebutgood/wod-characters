import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Angela: Character = {
  name: '-Angela',
  from: 'vtm',
  city: 'New york',
  description: 'ребенок, случайно попала к Тремерам после обращения Шабашом',
  sheet: {
    personal: {
      clan: VampireClans.Tzimisce,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 1,
        dexterity: 4,
        stamina: 1,
      },
      social: {
        charisma: 3,
        manipulation: 1,
        appearence: 4,
      },
      mental: {
        perception: 3,
        intelligence: 3,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        alertness: 1,
        athletics: 2,
        dodge: 4,
        empathy: 3,
        expression: 3,
      },
      skills: {
        animalKen: 1,
        etiquette: 3,
        performance: 2,
        stealth: 3,
      },
      knowledges: {
        academic: 1,
        computer: 2,
        linguistic: 1,
        science: 1,
    },
  },
    advantages: {
      disciplines: {
          vicissitude: 3
      },
      backgrounds: {
        mentor: 2,
      },
      virtues: {
        conscience: 2,
        selfControl: 3,
        courage: 1
      }
    },
    points: {
      morale: {
        humanity: 7 
      },
      willpower: 5
    }
  }
}
