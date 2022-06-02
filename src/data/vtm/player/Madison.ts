import type { Character } from '../../../types/character'
import { VampireClans } from '../../../types'

export const Madison: Character = {
  name: 'Madison',
  player: 'Настя',
  from: 'vtm',
  city: 'New York',
  description: 'Ветеран битвы за Нью Йорк. Крокодильи глаза.',
  sheet: {
    personal: {
      clan: VampireClans.Gangrel,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 3,
        dexterity: 4,
        stamina: 3,
      },
      social: {
        charisma: 3,
        appearence: 1,
        manipulation: 2,
      },
      mental: {
        perception: 3,
        intelligence: 2,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        alertness: 4,
        athletics: 3,
        brawl: 2,
        dodge: 4,
        intimidation: 2,
        subterfuge: 1,
      },
      skills: {
        animalKen: 3,
        drive: 2,
        security: 1,
        survival: 3,
      },
      knowledges: {
        academic: 1,
        linguistic: 1,
        medicine: 2,
        science: 1,
    },
  },
    advantages: {
      disciplines: {
        animalism: 1,
        fortitude: 2,
        protean: 4,
      },
      backgrounds: {
        allies: 2,
        fame: 1,
        herd: 2,
      },
      virtues: {
        conscience: 2,
        selfControl: 3,
        courage: 5,
      }
    },
    points: {
      morale: {
        humanity: 5
      },
      willpower: 6
    }
  }
}
