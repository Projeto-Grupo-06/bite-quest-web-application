/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

const CustomFaStar = styled(FaStar)`
  font-size: 24px; /* Defina o tamanho desejado para a estrela preenchida */
`;

const CustomFaRegStar = styled(FaRegStar)`
  font-size: 24px; /* Defina o tamanho desejado para a estrela vazia */
`;

const Star = ({ selected, onSelect, readOnly, value }) => {
  const handleSelect = () => {
    if (!readOnly) {
      initialValue = 5;

    } else {
      onSelect();
    }
  };

  return (
    <StarContainer onClick={handleSelect}>
      {selected && readOnly ? <CustomFaStar color="#ffc107" /> : <CustomFaRegStar color="#e4e5e9" />}
      <span style={{ display: 'none' }}>{value}</span>
    </StarContainer>
  );
};

const StarRating = ({ initialValue, onChange, readOnly = false }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (initialValue !== undefined) {
      setRating(initialValue);
    }
  }, [initialValue]);

  const handleRatingChange = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <Rating
      initialRating={rating}
      emptySymbol={<Star selected={false} readOnly={readOnly} value={0} />}
      fullSymbol={<Star selected={true} readOnly={readOnly} value={0} />}
      onChange={handleRatingChange}
    />
  );
};

export default StarRating;
