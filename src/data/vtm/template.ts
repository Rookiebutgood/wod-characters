import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

const template: Character = {
  name: '',
  from: 'vtm',
  city: '',
  description: '',
  sheet: {
    personal: {
      clan: VampireClans.Tremere,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 0,
        dexterity: 0,
        stamina: 0,
      },
      social: {
        charisma: 0,
        manipulation: 0,
        appearence: 0,
      },
      mental: {
        perception: 0,
        intelligence: 0,
        wits: 0,
      }
    },
    abilities: {
      talents: {
        alertness: 0,
        athletics: 0,
        brawl: 0,
        dodge: 0,
        empathy: 0,
        expression: 0,
        intimidation: 0,
        leadership: 0,
        streetwise: 0,
        subterfuge: 0,
      },
      skills: {
        animalKen: 0,
        crafts: 0,
        drive: 0,
        etiquette: 0,
        firearms: 0,
        melee: 0,
        performance: 0,
        security: 0,
        stealth: 0,
        survival: 0,
      },
      knowledges: {
        academic: 0,
        computer: 0,
        finance: 0,
        investigation: 0,
        law: 0,
        linguistic: {
          value: 0,
          spec: ''
        },
        medicine: 0,
        occult: 0,
        politics: 0,
        science: 0,
    },
  },
    advantages: {
      disciplines: {

      },
      backgrounds: {
        allies: 0,
        contacts: 0,
        influence: 0,
        mentor: 0,
        resources: 0,
        status: 0,
      },
      virtues: {
        conscience: 0,
        selfControl: 0,
        courage: 0
      }
    },
    points: {
      morale: {
        humanity: 0 
      },
      willpower: 0
    }
  }
}
