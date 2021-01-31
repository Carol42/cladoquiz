import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

function Logo() {
  return (
    <img src="https://fontmeme.com/permalink/210127/4fb223cb38fa5db854dbf90f9843dc2d.png" alt="logo cladoquiz" width="300" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;