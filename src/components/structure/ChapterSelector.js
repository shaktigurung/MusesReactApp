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
    const { chapters, selectChapter } = this.props;
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Select your city
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Cities</DropdownItem>
            {chapters.map(element => <DropdownItem value={element._id}>{element.city}</DropdownItem>)}
          </DropdownMenu>
        </Dropdown>
        <select onChange={event => selectChapter(event.target.value)}>
          {chapters.map(element => <option value={element._id}>{element.city}</option>)}
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { getChaptersList, selectChapter })(ChapterSelector);