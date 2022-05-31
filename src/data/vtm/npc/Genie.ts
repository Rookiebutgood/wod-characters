import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Genie: Character = {
  name: 'Eugenio "Genie" Estevez',
  from: 'vtm',
  city: 'New York',
  description: 'Главный в комнатах Монпасан',
  sheet: {
    personal: {
      clan: VampireClans.Tremere,
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
        perception: 3,
        intelligence: 3,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        athletics: 1,
        dodge: 2,
        empathy: 3,
        expression: 1,
        intimidation: 1,
        leadership: 3,
        subterfuge: 3,
      },
      skills: {
        drive: 1,
        etiquette: 3,
        firearms: 1,
        melee: 2,
        performance: 2,
        security: 1,
        stealth: 2,
        survival: 1,
      },
      knowledges: {
        academic: 4,
        computer: 1,
        finance: 4,
        law: 1,
        linguistic: {
          value: 4,
          spec: 'Arabic, english, french, german, greek, latin, mandarin, turkish'
        },
        occult: 5,
        politics: 3,
        science: 1,
    },
  },
    advantages: {
      disciplines: {
          auspex: 4,
          dominate: 2,
          fortitude: 3,
          thaumaturgy: 5,
          thaumaturgyBlood: 5,
          thaumaturgySpirit: 5,
          thaumaturgyFocusedMind: 4,
          // thaumaturgyTransmutation: 4,
          thaumaturgyFlames: 3,
          thaumaturgyCountermagic: 2
      },
      backgrounds: {
        allies: 2,
        contacts: 4,
        influence: 1,
        mentor: 1,
        resources: 4,
        retainers: 1,
        status: 2,
        clanPrestige: 2 // ?
      },
      virtues: {
        conscience: 2,
        selfControl: 4,
        courage: 3
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
