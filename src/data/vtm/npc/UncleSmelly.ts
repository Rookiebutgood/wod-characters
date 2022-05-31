import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const UncleSmelly: Character = {
  name: 'Uncle Smelly',
  from: 'vtm',
  city: 'New York',
  description: 'Настоящее имя Gerard Rafin',
  sheet: {
    personal: {
      clan: VampireClans.Nosferatu,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 5,
        dexterity: 3,
        stamina: 5,
      },
      social: {
        charisma: 2,
        manipulation: 3,
        appearence: 0,
      },
      mental: {
        perception: 3,
        intelligence: 5,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        brawl: 4,
        dodge: 4,
        intimidation: 2,
        leadership: 2,
        streetwise: 2,
        subterfuge: 2,
      },
      skills: {
        animalKen: 2,
        crafts: { value: 4, spec: 'repair' },
        drive: 1,
        firearms: 2,
        melee: 4,
        security: 4,
        stealth: 3,
        survival: 2,
      },
      knowledges: {
        academic: 1,
        computer: 5,
        investigation: 2,
        linguistic: {
          value: 2,
          spec: 'English, spanish'
        },
        occult: 3,
        politics: 2,
        science: 2,
        areaKnowledge: { value:4, spec: 'Manhattan, Lower East Side' }, // ?
        camarillaLore: 2, // ?
        citySecrets: 1, // ?
        computerHacking: 4, // ?
        enigmas: 1, // ?
        research: 4, // ?
        sabbatLore: 2, // ?
        sewerLore: 4, // ?
    },
  },
    advantages: {
      disciplines: {
        animalism: 2,
        fortitude: 3,
        obfuscate: 4,
        potence: 4
      },
      backgrounds: {
        contacts: 5,
        resources: 4,
        status: 2,
      },
      virtues: {
        conscience: 4,
        selfControl: 4,
        courage: 4
      }
    },
    points: {
      morale: {
        humanity: 6
      },
      willpower: 5
    }
  }
}
