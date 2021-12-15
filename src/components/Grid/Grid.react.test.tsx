import {ShallowWrapper, shallow} from 'enzyme'
import {Grid} from './Grid'

describe('Grid', () => {
  it('should render X if value is X', () => {
    const wrapper: ShallowWrapper = shallow(<Grid value="X" />)
    expect(wrapper.text()).toBe('X')
  })

  it('should render O if value is O', () => {
    const wrapper: ShallowWrapper = shallow(<Grid value="O" />)
    expect(wrapper.text()).toBe('O')
  })

  it('should render blank if value is not X or O', () => {
    const wrapper: ShallowWrapper = shallow(<Grid value="Y" />)
    expect(wrapper.text()).toBe('')
  })

  it('should be clickable', () => {
    const onClick = jest.fn()
    const wrapper: ShallowWrapper = shallow(<Grid onClick={onClick} />)
    wrapper.simulate('click')
    expect(onClick).toBeCalledTimes(1)
  })

  it('should not be clickable if it has a value', () => {
    const onClick = jest.fn()
    const wrapper: ShallowWrapper = shallow(
      <Grid value="X" onClick={onClick} />
    )
    wrapper.simulate('click')
    expect(onClick).toBeCalledTimes(0)
  })
})
