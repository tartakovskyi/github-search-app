import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {AppContext} from "./App";

const PrevRequestsItem = ({ term }) => {

  const { setTerm } = useContext(AppContext);

  const onClick = () => setTerm(term);

  return (
    <li onClick={onClick}>{term}</li>
  )
}

PrevRequestsItem.propTypes = {
  term: PropTypes.string.isRequired,
}

export default PrevRequestsItem;
