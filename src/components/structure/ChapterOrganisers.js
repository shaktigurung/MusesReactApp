import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, CardColumns, Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

class ChapterOrganisers extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <h1>Our Team</h1>
          <CardColumns>
            {this.props.organisers.map(organiser =>
              <Card body outline color="info">
                <CardImg top style={{ maxHeight: 150, maxWidth: 150 }} src={organiser.image} alt={organiser.name} />
                <CardBody>
                  <CardTitle className="muses-primary-text" style={{ fontWeight: "bold" }}>{organiser.name}</CardTitle>
                  <CardText><span dangerouslySetInnerHTML={{ __html: organiser.bio }}></span></CardText>
                </CardBody>
              </Card>
            )}
          </CardColumns>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedChapter, chapters } = state;
  return {
    organisers: selectedChapter == null ? [] : chapters.filter(chapter => chapter._id === selectedChapter)[0].organisers
  }
}


export default connect(mapStateToProps)(ChapterOrganisers);
