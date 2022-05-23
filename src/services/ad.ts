export interface adCardInfo {
  id?: number
  adType?: string
  title?: string
  budget?: number
  status?: string
  startDate?: string
  endDate?: null | string
  report?: {
    cost?: number
    convValue?: number
    roas?: number
  }
}
