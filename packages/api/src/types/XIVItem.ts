import { BoolNumber } from './Utilities'
import { XIVActionData } from './XIVAction'
import { XIVClassJobCategory, XIVClassJobData } from './XIVClassJob'
import { XIVGamePatch } from './XIVGamePatch'
import { XIVGrandCompany } from './XIVGrandCompany'

export interface XIVBaseParam {
  '1HWpn%': number
  '2HWpn%': number
  'Bracelet%': number
  'Chest%': number
  'ChestHead%': number
  'ChestHeadLegsFeet%': number
  'ChestLegsFeet%': number
  'ChestLegsGloves%': number
  Description: string
  Description_chs: string
  Description_de: string
  Description_en: string
  Description_fr: string
  Description_ja: string
  'Earring%': number
  'Feet%': number
  'Hands%': number
  'Head%': number
  'HeadChestHandsLegsFeet%': number
  ID: number
  'Legs%': number
  'LegsFeet%': number
  MeldParam0: number
  MeldParam1: number
  MeldParam10: number
  MeldParam11: number
  MeldParam12: number
  MeldParam2: number
  MeldParam3: number
  MeldParam4: number
  MeldParam5: number
  MeldParam6: number
  MeldParam7: number
  MeldParam8: number
  MeldParam9: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  'Necklace%': number
  'OH%': number
  OrderPriority: number
  PacketIndex: number
  'Ring%': number
  'UnderArmor%': number
  'Waist%': number
}

export interface XIVItemEquipSlotCategory {
  Body: number
  Ears: number
  Feet: number
  FingerL: number
  FingerR: number
  Gloves: number
  Head: number
  ID: number
  Legs: number
  MainHand: number
  Neck: number
  OffHand: number
  SoulCrystal: number
  Waist: number
  Wrists: number
}

export interface XIVItemKind {
  ID: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  Name_kr: string
}

export interface XIVItemUICategory {
  ID: number
  Icon: string
  IconHD: string
  IconID: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  OrderMajor: number
  OrderMinor: number
}

export interface XIVItemStats {
  ID: number
  NQ: number
  HQ?: number
}

export interface XIVItemBonuse {
  ID: number
  Max: number
  MaxHQ: number
  Relative: boolean
  Value: number
  ValueHQ: number
}

