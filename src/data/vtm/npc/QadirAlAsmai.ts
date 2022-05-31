import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const QadirAlAsmai: Character = {
  name: 'Qadir Al-Asmai',
  from: 'vtm',
  city: 'New York',
  description: '',
  sheet: {
    personal: {
      clan: VampireClans.Toreador,
      generation: 9
    },
    attributes: {
      physical: {
        strength: 3,
        dexterity: 5,
        stamina: 4
      },
      social: {
        charisma: 3,
        appearence: 3,
        manipulation: 3 
      },
      mental: {
        perception: 2,
        intelligence: 4,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        alertness: 3,
        athletics: 4,
        brawl: 3,
        dodge: 5,
        empathy: 1,
        expression: 1,
        grace: 2, // ?
        interrogation: 4,
        intimidation: 3,
        intuition: 2, // ?
        leadership: 1,
        search: 2,
        streetwise: 2,
        subterfuge: 2
      },
      skills: {
        camouflage: 1, // ?
        drive: 3,
        etiquette: 2,
        firearms: 2,
        melee: 4,
        security: 2,
        stealth: 2,
        survival: 3
      },
      knowledges: {
        academic: 3,
        camarillaLore: 3, // ?
        finance: 1,
        investigation: 4,
        law: 3,
        linguistic: 3,  // cantonese, english, korean, spanish
        medicine: 1,
        occult: 1,
        politics: 2,
        sabbatLore: 1, // ?
        science: 1
      }
    },
    advantages: {
      disciplines: {
        auspex: 2,
        celerity: 3,
        fortitude: 3,
        obfuscate: 1,
        necromacy: 1, // sepulchre
        necromacySepulchre: 1,
        presence: 4
      },
      backgrounds: {
        contacts: 5,
        herd: 1,
        resources: 3,
        status: 3
      },
      virtues: {
        conscience: 4,
        selfControl: 4,
        courage: 5
      }
    },
    points: {
      morale: {
        humanity: 4
      },
      willpower: 7
    }
  }
}