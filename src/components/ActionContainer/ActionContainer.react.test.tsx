import {ReactWrapper, mount} from 'enzyme'
import {ActionContainer} from './ActionContainer'

describe('ActionContainer', () => {
  it('should render Reset button', () => {
    const wrapper: ReactWrapper = mount(<ActionContainer />)
    expect(wrapper.text()).toBe('Reset')
  })
})
