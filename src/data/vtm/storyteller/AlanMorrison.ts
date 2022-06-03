import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const AlanMorrison: Character = {
  name: '-Alan Morrison',
  from: 'vtm',
  city: 'New York',
  description: 'Примоген Бруха. Лидер байкеров Satan Soldiers.',
  sheet: {
    personal: {
      clan: VampireClans.Brujah,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 4,
        dexterity: 3,
        stamina: 4,
      },
      social: {
        charisma: 3,
        manipulation: 2,
        appearence: 3,
      },
      mental: {
        perception: 3,
        intelligence: 2,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        alertness: 1,
        brawl: 3,
        dodge: 2,
        empathy: 1,
        expression: 1,
        intimidation: 3,
        leadership: 3,
        streetwise: 3,
      },
      skills: {
        crafts: 3,
        drive: { value: 4, spec: 'motocircle'},
        firearms: 3,
        melee: 2,
        survival: 4,
      },
      knowledges: {
        law: 1,
        medicine: 2,
        areaKnowledge: { value: 2, spec: 'Bronx' }, // ?,
    },
  },
    advantages: {
      disciplines: {
          potence: 5,
          celerity: 3,
          presence: 3,
          fortitude: 2,
      },
      backgrounds: {
        allies: 4,
        contacts: 2,
        herd: 2,
        influence: 2,
        resources: 2,
        status: 1,
        clanPrestige: 2, // ?
      },
      virtues: {
        conscience: 4,
        selfControl: 2,
        courage: 4,
      }
    },
    points: {
      morale: {
        humanity: 6 
      },
      willpower: 6
    }
  }
}
