import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const HelenaPanhard: Character = {
  name: 'Helena Panhard',
  from: 'vtm',
  city: 'New York',
  description: 'Хелена Панхард - князь Нью-Йорка. Как Вентру питается только детьми успешных семей.',
  sheet: {
    personal: {
      clan: VampireClans.Ventrue,
      generation: 8
    },
    attributes: {
      physical: {
        strength: 3,
        dexterity: 2,
        stamina: 3
      },
      social: {
        charisma: 4,
        appearence: 2,
        manipulation: 4 
      },
      mental: {
        perception: 3,
        intelligence: 4,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        diplomacy: 4, // ?
        empathy: 3,
        expression: 2,
        grace: 3, // ?
        intimidation: 2,
        intrigue: 3, // ?
        intuition: 4, // ?
        leadership: 3,
        subterfuge: 4
      },
      skills: {
        crafts: 1,
        etiquette: 4,
        performance: 2
      },
      knowledges: {
        academic: 2,
        areaKnowledge: 1, // Manhetten // ?
        bureaucracy: 3, // ?
        camarillaLore: 3, // ?
        citySecrets: 1, // ?
        finance: 4,
        history: 2, // ?
        law: 2,
        politics: 3
      }
    },
    advantages: {
      disciplines: {
        auspex: 2,
        dominate: 4,
        fortitude: 2,
        presence: 3
      },
      backgrounds: {
        allies: 2,
        contacts: 4,
        herd: 3,
        influence: 2,
        resources: 4,
        retainers: 3,
        status: 3
      },
      virtues: {
        conscience: 3,
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