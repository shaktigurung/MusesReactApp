import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getChapters, selectChapter } from "./../../actions/chapterActions";
import { connect } from "react-redux";

export class ChapterSelector extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { chapters, onChange, selectedCity } = this.props;
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {selectedCity ? selectedCity.city : "Select the city"}
          </DropdownToggle>
          <DropdownMenu>
            {chapters.map(element => (
              <DropdownItem value={element._id} onClick={() => onChange(element)} key={element._id}>{element.city}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedChapter, chapters } = state;
  return {
    chapters: state.chapters,
    selectedCity: selectedChapter == null ? null : chapters.filter(chapter => chapter._id === selectedChapter)[0],
  }
}

export const ConnectedChapterSelector = connect(mapStateToProps, { getChapters, onChange: selectChapter })(ChapterSelector);