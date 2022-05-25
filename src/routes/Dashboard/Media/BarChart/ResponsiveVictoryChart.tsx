import { ReactNode, useRef } from 'react'

import { useEffect, useState } from 'hooks'
import { VictoryChart, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory'
import { round } from 'lodash'

const getSize = () => {
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

const useSize = () => {
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
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) => {
              return `${round(datum.value, 2)}`
            }}
            responsive={false}
            labelComponent={
              <VictoryTooltip
                style={{ fill: 'white', fontSize: 14 }}
                flyoutStyle={{ fill: '#3a474e' }}
                flyoutHeight={40}
                flyoutPadding={20}
              />
            }
          />
        }
      />
    </div>
  )
}

export default ResponsiveVictoryChart