export interface XIVItemData {
  AdditionalData: number
  Adjective: number
  AetherialReduce: number
  AlwaysCollectable: number
  Article: number
  BaseParam0: XIVBaseParam | null
  BaseParam0Target: 'BaseParam'
  BaseParam0TargetID: number
  BaseParam1: XIVBaseParam | null
  BaseParam1Target: 'BaseParam'
  BaseParam1TargetID: number
  BaseParam2: XIVBaseParam | null
  BaseParam2Target: 'BaseParam'
  BaseParam2TargetID: number
  BaseParam3: XIVBaseParam | null
  BaseParam3Target: 'BaseParam'
  BaseParam3TargetID: number
  BaseParam4: XIVBaseParam | null
  BaseParam4Target: 'BaseParam'
  BaseParam4TargetID: number
  BaseParam5: XIVBaseParam | null
  BaseParam5Target: 'BaseParam'
  BaseParam5TargetID: number
  BaseParamModifier: number
  BaseParamSpecial0: XIVBaseParam | null
  BaseParamSpecial0Target: 'BaseParam'
  BaseParamSpecial0TargetID: number
  BaseParamSpecial1: XIVBaseParam | null
  BaseParamSpecial1Target: 'BaseParam'
  BaseParamSpecial1TargetID: number
  BaseParamSpecial2: XIVBaseParam | null
  BaseParamSpecial2Target: 'BaseParam'
  BaseParamSpecial2TargetID: number
  BaseParamSpecial3: XIVBaseParam | null
  BaseParamSpecial3Target: 'BaseParam'
  BaseParamSpecial3TargetID: number
  BaseParamSpecial4: XIVBaseParam | null
  BaseParamSpecial4Target: 'BaseParam'
  BaseParamSpecial4TargetID: number
  BaseParamSpecial5: XIVBaseParam | null
  BaseParamSpecial5Target: 'BaseParam'
  BaseParamSpecial5TargetID: number
  BaseParamValue0: number
  BaseParamValue1: number
  BaseParamValue2: number
  BaseParamValue3: number
  BaseParamValue4: number
  BaseParamValue5: number
  BaseParamValueSpecial0: number
  BaseParamValueSpecial1: number
  BaseParamValueSpecial2: number
  BaseParamValueSpecial3: number
  BaseParamValueSpecial4: number
  BaseParamValueSpecial5: number
  Bonuses?: Record<string, XIVItemBonuse>
  Block: number
  BlockRate: number
  CanBeHq: BoolNumber
  CastTimeS: number
  ClassJobCategory: XIVClassJobCategory | null
  ClassJobCategoryTarget: 'ClassJobCategory'
  ClassJobCategoryTargetID: number
  ClassJobRepair: XIVClassJobData | null
  ClassJobRepairTarget: 'ClassJob'
  ClassJobRepairTargetID: number
  ClassJobUse: XIVClassJobData | null
  ClassJobUseTarget: 'ClassJob'
  ClassJobUseTargetID: number
  CooldownS: number
  DamageMag: number
  DamagePhys: number
  DefenseMag: number
  DefensePhys: number
  DelayMs: number
  Description: string
  DescriptionJSON_kr: unknown
  Description_chs: string
  Description_de: string
  Description_en: string
  Description_fr: string
  Description_ja: string
  Description_kr: unknown
  Desynth: number
  EquipRestriction: number
  EquipSlotCategory: XIVItemEquipSlotCategory | null
  EquipSlotCategoryTarget: 'EquipSlotCategory'
  EquipSlotCategoryTargetID: number
  FilterGroup: number
  GameContentLinks: {
    QuestClassJobReward?: {
      RewardItem0: number[]
    }
  }
  GamePatch?: XIVGamePatch
  GrandCompany: XIVGrandCompany | null
  GrandCompanyTarget: 'GrandCompany'
  GrandCompanyTargetID: number
  ID: number
  Icon: string
  IconHD: string
  IconID: number
  IsAdvancedMeldingPermitted: BoolNumber
  IsCollectable: BoolNumber
  IsCrestWorthy: BoolNumber
  IsDyeable: BoolNumber
  IsGlamourous: BoolNumber
  IsIndisposable: BoolNumber
  IsPvP: BoolNumber
  IsUnique: BoolNumber
  IsUntradable: BoolNumber
  ItemAction: XIVActionData | null
  ItemActionTarget: 'ItemAction'
  ItemActionTargetID: number
  ItemGlamour: XIVItemData | null
  ItemGlamourTarget: 'Item'
  ItemGlamourTargetID: number
  ItemKind: XIVItemKind
  ItemRepair: {
    ID: number
    Item: XIVItemData
    ItemTarget: 'Item'
    ItemTargetID: number
  } | null
  ItemRepairTarget: 'ItemRepairResource'
  ItemRepairTargetID: number
  ItemSearchCategory: unknown
  ItemSearchCategoryTarget: 'ItemSearchCategory'
  ItemSearchCategoryTargetID: number
  ItemSeries: unknown
  ItemSeriesTarget: 'ItemSeries'
  ItemSeriesTargetID: number
  ItemSortCategory: {
    ID: number
    Param: number
  }
  ItemSortCategoryTarget: 'ItemSortCategory'
  ItemSortCategoryTargetID: number
  ItemSpecialBonus: unknown
  ItemSpecialBonusParam: number
  ItemSpecialBonusTarget: 'ItemSpecialBonus'
  ItemSpecialBonusTargetID: number
  ItemUICategory: XIVItemUICategory | null
  ItemUICategoryTarget: 'ItemUICategory'
  ItemUICategoryTargetID: number
  LevelEquip: number
  LevelItem: number
  Lot: number
  Materia: unknown
  MateriaSlotCount: number
  MaterializeType: number
  ModelMain: string
  ModelSub: string
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  Patch: number
  Plural: string
  Plural_chs: string
  Plural_de: string
  Plural_en: string
  Plural_fr: string
  Plural_ja: string
  PossessivePronoun: number
  PriceLow: number
  PriceMid: number
  Pronoun: number
  Rarity: number
  Singular: string
  Singular_chs: string
  Singular_de: string
  Singular_en: string
  Singular_fr: string
  Singular_ja: string
  StackSize: number
  StartsWithVowel: number
  Stats?: Record<string, XIVItemStats>
  SubStatCategory: number
  Url: string
}
