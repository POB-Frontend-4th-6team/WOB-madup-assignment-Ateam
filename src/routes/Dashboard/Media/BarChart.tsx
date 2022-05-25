import { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'hooks'
import {
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryBar,
  VictoryTheme,
  VictoryContainer,
  VictoryLegend,
} from 'victory'

import styles from './media.module.scss'
import CHART_STYLE from './chartStyle'
import { IMediaLabel } from 'types/media'
import { getMediaChartData } from 'services/media'

function getSize() {
  let width

  if (window.innerWidth >= 1800) {
    width = 1500
  } else if (window.innerWidth < 1800 && window.innerWidth > 768) {
    width = 1000
  } else {
    width = 700
  }

  return { width }
}

function useSize() {
  const [size, setSize] = useState(getSize())

  useEffect(() => {
    const onResize = () => setSize(getSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  })

  return size
}

interface IVictoryChart {
  children: ReactNode
}

const ResponsiveVictoryChart = ({ children }: IVictoryChart) => {
  const ref = useRef<HTMLDivElement>(null)
  const { width } = useSize()

  const props = {
    children,
    width,
  }

  return (
    <div ref={ref}>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 100, y: 0 }}
        {...props}
        containerComponent={<VictoryContainer responsive={false} />}
      />
    </div>
  )
}

interface IProps {
  mediaInfo: IMediaLabel[]
}

const BarChart = ({ mediaInfo }: IProps) => {
  const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수']

  const mediaColor = mediaInfo.map((v) => v.color)
  const legendData = mediaInfo.map((v) => {
    return { name: v.krName, symbol: { fill: v.color } }
  })

  const { mediaPerData } = getMediaChartData()

  return (
    <article>
      <div className={styles.chartContainer}>
        <ResponsiveVictoryChart>
          <VictoryAxis tickValues={tickFormat} tickFormat={tickFormat} {...CHART_STYLE.tick} />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} {...CHART_STYLE.tick} />
          <VictoryStack colorScale={mediaColor}>
            <VictoryBar data={mediaPerData.google} {...CHART_STYLE.bar} />
            <VictoryBar data={mediaPerData.naver} {...CHART_STYLE.bar} />
            <VictoryBar data={mediaPerData.facebook} {...CHART_STYLE.bar} />
            <VictoryBar data={mediaPerData.kakao} {...CHART_STYLE.bar} cornerRadius={{ top: 6 }} />
          </VictoryStack>
        </ResponsiveVictoryChart>
      </div>
      <div className={styles.legendContainer}>
        <VictoryLegend
          width={350}
          height={50}
          orientation='horizontal'
          theme={VictoryTheme.material}
          style={{
            labels: { fontSize: 14, fill: '#94A2AD' },
          }}
          gutter={50}
          data={legendData}
          containerComponent={<VictoryContainer responsive={false} />}
        />
      </div>
    </article>
  )
}

export default BarChart
