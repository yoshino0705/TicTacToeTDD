import {mount} from 'enzyme'
import {Board} from './Board'

describe('Board', () => {
  it('should render 9 grids', () => {
    const wrapper = mount(<Board />)
    const components = wrapper.find('[data-testid="game-grid"]')
    expect(components).toHaveLength(9)
  })

  it('should render 9 Xs', () => {
    const wrapper = mount(<Board />)
    const components = wrapper.find('[value="X"]')
    expect(components).toHaveLength(9)
  })

  it('should render 9 Os', () => {
    const wrapper = mount(<Board />)
    const components = wrapper.find('[value="O"]')
    expect(components).toHaveLength(9)
  })
})
