import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Holder from '../components/Holder';

import { getJsonRequest } from '../store/holder/actions';

const HolderConatiner: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJsonRequest());
  });

  return <Holder />;
};

export default HolderConatiner;
