import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Nicole: Character = {
  name: 'Nicole',
  player: 'Маша',
  from: 'vtm',
  city: 'New York',
  description: '',
  sheet: {
    personal: {
      clan: VampireClans.Brujah,
      generation: 13
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
        perception: 2,
        intelligence: 1,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        athletics: 3,
        alertness: 2,
        streetwise: 2,
        brawl: 4,
        dodge: 3
      },
      skills: {
        drive: 3,
        crafts: 3,
        firearms: 3
      },
      knowledges: {
        academic: 1,
        computer: 1,
        linguistic: 1,
        medicine: 1,
        science: 1
      }
    },
    advantages: {
      disciplines: {
        celerity: 1,
        potence: 2,
        presence: 1,
      },
      backgrounds: {
        allies: 3,
        fame: 2
      },
      virtues: {
        conscience: 2,
        selfControl: 4,
        courage: 4
      }
    },
    points: {
      morale: {
        humanity: 6
      },
      willpower: 4
    }
  }
}