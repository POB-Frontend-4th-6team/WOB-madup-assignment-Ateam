export interface dataType {
  x: number | string
  y: number
}

export interface selectedType {
  key: number
  value: string
}

export interface IDailyItem {
  imp: number
  click: number
  cost: number
  conv: number
  convValue: number
  ctr: number
  cvr: number
  cpc: number
  cpa: number
  roas: number
  date: `${number}-${number}-${number}`
}

export interface ITrendData {
  report: { daily: IDailyItem[] }
}
