import {ReactWrapper, mount} from 'enzyme'
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

  it('should render 9 Xs if initial state is all Xs', () => {
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

  it('should render 9 Os if initial state is all Os', () => {
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

  it('should switch between Xs and Os when clicking the grids', () => {
    const wrapper = mount(<Board />)
    wrapper.find('[data-testid="game-grid"]').forEach((node) => {
      node.simulate('click')
    })
    expect(wrapper.find('[value="X"]')).toHaveLength(5)
    expect(wrapper.find('[value="O"]')).toHaveLength(4)
  })
})
