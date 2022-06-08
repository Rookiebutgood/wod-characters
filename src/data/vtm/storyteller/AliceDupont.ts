import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const AliceDupont: Character = {
  name: '-Alice Dupont',
  from: 'vtm',
  city: 'New York',
  description: 'гарпия, покровительница художников, примоген Тореадор',
  sheet: {
    personal: {
      clan: VampireClans.Toreador,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 1,
        dexterity: 3,
        stamina: 2,
      },
      social: {
        charisma: 3,
        manipulation: 3,
        appearence: 5,
      },
      mental: {
        perception: 3,
        intelligence: 3,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        dodge: 1,
        empathy: 3,
        expression: 3,
      },
      skills: {
        etiquette: 5,
        performance: 2,
        stealth: 2,
      },
      knowledges: {
        academic: 5,
        linguistic: {
          value: 3,
          spec: ''
        },
        politics: 3,
        science: 2,
    },
  },
    advantages: {
      disciplines: {
          auspex: 3,
          presence: 4,
          celerity: 2,
      },
      backgrounds: {
        allies: 1,
        contacts: 3,
        herd: 3,
        influence: 1,
        resources: 3,
        status: 1,
      },
      virtues: {
        conscience: 2,
        selfControl: 4,
        courage: 2
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
