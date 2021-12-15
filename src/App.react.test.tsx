import {ReactWrapper, mount} from 'enzyme'
import App from './App'

describe('App', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it('should render App', () => {
    const component = wrapper.find('[data-testid="app"]')
    expect(component).toHaveLength(1)
  })
})
