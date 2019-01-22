import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getChaptersList, selectChapter } from "./../../actions/chapterActions";
import { connect } from "react-redux";

class ChapterSelector extends Component {

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

  componentDidMount() {
    this.props.getChaptersList();
  }

  render() {
    const { chapters, selectChapter, selectedCity } = this.props;
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {selectedCity ? selectedCity.city : "Select your city"}
          </DropdownToggle>
          <DropdownMenu>
            {chapters.map(element => (
              <DropdownItem value={element._id} onClick={() => selectChapter(element._id)}>{element.city}</DropdownItem>
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

export default connect(mapStateToProps, { getChaptersList, selectChapter })(ChapterSelector);