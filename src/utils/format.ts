import { BigNumber } from 'bignumber.js'

interface IFormatConfigs {
  [key: string]: IFormatConfig
}
interface IFormatConfig {
  groupSize: number
  groupSeparator: string
  decimalSeparator: string
  suffix: string
  decimal: number
  skipNum?: number
  skipUnit?: string
  secondSkipNum?: number
  secondSkipUnit?: string
}

const defaultConfig = {
  groupSize: 3,
  groupSeparator: ',',
  decimalSeparator: '.',
}

const formatConfigs: IFormatConfigs = {
  roas: { ...defaultConfig, suffix: '%', decimal: 0 },
  cost: { ...defaultConfig, suffix: ' 원', decimal: 0 },
  imp: { ...defaultConfig, suffix: ' 회', decimal: 0 },
  click: { ...defaultConfig, suffix: ' 회', decimal: 1 },
  conv: { ...defaultConfig, suffix: ' 회', decimal: 0 },
  sales: { ...defaultConfig, suffix: ' 원', decimal: 1 },
}

const formatNumber = (bigNumber: BigNumber, key: string) => {
  let target = bigNumber
  const config = { ...formatConfigs[key] }

  if (bigNumber.isGreaterThan(100_000_000)) {
    target = bigNumber.div(100_000_000)
    config.suffix = `억${config.suffix}`
  } else if (bigNumber.isGreaterThan(10_000)) {
    target = bigNumber.div(10_000)
    config.suffix = `만${config.suffix}`
  } else {
    config.decimal = 0
  }

  return target.toFormat(config.decimal, config)
}

export default formatNumber
