import {mount} from 'enzyme'
import React from 'react'

import {Board} from './Board'
import {Step, RowRange, ColumnRange} from '../../utils/types'
import {SIZE} from '../../utils/constants'

describe('Board', () => {
  it('should render 9 grids', () => {
    const wrapper = mount(<Board />)
    const components = wrapper.find('[data-testid="game-grid"]')
    expect(components).toHaveLength(9)
  })

  it('should render 9 Xs', () => {
    const mockSteps: Step[] = []
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        mockSteps.push({
          symbol: 'X',
          row: i as RowRange,
          column: j as ColumnRange,
        })
      }
    }

    React.useState = jest.fn().mockReturnValue([mockSteps, {}])
    const wrapper = mount(<Board />)
    const components = wrapper.find('[value="X"]')
    expect(components).toHaveLength(9)
  })

  it('should render 9 Os', () => {
    const mockSteps: Step[] = []
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        mockSteps.push({
          symbol: 'O',
          row: i as RowRange,
          column: j as ColumnRange,
        })
      }
    }

    React.useState = jest.fn().mockReturnValue([mockSteps, {}])
    const wrapper = mount(<Board />)
    const components = wrapper.find('[value="O"]')
    expect(components).toHaveLength(9)
  })
})
