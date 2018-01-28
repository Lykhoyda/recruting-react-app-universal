/* @flow */
import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import styled from "styled-components";
import isEmpty from "lodash/isEmpty";

type PropTypes = {
  classes: Object,
  items: Array<Object>
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const styles = {
  card: {
    maxWidth: 500,
    marginBottom: 20
  },
  media: {
    height: 200
  },
  link: {
    textDecoration: "none"
  },
  cardActions: {
    justifyContent: "flex-end"
  }
};

const CardList = ({ classes, items }: PropTypes) => {
  return (
    <Wrapper>
      {!isEmpty(items) &&
        items.map((item, index) => (
          <Card className={classes.card} key={`cards-${index}`}>
            <CardMedia
              className={classes.media}
              image={item.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                {item.title}
              </Typography>
              <Typography component="p">{item.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Link to={`/vacancies/${item.id}`} className={classes.link}>
                <Button dense raised color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      })
    </Wrapper>
  );
};

CardList.defaultProps = {
  items: [],
  classes: {
    card: {},
    media: {}
  }
};

export default withStyles(styles)(CardList);
