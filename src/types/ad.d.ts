export interface advertisementCardType {
  id: number | undefined
  adType: string
  title: string
  budget: number
  status: string
  startDate: string
  endDate: null | string
  report: {
    cost: number
    convValue: number
    roas: number
  }
}

interface responseDataType {
  count: number
  ads: adCardInfo[]
}
