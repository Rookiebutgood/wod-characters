import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Frank: Character = {
  name: 'Frank',
  player: 'Руся',
  from: 'vtm',
  city: 'New York',
  description: 'Каратель, если бы он был вампиром',
  sheet: {
    personal: {
      clan: VampireClans.Brujah,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 4,
        dexterity: 4,
        stamina: 3,
      },
      social: {
        charisma: 2,
        appearence: 3,
        manipulation: 1
      },
      mental: {
        perception: 4,
        intelligence: 3,
        wits: 1,
      }
    },
    abilities: {
      talents: {
        alertness: 3,
        athletics: 5,
        brawl: 2,
        dodge: 3,
      },
      skills: {
        drive: 1,
        firearms: 5,
        stealth: 4,
      },
      knowledges: {
        finance: 2,
        investigation: 3,
        linguistic: 1,
      }
    },
    advantages: {
      disciplines: {
        celerity: 1,
        potience: 4,
      },
      backgrounds: {
        fame: 3,
        resources: 3,
      },
      virtues: {
        conscience: 1,
        selfControl: 2,
        courage: 4
      }
    },
    points: {
      morale: {
        humanity: 3
      },
      willpower: 4 // 10?
    }
  }
}

// colt1911
// glok 17
// h&k