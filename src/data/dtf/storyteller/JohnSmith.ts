import { DemonHouses, DemonFactions } from '../../../types/demons'
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
        athletics: 1,
        dodge: 1,
        empathy: 3,
        expression: 2,
        streetwise: 2,
        subterfuge: 2
      },
      skills: {
        drive: 2,
        etiquette: 4, 
        firearms: 1,
        stealth: 2, 
      },
      knowledges: {
        academic: 3,
        finance: 3,
        linguistic: 4,
        occult: 4,
        politics: 2,
      }
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
