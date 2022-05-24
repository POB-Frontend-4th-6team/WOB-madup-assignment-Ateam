// 계산 관련 커스텀 함수
export const getSales = (roas: number, cost: number) => {
  return (roas * cost) / 100
}

export const getConv = (cvr: number, click: number) => {
  return (cvr * click) / 100
}
