import {ReactWrapper, mount} from 'enzyme'
import {Game} from './Game'

describe('Game', () => {
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(<Game />)
  })

  it('should render game board', () => {
    const component = wrapper.find('[data-testid="game-board"]')
    expect(component).toHaveLength(1)
  })

  it('should render announcer', () => {
    const component = wrapper.find('[data-testid="announcer"]')
    expect(component).toHaveLength(1)
  })

  it('should switch between Xs and Os when clicking the grids', () => {
    const wrapper = mount(<Game />)
    wrapper.find('[data-testid="game-grid"]').forEach((node) => {
      node.simulate('click')
    })
    expect(wrapper.find('[value="X"]')).toHaveLength(5)
    expect(wrapper.find('[value="O"]')).toHaveLength(4)
  })

  it("should show X's turn", () => {
    const component = wrapper.find('[data-testid="announcer"]')
    expect(component.text()).toBe("Now It's X's Turn!")
  })

  it("should show O's turn", () => {
    const component = wrapper.find('[data-testid="announcer"]')
    wrapper.find('[data-testid="game-grid"]').at(0).simulate('click')
    expect(component.text()).toBe("Now It's O's Turn!")
  })

  it('should show X wins', () => {
    const component = wrapper.find('[data-testid="announcer"]')

    // X clicking on top left
    wrapper.find('[data-testid="game-grid"]').at(0).simulate('click')
    // O clicking on top middle
    wrapper.find('[data-testid="game-grid"]').at(1).simulate('click')
    // X clicking on middle left
    wrapper.find('[data-testid="game-grid"]').at(3).simulate('click')
    // O clicking on top right
    wrapper.find('[data-testid="game-grid"]').at(2).simulate('click')
    // X clicking on bottom left
    wrapper.find('[data-testid="game-grid"]').at(6).simulate('click')
    expect(component.text()).toBe('X Wins!')
  })

  it('should show O wins', () => {
    const component = wrapper.find('[data-testid="announcer"]')

    // X clicking on top left
    wrapper.find('[data-testid="game-grid"]').at(0).simulate('click')
    // O clicking on top middle
    wrapper.find('[data-testid="game-grid"]').at(1).simulate('click')
    // X clicking on middle left
    wrapper.find('[data-testid="game-grid"]').at(3).simulate('click')
    // O clicking on center
    wrapper.find('[data-testid="game-grid"]').at(4).simulate('click')
    // X clicking on bottom right
    wrapper.find('[data-testid="game-grid"]').at(8).simulate('click')
    // O clicking on center
    wrapper.find('[data-testid="game-grid"]').at(7).simulate('click')
    expect(component.text()).toBe('O Wins!')
  })
})
