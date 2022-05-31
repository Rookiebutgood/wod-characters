import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const DavidMorgan: Character = {
  name: 'David Morgan',
  from: 'vtm',
  city: 'New York',
  description: 'Антисоциален, носит часы которые покрываются кровью в присутствии слабокровок',
  sheet: {
    personal: {
      clan: VampireClans.Malkavian,
      generation: 12
    },
    attributes: {
      physical: {
        strength: 4,
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
        wits: 2,
      }
    },
    abilities: {
      talents: {
        alertness: 2,
        athletics: 2,
        brawl: 3,
        dodge: 2,
        empathy: 1,
        intimidation: 2,
        streetwise: 2,
        subterfuge: 1,
      },
      skills: {
        animalKen: 1,
        drive: 3,
        firearms: 2,
        melee: 3,
        security: 2,
        stealth: 2,
        survival: 1,
      },
      knowledges: {
        academic: 1,
        computer: 1,
        investigation: 3,
        politics: 2,
      }
    },
    advantages: {
      disciplines: {
        auspex: 2,
        celerity: 1,
        obfuscate: 1,
        potence: 2,
      },
      backgrounds: {
        mentor: 1,
        resources: 2,
        status: 2,
      },
      virtues: {
        conscience: 3,
        selfControl: 3,
        courage: 4,
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