import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const TheoBell: Character = {
  name: 'Theo Bell',
  from: 'vtm',
  city: 'New York',
  description: 'Архонт Камарильи, бывший раб, любит дробовик с зажигательными',
  sheet: {
    personal: {
      clan: VampireClans.Brujah,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 5,
        dexterity: 5,
        stamina: 5,
      },
      social: {
        charisma: 4,
        manipulation: 4,
        appearence: 4,
      },
      mental: {
        perception: 4,
        intelligence: 4,
        wits: 5,
      }
    },
    abilities: {
      talents: {
        alertness: 5,
        brawl: 5,
        dodge: 5,
        empathy: 1,
        expression: 2,
        intimidation: 5,
        leadership: 4,
        streetwise: 4,
      },
      skills: {
        crafts: { value: 1, spec: 'mechanics' },
        demolitions: 3, // ?
        drive: 3,
        etiquette: 3,
        firearms: { value: 5, spec: 'shotguns' },
        melee: 5,
        performance: 2,
        stealth: 5,
        survival: 4,
      },
      knowledges: {
        academic: 2,
        finance: 1,
        investigation: 4,
        law: 3,
        linguistic: 2,
        occult: 3,
        politics: 3,
        science: 1,
    },
  },
    advantages: {
      disciplines: {
        auspex: 2,
        celerity: 4,
        dominate: 3,
        fortitude: 2,
        obfuscate: 2,
        potence: 4,
        presence: 4,
      },
      backgrounds: {
        allies: 5, // mortal family
        contacts: 5,
        mentor: 4,
        resources: 3,
        status: 4,
      },
      virtues: {
        conscience: 3,
        selfControl: 5,
        courage: 5
      }
    },
    points: {
      morale: {
        humanity: 6 
      },
      willpower: 10
    }
  }
}
