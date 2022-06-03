import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const BillyGordon: Character = {
  name: '-Billy Gordon',
  from: 'vtm',
  city: 'New York',
  description: 'Лейтенант байкеров Satan Soldiers, правая рука Алана.',
  sheet: {
    personal: {
      clan: VampireClans.Brujah,
      generation: 11
    },
    attributes: {
      physical: {
        strength: 4,
        dexterity: 2,
        stamina: 4,
      },
      social: {
        charisma: 2,
        manipulation: 2,
        appearence: 3,
      },
      mental: {
        perception: 1,
        intelligence: 2,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        alertness: 1,
        athletics: 1,
        brawl: 2,
        dodge: 2,
        empathy: 1,
        expression: 2,
        intimidation: 1,
        leadership: 1,
        streetwise: 1,
        subterfuge: 1,
      },
      skills: {
        crafts: 2,
        drive: { value: 2, spec: 'motocircle'},
        firearms: 1,
        performance: 2,
        security: 1,
        stealth: 1,
      },
      knowledges: {
        academic: 2,
        computer: 1,
        finance: 1,
        law: 1,
        politics: 1,
    },
  },
    advantages: {
      disciplines: {
          celerity: 2,
          potence: 3,
          presence: 1
      },
      backgrounds: {
        allies: 1,
        influence: 1,
        resources: 2,
      },
      virtues: {
        conscience: 3,
        selfControl: 2,
        courage: 3,
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
