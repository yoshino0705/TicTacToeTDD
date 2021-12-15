import {ShallowWrapper, shallow} from 'enzyme'
import {Announcer} from './Announcer'

describe('Announcer', () => {
  it('should render text', () => {
    const wrapper: ShallowWrapper = shallow(<Announcer text="Test" />)
    expect(wrapper.text()).toBe('Test')
  })
})
