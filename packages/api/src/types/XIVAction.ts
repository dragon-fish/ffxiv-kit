import { XIVAnimationEnd } from './XIVAnimation'
import { XIVClassJobCategory, XIVClassJobData } from './XIVClassJob'
import { XIVGamePatch } from './XIVGamePatch'
import { XIVStatusData } from './XIVStatus'

export interface XIVActionCategory {
  ID: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
}

export interface XIVActionTimeline {
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

// TODO: Define XIVActionProcStatus type
export type XIVActionProcStatus = unknown

export interface XIVActionData {
  ActionCategory: XIVActionCategory
  ActionCategoryTarget: 'ActionCategory'
  ActionCategoryTargetID: number
  ActionCombo: XIVActionData | null
  ActionComboTarget: 'Action'
  ActionComboTargetID: 0
  ActionProcStatus: XIVActionProcStatus | null
  ActionProcStatusTarget: 'ActionProcStatus'
  ActionProcStatusTargetID: number
  ActionTimelineHit: XIVActionTimeline | null
  ActionTimelineHitTarget: 'ActionTimeline'
  ActionTimelineHitTargetID: number
  AdditionalCooldownGroup: number
  AffectsPosition: number
  AnimationEnd: XIVActionTimeline | null
  AnimationEndTarget: 'ActionTimeline'
  AnimationEndTargetID: number
  AnimationStart: {
    ID: number
    Name: XIVActionTimeline
    NameTarget: 'ActionTimeline'
    NameTargetID: number
    VFX: unknown
    VFXTarget: 'VFX'
    VFXTargetID: number
  }
  AnimationStartTarget: 'ActionCastTimeline'
  AnimationStartTargetID: number
  Aspect: number
  // TODO: Define XIVAttackType type
  AttackType: unknown
  AttackTypeTarget: 'AttackType'
  AttackTypeTargetID: number
  BehaviourType: number
  CanTargetDead: boolean
  CanTargetFriendly: boolean
  CanTargetHostile: boolean
  CanTargetParty: boolean
  CanTargetSelf: boolean
  Cast100ms: number
  CastType: number
  ClassJob: XIVClassJobData | null
  ClassJobCategory: XIVClassJobCategory
  ClassJobCategoryTarget: 'ClassJobCategory'
  ClassJobCategoryTargetID: number
  ClassJobLevel: number
  ClassJobTarget: 'ClassJob'
  ClassJobTargetID: number
  CooldownGroup: number
  Description: string
  DescriptionJSON_kr: unknown
  Description_chs: string
  Description_de: string
  Description_en: string
  Description_fr: string
  Description_ja: string
  Description_kr: null
  EffectRange: number
  GameContentLinks: {
    EventItem?: {
      Action?: number[]
    }
    PvPActionSort?: {
      Action?: number[]
    }
  }
  GamePatch: XIVGamePatch
  ID: number
  Icon: string
  IconHD: string
  IconID: number
  IsPlayerAction: boolean
  IsPvP: boolean
  IsRoleAction: boolean
  MaxCharges: number
  Name: string
  Name_chs: string
  Name_de: string
  Name_en: string
  Name_fr: string
  Name_ja: string
  // TODO: Define XIVOmen type
  Omen: unknown
  OmenTarget: 'Omen'
  OmenTargetID: number
  Patch: number
  PreservesCombo: number
  PrimaryCostType: number
  PrimaryCostValue: number
  Range: number
  Recast100ms: number
  SecondaryCostType: number
  SecondaryCostValue: number
  StatusGainSelf: XIVStatusData
  StatusGainSelfTarget: 'Status'
  StatusGainSelfTargetID: number
  TargetArea: number
  UnlockLink: number
  Url: string
  VFX: unknown
  VFXTarget: 'ActionCastVFX'
  VFXTargetID: number
  XAxisModifier: number
}
