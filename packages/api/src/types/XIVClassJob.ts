import { XIVActionData } from './XIVAction'
import { XIVItemData } from './XIVItem'
import { XIVMonsterNoteData } from './XIVMonsterNote'
import { XIVQuestData } from './XIVQuest'

export type XIVClassJobID =
  | 'ACN'
  | 'ADV'
  | 'ALC'
  | 'ARC'
  | 'ARM'
  | 'AST'
  | 'BLM'
  | 'BLU'
  | 'BRD'
  | 'BSM'
  | 'BTN'
  | 'CNJ'
  | 'CRP'
  | 'CUL'
  | 'DNC'
  | 'DRG'
  | 'DRK'
  | 'FSH'
  | 'GLA'
  | 'GNB'
  | 'GSM'
  | 'LNC'
  | 'LTW'
  | 'MCH'
  | 'MIN'
  | 'MNK'
  | 'MRD'
  | 'NIN'
  | 'Nam'
  | 'Nam'
  | 'Nam'
  | 'Nam'
  | 'Nam'
  | 'Nam'
  | 'PGL'
  | 'PLD'
  | 'RDM'
  | 'ROG'
  | 'RPR'
  | 'SAM'
  | 'SCH'
  | 'SGE'
  | 'SMN'
  | 'THM'
  | 'WAR'
  | 'WHM'
  | 'WVR'

export type XIVClassJobCategory = {
  ID: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
} & Record<XIVClassJobID, number>

export interface XIVClassJobData {
  Abbreviation: XIVClassJobID
  Abbreviation_chs: XIVClassJobID
  Abbreviation_de: string
  Abbreviation_en: XIVClassJobID
  Abbreviation_fr: string
  Abbreviation_ja: string
  BattleClassIndex: number
  CanQueueForDuty: number
  ClassJobCategory: XIVClassJobCategory
  ClassJobCategoryTarget: 'ClassJobCategory'
  ClassJobCategoryTargetID: number
  ClassJobParent: XIVClassJobCategory | null
  ClassJobParentTarget: 'ClassJob'
  ClassJobParentTargetID: number
  DohDolJobIndex: number
  ExpArrayIndex: number
  ID: number
  Icon: string
  IsLimitedJob: number
  ItemSoulCrystal: XIVItemData | null
  ItemSoulCrystalTarget: 'Item'
  ItemSoulCrystalTargetID: number
  ItemStartingWeapon: XIVItemData | null
  ItemStartingWeaponTarget: 'Item'
  ItemStartingWeaponTargetID: number
  JobIndex: number
  LimitBreak1: XIVActionData | null
  LimitBreak1Target: 'Action'
  LimitBreak1TargetID: number
  LimitBreak2: XIVActionData | null
  LimitBreak2Target: 'Action'
  LimitBreak2TargetID: number
  LimitBreak3: XIVActionData | null
  LimitBreak3Target: 'Action'
  LimitBreak3TargetID: number
  ModifierDexterity: number
  ModifierHitPoints: number
  ModifierIntelligence: number
  ModifierManaPoints: number
  ModifierMind: number
  ModifierPiety: number
  ModifierStrength: number
  ModifierVitality: number
  MonsterNote: XIVMonsterNoteData | null
  MonsterNoteTarget: 'MonsterNote'
  MonsterNoteTargetID: number
  Name: string
  NameEnglish: string
  NameEnglish_chs: string
  NameEnglish_de: string
  NameEnglish_en: string
  NameEnglish_fr: string
  NameEnglish_ja: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  PartyBonus: number
  Prerequisite: XIVQuestData | null
  PrerequisiteTarget: 'Quest'
  PrerequisiteTargetID: number
  PrimaryStat: number
  PvPActionSortRow: number
  RelicQuest: XIVQuestData | null
  RelicQuestTarget: 'Quest'
  RelicQuestTargetID: number
  Role: number
  StartingLevel: number
  StartingTown: null
  StartingTownTarget: 'Town'
  StartingTownTargetID: number
  UIPriority: number
  UnlockQuest: XIVQuestData | null
  UnlockQuestTarget: 'Quest'
  UnlockQuestTargetID: number
}
