import {ReactWrapper, mount} from 'enzyme'
import {Board} from './Board'

describe('Board', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(<Board />)
  })

  it('should render 9 grids', () => {
    const components = wrapper.find('[data-testid="game-grid"]')
    expect(components).toHaveLength(9)
  })
})
