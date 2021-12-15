import {mount} from 'enzyme'

import {Board} from './Board'
import {GAME_RESULT} from '../../utils/constants'

describe('Board', () => {
  it('should render 9 grids', () => {
    const wrapper = mount(
      <Board
        steps={[]}
        setSteps={jest.fn()}
        currentResult={GAME_RESULT.ongoing}
      />
    )
    const components = wrapper.find('[data-testid="game-grid"]')
    expect(components).toHaveLength(9)
  })
})
