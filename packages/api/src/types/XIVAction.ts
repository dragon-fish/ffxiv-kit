import { XIVAnimationEnd } from './XIVAnimation'
import { XIVClassJobCategory } from './XIVClassJobCategory'
import { XIVGamePatch } from './XIVGamePatch'

export interface XIVActionCategory {
  ID: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
}

export interface XIVActionTimelineHit {
  ActionTimelineIDMode: number
  ID: number
  IsLoop: number
  IsMotionCanceledByMoving: number
  Key: string
  Key_chs: string
  KillUpper: number
  LoadType: number
  LookAtMode: number
  Pause: number
  Priority: number
  Resident: number
  ResidentPap: number
  Slot: number
  Stance: number
  StartAttach: number
  Type: number
  WeaponTimeline: null
  WeaponTimelineTarget: string
  WeaponTimelineTargetID: number
}

export interface XIVActionData {
  ActionCategory: XIVActionCategory
  ActionCategoryTarget: string
  ActionCategoryTargetID: number
  ActionCombo: null
  ActionComboTarget: string
  ActionComboTargetID: number
  ActionProcStatus: null
  ActionProcStatusTarget: string
  ActionProcStatusTargetID: number
  ActionTimelineHit: XIVActionTimelineHit
  ActionTimelineHitTarget: string
  ActionTimelineHitTargetID: number
  AdditionalCooldownGroup: number
  AffectsPosition: number
  AnimationEnd: XIVAnimationEnd
  AnimationEndTarget: string
  AnimationEndTargetID: number
  AnimationStart: null
  AnimationStartTarget: string
  AnimationStartTargetID: number
  Aspect: number
  AttackType: null
  AttackTypeTarget: string
  AttackTypeTargetID: number
  BehaviourType: number
  CanTargetDead: number
  CanTargetFriendly: number
  CanTargetHostile: number
  CanTargetParty: number
  CanTargetSelf: number
  Cast100ms: number
  CastType: number
  ClassJob: null
  ClassJobCategory: XIVClassJobCategory
  ClassJobCategoryTarget: string
  ClassJobCategoryTargetID: number
  ClassJobLevel: number
  ClassJobTarget: string
  ClassJobTargetID: number
  CooldownGroup: number
  Description: string
  DescriptionJSON_kr: null
  Description_chs: string
  Description_de: string
  Description_en: string
  Description_fr: string
  Description_ja: string
  Description_kr: null
  EffectRange: number
  GameContentLinks: {
    GeneralAction: {
      Action: number[]
    }
    PvPActionSort: {
      Action: string[]
    }
    Quest: {
      SystemReward1: number[]
    }
  }
  GamePatch: XIVGamePatch
  ID: number
  Icon: string
  IconHD: string
  IconID: number
  IsPlayerAction: number
  IsPvP: number
  IsRoleAction: number
  MaxCharges: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  Omen: null
  OmenTarget: string
  OmenTargetID: number
  Patch: number
  PreservesCombo: number
  PrimaryCostType: number
  PrimaryCostValue: number
  Range: number
  Recast100ms: number
  SecondaryCostType: number
  SecondaryCostValue: number
  StatusGainSelf: null
  StatusGainSelfTarget: string
  StatusGainSelfTargetID: number
  TargetArea: number
  UnlockLink: number
  Url: string
  VFX: null
  VFXTarget: string
  VFXTargetID: number
  XAxisModifier: number
}
