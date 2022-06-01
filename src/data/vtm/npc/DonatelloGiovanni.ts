import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const DonatelloGiovanni: Character = {
  name: 'Donatello Giovanni',
  from: 'vtm',
  city: 'New York',
  description: 'Главный Джованни в городе',
  sheet: {
    personal: {
      clan: VampireClans.Giovanni,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 4,
        dexterity: 2,
        stamina: 3,
      },
      social: {
        charisma: 4,
        manipulation: 4,
        appearence: 3,
      },
      mental: {
        perception: 2,
        intelligence: 3,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        empathy: 2,
        expression: 2,
        intimidation: 3,
        leadership: 3,
        streetwise: 4,
        subterfuge: 3,
        diplomacy: 2, // ?
      },
      skills: {
        animalKen: 2,
        etiquette: 3,
        firearms: 1,
      },
      knowledges: {
        academic: 2,
        finance: 4,
        investigation: 1,
        law: 3,
        linguistic: {
          value: 3,
          spec: 'English, French, German, Latin'
        },
        medicine: 3,
        politics: 3,
        areaKnowledge: { value: 2, spec: 'Manhattan' }, // ?
        sewerLore: 1, // ?
        underworldLore: 3, // ?
    },
  },
    advantages: {
      disciplines: {
          auspex: 1,
          dominate: 4,
          potence: 2,
          presence: 2,
      },
      backgrounds: {
        allies: 5,
        contacts: 2,
        herd: 2,
        influence: 3,
        resources: 5,
        retainers: 2,
        clanPrestige: 2, // ?
      },
      virtues: {
        conscience: 1,
        selfControl: 5,
        courage: 3
      }
    },
    points: {
      morale: {
        humanity: 4 
      },
      willpower: 6
    }
  }
}
