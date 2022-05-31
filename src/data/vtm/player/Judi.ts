import type { Character } from '../../../types/character'
import { VampireClans } from '../../../types'

export const Judi: Character = {
  name: 'Judi',
  player: 'Настя',
  from: 'vtm',
  city: 'New York',
  description: 'Потеряла память. Гуль начало ДжудиДжуди',
  sheet: {
    personal: {
      clan: VampireClans.Malkavian,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 3,
        stamina: 1
      },
      social: {
        charisma: 3,
        appearence: 3,
        manipulation: 4
      },
      mental: {
        perception: 4,
        intelligence: 2,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        alertness: 4,
        athletics: 2,
        brawl: 1,
        empathy: 3,
        expression: 2,
      },
      skills: {
        crafts: 2,
        firearms: 1,
        etiquette: 1,
        security: 2,
        stealth: 5,
        survival: 4,
      },
      knowledges: {
        investigation: 1,
        linguistic: { value: 1, spec:  'Ivrit'},
        medicine: 1,
        occult: 2,
      }
    },
    advantages: {
      disciplines: {
        auspex: 1,
        dementation: 1,
        obfuscate: 2,
      },
      backgrounds: {
        herd: 2,
        mentor: 3,
        resources: 1,
      },
      virtues: {
        conscience: 3,
        selfControl: 2,
        courage: 5
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