import { DemonHouses, DemonFactions } from '../../../types/demons'
import type { Character } from '../../../types'

export const SusieReed: Character = {
  name: '-Susie Reed-',
  from: 'dtf',
  city: 'New York',
  description: 'Имя - Симиил. Девочка гот. Один из семи отреченных.',
  sheet: {
    personal: {
      house: DemonHouses.Slayers,
      faction: DemonFactions.Cryptic,
    },
    attributes: {
      physical: {
        strength: 0,
        dexterity: 0,
        stamina: 0,
      },
      social: {
        charisma: 0,
        manipulation: 0,
        appearence: 0,
      },
      mental: {
        perception: 0,
        intelligence: 0,
        wits: 0,
      }
    },
    abilities: {
      talents: {

      },
      skills: {

      },
      knowledges: {

      }
    },
    advantages: {
      backgrounds: {
      
      },
      lores: {
          loreRealms: 3,
          loreSpirit: 2,
          loreDeath: 1,
      }
    },
    points: {

    }
  }
}
