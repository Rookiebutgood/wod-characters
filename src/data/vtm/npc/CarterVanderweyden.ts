import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const CarterVanderweyden: Character = {
  name: 'Carter Vanderweyden',
  from: 'vtm',
  city: 'New York',
  description: 'Психоз - фуга',
  sheet: {
    personal: {
      clan: VampireClans.Malkavian,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 3,
        dexterity: 2,
        stamina: 2,
      },
      social: {
        charisma: 4,
        manipulation: 4,
        appearence: 4,
      },
      mental: {
        perception: 4,
        intelligence: 4,
        wits: 2,
      }
    },
    abilities: {
      talents: {
        empathy: 4,
        expression: 4,
        intimidation: 1,
        leadership: 3,
        subterfuge: 3,
        grace: 3, // ?
        intuition: 2, // ?
        masquerade: 1, // ?
        diplomacy: 2, // ?
      },
      skills: {
        crafts: 1,
        drive: 2,
        etiquette: 2,
        performance: 4,
      },
      knowledges: {
        academic: 3,
        computer: 2,
        finance: 3,
        investigation: 2, 
        law: { value: 5, spec: 'civil, kindred tradition'},
        linguistic: { value: 3, spec: 'dutch, french, latin, spanich'},
        politics: 4,
        bureaucracy: 2, // ?
        camarillaLore: 2, // ?
        research: 2,  // ?
      }
    },
    advantages: {
      disciplines: {
        auspex: 3,
        dementation: 2,
        dominate: 2,
        obfuscate: 1,
        serpentis: 1,
      },
      backgrounds: {
        allies: 3,
        fame: 1,
        herd: 2,
        influence: 1,
        resources: 4,
        retainers: 1,
      },
      virtues: {
        conscience: 4,
        selfControl: 4,
        courage: 3 
      }
    },
    points: {
      morale: {
        humanity: 7
      },
      willpower: 7
    }
  }
}
