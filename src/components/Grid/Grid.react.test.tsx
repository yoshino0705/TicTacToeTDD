import {ShallowWrapper, shallow} from 'enzyme'
import {Grid} from './Grid'

describe('Grid', () => {
  it('should render X if value is X', () => {
    const wrapper: ShallowWrapper = shallow(<Grid value="X" />)
    expect(wrapper.text()).toBe('X')
  })
})
