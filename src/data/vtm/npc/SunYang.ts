import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const SunYang: Character = {
  name: 'Sun Yang',
  from: 'vtm',
  city: 'New York',
  description: 'Также известен как "Wise frog". Глава Ассамитов в городе.',
  sheet: {
    personal: {
      clan: VampireClans.Assamites,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 4,
        stamina: 3,
      },
      social: {
        charisma: 4,
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
        alertness: 1,
        dodge: 2,
        empathy: 3,
        expression: 4,
        leadership: 1,
        streetwise: 1,
        subterfuge: 3,
        diplomacy: 3, // ?
        hobbyTalent: { value: 3, spec: 'go' }, // ?
        instruction: 3, // ?
        intuition: 2, // ?
      },
      skills: {
        animalKen: 1,
        crafts: 2,
        etiquette: 2,
        survival: 2,
        martialArts: 2, // ?
      },
      knowledges: {
        academic: 4,
        investigation: 3,
        linguistic: {
          value: 3,
          spec: 'Arabic, english, Mandarine, Japanese'
        },
        occult: 2,
        politics: 3,
        science: 3,
        enigmas: 3, // ?
    },
  },
    advantages: {
      disciplines: {
          animalism: 1,
          auspex: 2,
          celerity: 2,
          obfuscate: 3,
          quietus: 1,
      },
      backgrounds: {
        allies: 2,
        contacts: 4,
        fame: 1,
        herd: 1,
        mentor: 1,
        resources: 1,
        clanPrestige: 1, // ?
      },
      virtues: {
        conscience: 2,
        selfControl: 4,
        courage: 4
      }
    },
    points: {
      morale: {
        humanity: 6 
      },
      willpower: 7
    }
  }
}
