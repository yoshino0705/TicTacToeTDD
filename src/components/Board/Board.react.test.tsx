import {mount} from 'enzyme'
import React from 'react'

import {Board} from './Board'
import {Step} from '../../utils/types'
import {TOTAL_GRIDS} from '../../utils/constants'

describe('Board', () => {
  it('should render 9 grids', () => {
    const wrapper = mount(<Board />)
    const components = wrapper.find('[data-testid="game-grid"]')
    expect(components).toHaveLength(9)
  })

  it('should render 9 Xs', () => {
    const mockSteps: Step[] = []
    for (let i = 0; i < TOTAL_GRIDS; i++) {
      mockSteps.push({
        symbol: 'X',
        position: i,
      })
    }

    React.useState = jest.fn().mockReturnValue([mockSteps, {}])
    const wrapper = mount(<Board />)
    const components = wrapper.find('[value="X"]')
    expect(components).toHaveLength(9)
  })

  it('should render 9 Os', () => {
    const mockSteps: Step[] = []
    for (let i = 0; i < TOTAL_GRIDS; i++) {
      mockSteps.push({
        symbol: 'O',
        position: i,
      })
    }

    React.useState = jest.fn().mockReturnValue([mockSteps, {}])
    const wrapper = mount(<Board />)
    const components = wrapper.find('[value="O"]')
    expect(components).toHaveLength(9)
  })
})
