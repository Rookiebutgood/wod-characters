import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const Morgaine: Character = {
  name: 'Morgaine',
  from: 'vtm',
  city: 'New Orleans',
  description: 'Самая влиятельная тореодор в городе. Будет примоген. Часто впадает в ярость Зверя.',
  sheet: {
    personal: {
      clan: VampireClans.Toreador,
      generation: 8
    },
    attributes: {
      physical: {
        strength: 4,
        dexterity: 5,
        stamina: 3
      },
      social: {
        charisma: 4,
        appearence: 5,
        manipulation: 4 
      },
      mental: {
        perception: 3,
        intelligence: 3,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        acting: 4, //?
        artisticExpression: 3, //?
        alertness: 2,
        brawl: 3,
        dodge: 1,
        intimidation: 5,
        leadership: 2,
      },
      skills: {
        drive: 1,
        etiquette: 4,
        firearms: 2,
        melee: 1,
        music: 4,
        sculpture: 5,
        stealth: 1,
      
      },
      knowledges: {
        areaKnowledge: 3, // New Orlean // ?
        camarillaLore: 3, // ?
        finance: 1,
        linguistic: 4,
        occult: 4,
        politics: 3,
      }
    },
    advantages: {
      disciplines: {
        auspex: 4,
        celerity: 3,
        dominate: 4,
        necromacy: 1,
        obfuscate: 1,
        presence: 5,
        protean: 4,
        thaumaturgy: 2,
        thaumaturgyFlames: 1,
        thaumaturgyMovementMind: 1,
        thaumaturgyWeather: 1,
        thaumaturgyConjuring: 1,
        thaumaturgyCorruption: 1
      },
      backgrounds: {
        allies: 1,
        contacts: 2,
        herd: 1,
        resources: 4,
        retainers: 1,
        status: 3
      },
      virtues: {
        conscience: 2,
        selfControl: 1,
        courage: 5
      }
    },
    points: {
      morale: {
        humanity: 4
      },
      willpower: 8
    }
  }
}