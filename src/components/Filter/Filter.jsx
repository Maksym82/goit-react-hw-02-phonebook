import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ value, onChangeFilter }) {
  return (
    <FilterCont>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </FilterCont>
  );
}


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}