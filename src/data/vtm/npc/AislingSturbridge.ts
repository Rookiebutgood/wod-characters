import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const AislingSturbridge: Character = {
  name: 'Aisling Sturbridge',
  from: 'vtm',
  city: 'New York',
  description: 'Регент пяти капелл Нью-Йорка',
  sheet: {
    personal: {
      clan: VampireClans.Tremere,
      generation: 10
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: 4,
        stamina: 2,
      },
      social: {
        charisma: 4,
        manipulation: 3,
        appearence: 3,
      },
      mental: {
        perception: 4,
        intelligence: 5,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        alertness: 4,
        athletics: 3,
        dodge: 5,
        empathy: 2,
        intimidation: 2,
        leadership: 3,
        streetwise: 2,
        subterfuge: 4,
      },
      skills: {
        drive: 1,
        etiquette: 3,
        firearms: 3,
        melee: 2,
        security: 1,
        stealth: 3,
        survival: 1,
        disguise: 3, // ?
      },
      knowledges: {
        academic: 4,
        computer: 1,
        history: 3, // ?
        investigation: 4,
        law: 1,
        linguistic: {
          value: 5, 
          spec: 'arabic, cantonese, dutch, french, german, greek, hebrew(Ivrit), hungarian, japanise, latin, mandarin, portugise, romany, sanskrit, spanish, yiddish'
        },
        occult: 5,
        politics: 2,
        science: 2,
        bureaucracy: 2,
        camarillaLore: 3,
        clanKnowledge: {
          value: 3, 
          spec: 'Tremere'
        },
        sabbatLore: 3,
      }
    },
    advantages: {
      disciplines: {
        auspex: 5,
        celerity: 2,
        dominate: 3,
        fortitude: 2,
        obfuscate: 2,
        thaumaturgy: 5,
        thaumaturgyBlood: 5,
        thaumaturgyMovementMind: 5,
        thaumaturgyFlames: 4,
        thaumaturgyCountermagic: 2,
        thaumaturgyElemental: 3,
        thaumaturgySpirit: 2,
        thaumaturgyTechnomancy: 3,
      },
      backgrounds: {
        allies: 4,
        clanPrestige: 2,
        contacts: 2,
        influence: 3,
        mentor: 5,
        resources: 4,
        status: 2,
      },
      virtues: {
        conscience: 3,
        selfControl: 4,
        courage: 4
      }
    },
    points: {
      morale: {
        humanity: 7
      },
      willpower: 9
    }
  }
}