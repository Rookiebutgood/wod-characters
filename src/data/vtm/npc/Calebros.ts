import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Calebros: Character = {
  name: 'Calebros',
  from: 'vtm',
  city: 'New York',
  description: '',
  sheet: {
    personal: {
      clan: VampireClans.Nosferatu,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 3,
        dexterity: 3,
        stamina: 3
      },
      social: {
        charisma: 2,
        appearence: 0,
        manipulation: 5
      },
      mental: {
        perception: 5,
        intelligence: 5,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        alertness: 4,
        brawl: 4,
        intimidation: 3,
        leadership: 3,
        streetwise: 5,
        subterfuge: 4
      },
      skills: {
        animalKen: 3,
        crafts: 1,
        drive: 2,
        melee: 1,
        performance: 2,
        security: 2,
        stealth: 4,
        survival: 3
      },
      knowledges: {
        academic: 4,
        camarillaLore: 2, // ?
        computer: 1,
        finance: 3,
        investigation: 5,
        linguistic: 3, // greek, latin, russian, spanish
        occult: 3,
        politics: 4,
        sabbatLore: 1, // ?
        science: 2,
        sewerLore: 3
      }
    },
    advantages: {
      disciplines: {
        animalism: 3,
        auspex: 1,
        celerity: 1,
        fortitude: 2,
        obfuscate: 5,
        potence: 3,
        protean: 2
      },
      backgrounds: {
        clanPrestige: 2,
        contacts: 5,
        herd: 3,
        influence: 3,
        mentor: 5,
        resources: 4,
        status: 4
      },
      virtues: {
        conscience: 2,
        selfControl: 3,
        courage: 2 
      }
    },
    points: {
      morale: {
        humanity: 5
      },
      willpower: 7
    }
  }
}