import {ShallowWrapper, shallow} from 'enzyme'
import {Rewind} from './Rewind'

describe('Rewind', () => {
  it('should render Rewind text', () => {
    const wrapper: ShallowWrapper = shallow(<Rewind value="X" />)
    expect(wrapper.text()).toBe('Rewind')
  })
})
