import {mount} from 'enzyme'

import {Board} from './Board'

describe('Board', () => {
  it('should render 9 grids', () => {
    const wrapper = mount(<Board steps={[]} setSteps={jest.fn()} />)
    const components = wrapper.find('[data-testid="game-grid"]')
    expect(components).toHaveLength(9)
  })
})
