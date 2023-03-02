import { MageTraditions } from '../../../types/mages'
import type { Character } from '../../../types'

export const JeffRutten: Character = {
  name: '-Jeff Rutten-',
  from: 'mta',
  city: 'New York',
  description: 'Оккультный детектив в стиле Лебовски. Главное умение - телепортация, часто открывая двери.',
  sheet: {
    personal: {
      tradition: MageTraditions.HollowOnes
    },
    attributes: {
      physical: {
        strength: 1,
        dexterity: 2,
        stamina: 3,
      },
      social: {
        charisma: 4,
        manipulation: 4,
        appearence: 2,
      },
      mental: {
        perception: 2,
        intelligence: 3,
        wits: 3,
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
      spheres: {
        sphereCorrespondence: 3,
        sphereSpirit: 2,
        spherePrime: 1
      }
    },
    points: {

    }
  }
}
