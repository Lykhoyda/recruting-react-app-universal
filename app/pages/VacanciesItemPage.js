import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchVacanciesDescription } from "../actions";
import isEmpty from "lodash/isEmpty";
import { Helmet } from "react-helmet";
// Styles
import styled from "styled-components";
import { withStyles } from "material-ui/styles";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import FavoriteIcon from "material-ui-icons/Favorite";

type PropTypes = {
  classes?: object,
  vacancy: {
    skills?: Array,
    title?: String,
    description?: String,
    image?: String
  }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const styles = theme => ({
  card: {
    maxWidth: 600,
    width: "100%"
  },
  media: {
    height: 250
  },
  title: {
    fontSize: 20,
    marginTop: 10
  },
  icon: {
    color: "#f50057"
  },
  cardAction: {
    justifyContent: "center"
  }
});

class VacanciesItem extends Component<PropTypes> {
  static defaultProps = {
    vacancy: {
      skills: [],
      title: "",
      description: "",
      image: ""
    },
    classes: {}
  };

  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.fetchVacanciesDescription(params.id);
  }

  head(title) {
    return (
      <Helmet>
        <title>{title}</title>
      </Helmet>
    );
  }

  renderList = skills => {
    return skills.map((item, index) => (
      <ListItem key={`skills-${index}`} dense>
        <ListItemIcon>
          <FavoriteIcon className={this.props.classes.icon} />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItem>
    ));
  };

  render() {
    const {
      vacancy: { skills, title, description, image },
      classes
    } = this.props;

    return (
      <Wrapper>
        {this.head(title)}
        <Card className={classes.card}>
          <CardHeader
            title={`Wanted ${title}!`}
            subheader={`Vacancy id: ${this.props.match.params.id}`}
          />
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <Typography>{description}</Typography>
            <Typography className={classes.title}>Skills Required:</Typography>
            <List>{!isEmpty(skills) && this.renderList(skills)}</List>
          </CardContent>
          <CardActions
            disableActionSpacing={false}
            className={classes.cardAction}
          >
            <Button raised color="secondary">
              Apply for a job
            </Button>
          </CardActions>
        </Card>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return { vacancy: state.vacancyDescription };
};

const loadData = store => {
  return store.dispatch(fetchVacanciesDescription());
};

export default {
  loadData,
  component: compose(
    connect(mapStateToProps, { fetchVacanciesDescription }),
    withStyles(styles)
  )(VacanciesItem)
};
