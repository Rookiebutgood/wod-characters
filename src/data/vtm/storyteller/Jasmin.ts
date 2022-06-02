import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Jasmin: Character = {
  name: '-Jasmin',
  from: 'vtm',
  city: 'New York',
  description: 'Владелица клуба Оазис, одна из влиятельных Сеттитов в городе. Гедонист.',
  sheet: {
    personal: {
      clan: VampireClans.FollowersOfSet,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 3,
        stamina: 2,
      },
      social: {
        charisma: 3,
        manipulation: 3,
        appearence: 5,
      },
      mental: {
        perception: 3,
        intelligence: 3,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        alertness: 2,
        dodge: 2,
        empathy: 2,
        expression: 3,
        leadership: 2,
        subterfuge: 3,
      },
      skills: {
        animalKen: 1,
        etiquette: 3,
        melee: 2,
        performance: 1,
        stealth: 2,
      },
      knowledges: {
        academic: 2,
        finance: 3,
        linguistic: 2,
        occult: 2,
    },
  },
    advantages: {
      disciplines: {
          presence: 3,
          serpentis: 3,
      },
      backgrounds: {
        contacts: 3,
        herd: 4,
        influence: 1,
        resources: 4,
      },
      virtues: {
        conscience: 3,
        selfControl: 4,
        courage: 3,
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
