import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVacancies } from "../actions";
import { Helmet } from "react-helmet";
import isEmpty from "lodash/isEmpty";
import CardList from "../components/CardList";
import styled from "styled-components";

const Heading = styled.h3`
  text-align: center;
  color: #212121;
`;

type PropTypes = {
  vacancies?: Array<object>
};

class VacanciesList extends Component {
  static defaultProps = {
    vacancies: []
  };

  componentDidMount() {
    this.props.fetchVacancies();
  }

  head() {
    return (
      <Helmet>
        <title>Vacancies List</title>
        <meta property="og:title" content="Vacancies App" />
      </Helmet>
    );
  }

  render() {
    const { vacancies } = this.props;
    return (
      <div>
        <Heading>Look at our Vacancies!</Heading>
        {this.head()}
        {!isEmpty(vacancies) && <CardList items={vacancies} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { vacancies: state.vacancies };
};

const loadData = store => {
  return store.dispatch(fetchVacancies());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchVacancies })(VacanciesList)
};
