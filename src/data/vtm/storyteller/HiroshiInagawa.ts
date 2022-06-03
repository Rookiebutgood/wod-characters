import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const HiroshiInagawa: Character = {
  name: '-Hiroshi Inagawa',
  from: 'vtm',
  city: 'New York',
  description: 'Примоген Вентру в Нью Йорке. Имеет связи с азиатской мафией, сам оттуда. Как Вентру пьет кровь только силовиков - полиция, военные и тд.',
  sheet: {
    personal: {
      clan: VampireClans.Ventrue,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 3,
        dexterity: 3,
        stamina: 4,
      },
      social: {
        charisma: 3,
        manipulation: 3,
        appearence: 2,
      },
      mental: {
        perception: 2,
        intelligence: 2,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        alertness: 1,
        athletics: 3,
        brawl: 4,
        dodge: 3,
        intimidation: 3,
        leadership: 4,
        streetwise: 5,
        subterfuge: 2,
      },
      skills: {
        drive: 2,
        etiquette: 1,
        firearms: 4,
        melee: { value: 5, spec: 'katanas' },
        stealth: 3,
        survival: 3,
        martialArts: 2, // ?
      },
      knowledges: {
        academic: 2,
        computer: 1,
        finance: 2,
        law: 1,
        linguistic: {
            value: 3,
            spec: 'Spanish, english, Mandarine, Japanese'
          },
        politics: 2,
        science: 1,
    },
  },
    advantages: {
      disciplines: {
          dominate: 4,
          fortitude: 3,
          presence: 4,
          potence: 2,
      },
      backgrounds: {
        allies: 3,
        contacts: 3,
        herd: 1,
        resources: 4,
        retainers: 3,
        clanPrestige: 2, // ?
      },
      virtues: {
        conscience: 2,
        selfControl: 3,
        courage: 3,
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
