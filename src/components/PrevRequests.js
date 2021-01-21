import React from 'react';
import PropTypes from 'prop-types';
import PrevRequestsItem from './PrevRequestsItem';


const PrevRequests = ({ terms }) => {

  return (
    <div className="prevRequests">
      <ul>
        {terms.map((term,index) => (
          <PrevRequestsItem key={index} term={term} />
        )
        )}
      </ul>
    </div>
  )
}

PrevRequests.propTypes = {
  terms: PropTypes.array,
}

export default PrevRequests;
