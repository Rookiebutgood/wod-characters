import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const MarcelGuilbeau: Character = {
  name: 'Marcel Guilbeau',
  from: 'vtm',
  city: 'New Orleans',
  description: 'Марсель Гильбо - князь Орлеана. Как Вентру питается только молодыми парнями.',
  sheet: {
    personal: {
      clan: VampireClans.Ventrue,
      generation: 8
    },
    attributes: {
      physical: {
        strength: 4 ,
        dexterity: 3,
        stamina: 4
      },
      social: {
        charisma: 5,
        appearence: 5,
        manipulation: 4 
      },
      mental: {
        perception: 5,
        intelligence: 3,
        wits: 4,
      }
    },
    abilities: {
      talents: {
        acting: 2, //?
        alertness: 3,
        brawl: 3,
        diplomacy: 3,
        dodge: 4,
        intimidation: 4,
        leadership: 3,
        subterfuge: 5
      },
      skills: {
        drive: 1,
        etiquette: 4,
        firearms: 4,
        meele: 3,
        ride: 3, // ?
        security: 2,
        stealth: 3,
        style: 2, // ?
        survival: 2
      },
      knowledges: {
        areaKnowledge: 5, // New Orlean // ?
        bureaucracy: 3, // ?
        camarillaLore: 3, // ?
        kindredLore: 3,
        law: 3,
        linguistic: 2,
        literature: 2, // ?
        lupineLore: 3, // ?
        mageLore: 2,
        occult: 3,
        politics: 5,
      }
    },
    advantages: {
      disciplines: {
        auspex: 4,
        celerity: 2,
        dominate: 4,
        fortitude: 5,
        obfuscate: 4,
        potence: 2,
        presence: 5
      },
      backgrounds: {
        allies: 4,
        contacts: 4,
        herd: 4,
        influence: 3,
        resources: 5,
        retainers: 5,
        status: 5
      },
      virtues: {
        conscience: 3,
        selfControl: 4,
        courage: 3 
      }
    },
    points: {
      morale: {
        humanity: 5
      },
      willpower: 8
    }
  }
}