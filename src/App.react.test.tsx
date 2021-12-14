import { ReactWrapper, mount } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render game board", () => {
    const component = wrapper.find('[data-testid="game-board"]');
    expect(component).toHaveLength(1);
  });
});
