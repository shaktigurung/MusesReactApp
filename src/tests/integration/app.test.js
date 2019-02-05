import React from "react";
import { BrowserRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import App from "../../App"
import store from "../../store";



Enzyme.configure({ adapter: new EnzymeAdapter() });

test("App doesn't crash", () => {
  const wrapper = mount(
    <Provider store={store()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  wrapper.unmount();
});