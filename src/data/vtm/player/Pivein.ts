import type { Character } from '../../../types/character'
import { VampireClans } from '../../../types'

export const Pivein: Character = {
  name: 'Pivein',
  player: 'Элина',
  from: 'vtm',
  city: 'New York',
  description: 'Бывший модельер, имеет индейские корни',
  sheet: {
    personal: {
      clan: VampireClans.Gangrel,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 1,
        dexterity: 4,
        stamina: 1,
      },
      social: {
        charisma: 4,
        appearence: 1,
        manipulation: 2,
      },
      mental: {
        perception: 3,
        intelligence: 2,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        alertness: 2,
        athletics: 1,
        dodge: 1,
        empathy: 1,
        intimidation: 1,
        leadership: 1,
        streetwise: 1,
        subterfuge: 1,

      },
      skills: {
        animalKen: 2,
        drive: 3,
        etiquette: 1,
        firearms: 1,
        performance: 2,
        security: 2,
        stealth: 1,
        survival: 3,
      },
      knowledges: {
        finance: 2,
        law: 1,
        medicine: 2,
      }
    },
    advantages: {
      disciplines: {
        animalism: 2,
        fortitude: 1,
        protean: 2,
      },
      backgrounds: {
        allies: 1,
        contacts: 3,
        fame: 1,
        influence: 2,
        resources: 2,
        status: 3,
      },
      virtues: {
        conscience: 2,
        selfControl: 2,
        courage: 3
      }
    },
    points: {
      morale: {
        humanity: 4
      },
      willpower: 5
    }
  }
}

// glock
// garu contacts