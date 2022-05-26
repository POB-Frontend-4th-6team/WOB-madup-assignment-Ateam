import {
  VictoryAxis,
  VictoryStack,
  VictoryBar,
  VictoryTheme,
  VictoryContainer,
  VictoryLegend,
  VictoryTooltip,
} from 'victory'

import { useTimeoutFn, useEffect, useState } from 'hooks'
import { IMediaInfo } from 'types/media'
import { getMediaChartData } from 'services/media'

import styles from './barChart.module.scss'
import CHART_STYLE from './chartStyle'
import ResponsiveVictoryChart from './ResponsiveVictoryChart'

const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수']

const BarChart = ({ mediaLabelList, TimeList }: IMediaInfo) => {
  const mediaColor = mediaLabelList.map((v) => v.color)
  const legendData = mediaLabelList.map((v) => {
    return { name: v.krName, symbol: { fill: v.color } }
  })

  const { mediaData } = getMediaChartData(TimeList)
  const [ready, setReady] = useState(false)
  const [run, clear] = useTimeoutFn(() => {
    setReady(true)
    clear()
  }, 0)

  useEffect(() => {
    run()
  }, [run])

  if (!ready) return <div />

  return (
    <article>
      <div className={styles.chartContainer}>
        <ResponsiveVictoryChart>
          <VictoryAxis
            tickValues={tickFormat}
            tickFormat={tickFormat}
            style={{ axis: CHART_STYLE.stroke, ...CHART_STYLE.tick }}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(y) => `${y}%`}
            style={{ grid: CHART_STYLE.stroke, axis: { stroke: 'white' }, ...CHART_STYLE.tick }}
          />
          <VictoryStack colorScale={mediaColor}>
            <VictoryBar data={mediaData.google} {...CHART_STYLE.bar} labelComponent={<VictoryTooltip />} />
            <VictoryBar data={mediaData.naver} {...CHART_STYLE.bar} labelComponent={<VictoryTooltip />} />
            <VictoryBar data={mediaData.facebook} {...CHART_STYLE.bar} labelComponent={<VictoryTooltip />} />
            <VictoryBar
              data={mediaData.kakao}
              {...CHART_STYLE.bar}
              labelComponent={<VictoryTooltip />}
              cornerRadius={{ top: 6 }}
            />
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
