import {ShallowWrapper, shallow} from 'enzyme'
import {Reset} from './Reset'

describe('Reset', () => {
  it('should render Reset text', () => {
    const wrapper: ShallowWrapper = shallow(<Reset />)
    expect(wrapper.text()).toBe('Reset')
  })
})
