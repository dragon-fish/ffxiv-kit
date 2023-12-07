export interface XIVAnimationTimeline {
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

export interface XIVAnimationStart {
  ID: number
  Name: XIVAnimationTimeline
  NameTarget: 'ActionTimeline'
  NameTargetID: number
  VFX: unknown
  VFXTarget: 'VFX'
  VFXTargetID: number
}
