import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import App from "../../App"
import store from "../../store";
import LoginSignUpForm from "../../components/forms/LoginSignUpForm"

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Login page mounts", done => {
  const wrapper = mount(
    <Provider store={store()}>
      <MemoryRouter initialEntries={["/admin/auth/login"]}>
        <App />
      </MemoryRouter>
    </Provider>
  )

  const loginSignUpForm = wrapper.find(LoginSignUpForm);
  expect(loginSignUpForm).toHaveLength(1);
  done();
});
