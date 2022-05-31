import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Emily: Character = {
  name: 'Emily',
  player: 'Маша',
  from: 'vtm',
  city: 'New York',
  description: 'Занималась продюссированием музыкальных групп. Главная гордость - группа Dracula',
  sheet: {
    personal: {
      clan: VampireClans.Toreador,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 2,
        stamina: 3,
      },
      social: {
        charisma: 4,
        appearence: 3,
        manipulation: 3
      },
      mental: {
        perception: 2,
        intelligence: 2,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        empathy: 4,
        expression: 4,
        intimidation: 4,
        subterfuge: 4,
      },
      skills: {
        firearms: 2,
        performance: 4,
      },
      knowledges: {
        academic: 3,
        computer: 2,
        linguistic: { value: 4, spec: 'English, Russian, Latin'},
        finance: 2,
      }
    },
    advantages: {
      disciplines: {
        celerity: 1,
        presence: 3,
      },
      backgrounds: {
        allies: 2,
        contacts: 4,
        resources: 1
      },
      virtues: {
        conscience: 5,
        selfControl: 3,
        courage: 2
      }
    },
    points: {
      morale: {
        humanity: 8
      },
      willpower: 2
    }
  }
}