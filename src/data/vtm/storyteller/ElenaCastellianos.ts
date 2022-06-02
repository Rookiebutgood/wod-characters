import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const ElenaCastellianos: Character = {
  name: '-Elena Castellianos',
  from: 'vtm',
  city: 'New York',
  description: 'Ценительница витэ, организует поставки редких видов. Как Вентру пьет кровь в которой есть алкоголь.',
  sheet: {
    personal: {
      clan: VampireClans.Ventrue,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 2,
        stamina: 2,
      },
      social: {
        charisma: 4,
        manipulation: 2,
        appearence: 2,
      },
      mental: {
        perception: 3,
        intelligence: 3,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        athletics: 1,
        empathy: 2,
        streetwise: 1,
        subterfuge: 2,
      },
      skills: {
        crafts: 2,
        etiquette: 3,
        firearms: 2,
        performance: 2,
        stealth: 2,
      },
      knowledges: {
        academic: 2,
        finance: 2,
        investigation: 1,
        linguistic: 2,
        medicine: 4,
        politics: 2,
        science: 2,
    },
  },
    advantages: {
      disciplines: {
          dominate: 2,
          presence: 1,
      },
      backgrounds: {
        contacts: 3,
        herd: 3,
        resources: 4,
      },
      virtues: {
        conscience: 2,
        selfControl: 3,
        courage: 5
      }
    },
    points: {
      morale: {
        humanity: 5 
      },
      willpower: 5
    }
  }
}