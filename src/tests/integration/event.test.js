import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import App from "../../App"
import store from "../../store";
import EventsPage from "../../components/pages/EventsPage"

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("Events page mounts", done => {
  const wrapper = mount(
    <Provider store={store()}>
      <MemoryRouter initialEntries={["/events"]}>
        <App />
      </MemoryRouter>
    </Provider>
  )

  const eventsPage = wrapper.find(EventsPage);
  expect(eventsPage).toHaveLength(1);
  done();
});
