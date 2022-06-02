import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const MitchFoster: Character = {
  name: 'Mitch Foster',
  player: 'Рустам',
  from: 'vtm',
  city: 'New York',
  description: 'Как Вентру питается молодыми, талантливыми девушками',
  sheet: {
    personal: {
      clan: VampireClans.Ventrue,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 1,
        dexterity: 3,
        stamina: 2,
      },
      social: {
        charisma: 3,
        appearence: 4,
        manipulation: 1
      },
      mental: {
        perception: 3,
        intelligence: 5,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        empathy: 2,
        expression: 3,
        intimidation: 3,
        leadership: 4,
        streetwise: 2,
        subterfuge: 2,
      },
      skills: {
        etiquette: 2,
        firearms: 2,
        stealth: 2,
      },
      knowledges: {
        investigation: 2,
        law: 2,
        linguistic: { value: 2, spec: 'English, Russian, Latin'},
        medicine: 4,
        occult: 2,
        politics: 1,
        science: 1,
      }
    },
    advantages: {
      disciplines: {
        dominate: 4,
        presence: 1,
        necromacy: 2,
      },
      backgrounds: {
        allies: 1,
        contacts: 2,
        influence: 5,
        mentor: 1,
        retainers: 1,
        resources: 1
      },
      virtues: {
        conscience: 3,
        selfControl: 3,
        courage: 3
      }
    },
    points: {
      morale: {
        humanity: 6
      },
      willpower: 3
    }
  }
}