import { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'hooks'
import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryTheme, VictoryContainer } from 'victory'

import styles from './media.module.scss'
import { getMediaChartData, getMediaTableData } from 'services/media'
import ContentsContainer from 'routes/_components/ContentsContainer'
import CHART_STYLE from './chartStyle'

function getSize() {
  let width

  if (window.innerWidth >= 1800) {
    width = 1600
  } else if (window.innerWidth < 1800 && window.innerWidth > 768) {
    width = 1200
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

const Media = () => {
  const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수']
  const tableHead = ['광고비', '매출', 'ROAS', '노출 수', '클릭 수', '클릭률 (CTR)', '클릭당 비용 (CPC)']
  const mediaNames = ['google', 'facebook', 'naver', 'kakao']

  const { mediaPerData } = getMediaChartData()
  const { mediaData, totalData } = getMediaTableData()

  return (
    <ContentsContainer>
      <div className={styles.container}>
        <div className={styles.chartContainer}>
          <ResponsiveVictoryChart>
            <VictoryAxis tickValues={tickFormat} tickFormat={tickFormat} />
            <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
            <VictoryStack
              colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}
              style={{
                data: { stroke: '#FFFFFF', strokeWidth: 1 },
              }}
            >
              <VictoryBar data={mediaPerData.google} {...CHART_STYLE.bar} />
              <VictoryBar data={mediaPerData.naver} {...CHART_STYLE.bar} />
              <VictoryBar data={mediaPerData.facebook} {...CHART_STYLE.bar} />
              <VictoryBar data={mediaPerData.kakao} {...CHART_STYLE.bar} />
            </VictoryStack>
          </ResponsiveVictoryChart>
          {/* </VictoryChart> */}
        </div>

        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <td> </td>
                {tableHead.map((title, idx) => {
                  const key = `hr-key-${idx}`
                  return <th key={key}>{title}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {mediaNames.map((name, nameIdx) => {
                const trKey = `tr-key-${nameIdx}`
                return (
                  <tr key={trKey}>
                    <th>{name}</th>
                    {mediaData[name].map((item, itemIdx) => {
                      const tdKey = `td-key-${itemIdx}`
                      return <td key={tdKey}>{Number(item.value.toFixed(2)).toLocaleString()}</td>
                    })}
                  </tr>
                )
              })}
              <tr className={styles.totalSum}>
                <th>총계</th>
                {totalData.map((item, itemIdx) => {
                  const tdKey = `td-key-${itemIdx}`
                  return <td key={tdKey}>{Number(item.value.toFixed(2)).toLocaleString()}</td>
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentsContainer>
  )
}

export default Media
