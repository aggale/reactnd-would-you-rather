import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core/";

class UserStats extends Component {
  render() {
    const { avatarURL, name, answered, created } = this.props;

    // Styled components
    const Image = styled.img`
      object-fit: cover;
      width: 100px;
      height: 100px;
    `;

    return (
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <Image src={avatarURL} alt={name} />
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h1">
            {name}
          </Typography>
          <p>{`Answered questions: ${answered}`}</p>
          <p>{`Created questions: ${created}`}</p>
          <p>{`Score: ${answered + created}`}</p>
        </Grid>
      </Grid>
    );
  }
}

export default UserStats;
