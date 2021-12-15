import {ReactWrapper, mount} from 'enzyme'
import {Game} from './Game'

describe('Game', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(<Game />)
  })

  it('should render game board', () => {
    const component = wrapper.find('[data-testid="game-board"]')
    expect(component).toHaveLength(1)
  })

  it('should render announcer', () => {
    const component = wrapper.find('[data-testid="announcer"]')
    expect(component).toHaveLength(1)
  })
})
