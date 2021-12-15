import {ReactWrapper, mount} from 'enzyme'
import {ActionContainer} from './ActionContainer'

describe('ActionContainer', () => {
  it('should render Reset button', () => {
    const wrapper: ReactWrapper = mount(
      <ActionContainer onReset={jest.fn()} onRewind={jest.fn()} />
    )
    expect(wrapper.find('[data-testid="reset-button"]')).toHaveLength(1)
  })

  it('should render Rewind button', () => {
    const wrapper: ReactWrapper = mount(
      <ActionContainer onReset={jest.fn()} onRewind={jest.fn()} />
    )
    expect(wrapper.find('[data-testid="rewind-button"]')).toHaveLength(1)
  })
})
