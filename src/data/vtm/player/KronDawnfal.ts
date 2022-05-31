import type { Character } from '../../../types'
import { VampireClans } from '../../../types'

export const KronDawnfal: Character = {
  name: 'Kron Dawnfal',
  player: 'Давид',
  from: 'vtm',
  city: 'New York',
  description: 'Был обращен в 1770 году, долго пролежал в торпоре, старомоден.',
  sheet: {
    personal: {
      clan: VampireClans.Nosferatu,
      generation: 13
    },
    attributes: {
      physical: {
        strength: 2,
        dexterity: {value: 5, spec: 'Бег по стенам'},
        stamina: 3,
      },
      social: {
        charisma: 4,
        appearence: 0,
        manipulation: 3
      },
      mental: {
        perception: 2,
        intelligence: 1,
        wits: 3,
      }
    },
    abilities: {
      talents: {
        athletics: 4,
        dodge: 3,
        intimidation: 4,
        subterfuge: 3,
      },
      skills: {
        performance: 4,
        stealth: 5, // someth
      },
      knowledges: {
        investigation: 3,
        linguistic: 2,
      }
    },
    advantages: {
      disciplines: {
        animalism: 3,
        obfuscate: 3,
        potience: 1,
      },
      backgrounds: {
        influence: 3,
        resources: 1,
        retainers: 2,
        status: 3,
      },
      virtues: {
        conscience: 1,
        selfControl: 2,
        courage: 4,
      }
    },
    points: {
      morale: {
        humanity: 3,
      },
      willpower: 4
    }
  }
}

// blood-chain with calebros lvl1