import { DemonHouses, DemonFactions } from 'src/types/demons'
import type { Character } from '../../../types'

export const JohnSmith: Character = {
  name: '-John Smith',
  from: 'dtf',
  city: 'New York',
  description: 'Имя - Анимус. Организует специальные вечеринки. Один из семи отреченных.',
  sheet: {
    personal: {
      house: DemonHouses.Defilers,
      faction: DemonFactions.Faustians,
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

      },
      skills: {

      },
      knowledges: {

    },
  },
    advantages: {
      backgrounds: {
      
      },
      lores: {
        loreTransfiguration: 3,
        loreLonging: 2,
        loreStorms: 1
      }
    },
    points: {

    }
  }
}
