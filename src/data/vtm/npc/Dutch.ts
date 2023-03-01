import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Dutch: Character = {
  name: 'Dutch',
  from: 'vtm',
  city: 'New Orleans',
  description: 'Примоген Бруха в Новом Орлеане',
  sheet: {
    personal: {
      clan: VampireClans.Brujah,
      generation: 9 
    },
    attributes: {
      physical: {
        strength: 5,
        dexterity: 4,
        stamina: 4,
      },
      social: {
        charisma: 3,
        manipulation: 4,
        appearence: 2,
      },
      mental: {
        perception: 3,
        intelligence: 4,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        alertness: 4,
        athletics: 3,
        brawl: 4,
        dodge: 4,
        intimidation: 4,
        leadership: 4,
        streetwise: 4,
      },
      skills: {
        crafts: {
          value: 3,
          spec: 'repair'
        },
        drive: 2,
        firearms: 4,
        melee: 4,
        stealth: 4,
        survival: 4,
      },
      knowledges: {
        areaKnowledge: {
          value: 3, 
          spec: 'New Orleans'
        }, //
        electronics: 3, //
        occult: 1,
        politics: 3,
      }
    },
    advantages: {
      disciplines: {
        celerity: 4,
        dominate: 2,
        fortitude: 1,
        obfuscate: 2,
        potence: 3,
        presence: 3,
        protean: 2
      },
      backgrounds: {
        allies: 2,
        contacts: 3,
        herd: 3,
        resources: 1,
        retainers: 2,
        status: 2,
      },
      virtues: {
        conscience: 1,
        selfControl: 4,
        courage: 5
      }
    },
    points: {
      morale: {
        humanity: 6
      },
      willpower: 8
    }
  }
}
