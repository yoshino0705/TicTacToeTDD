import {ShallowWrapper, shallow} from 'enzyme'
import {Rewind} from '.'

describe('Rewind', () => {
  it('should render Rewind text', () => {
    const wrapper: ShallowWrapper = shallow(<Rewind />)
    expect(wrapper.text()).toBe('Rewind')
  })
})
