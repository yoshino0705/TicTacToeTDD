import {mount} from 'enzyme'

import {Board} from './Board'

describe('Board', () => {
  it('should render 9 grids', () => {
    const wrapper = mount(<Board />)
    const components = wrapper.find('[data-testid="game-grid"]')
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
