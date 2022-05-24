import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryTheme } from 'victory'

import styles from './media.module.scss'
import { getMediaFilter } from 'services/media'

const Media = () => {
  const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수']

  const mediaData = getMediaFilter()

  return (
    <div className={styles.container}>
      <VictoryChart theme={VictoryTheme.material} width={1000} domainPadding={{ x: 100, y: 0 }}>
        <VictoryAxis tickValues={tickFormat} tickFormat={tickFormat} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x / 1000_000}`} />
        <VictoryStack
          colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}
          style={{
            data: { stroke: '#FFFFFF', strokeWidth: 1 },
          }}
        >
          <VictoryBar data={mediaData.google} barWidth={30} x='category' y='value' />
          <VictoryBar data={mediaData.naver} barWidth={30} x='category' y='value' />
          <VictoryBar data={mediaData.facebook} barWidth={30} x='category' y='value' />
          <VictoryBar data={mediaData.kakao} barWidth={30} x='category' y='value' />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default Media
