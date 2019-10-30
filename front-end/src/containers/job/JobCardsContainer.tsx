import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JobsCards from 'components/job/JobCards';

import { getAllJobsRequest } from 'store/job/actions';
import { RootState } from 'store/index';

interface JobCardsContainerProps {}
const JobCardsContainer: React.FC<JobCardsContainerProps> = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.job);

  useEffect(() => {
    dispatch(getAllJobsRequest());
    return () => {};
  }, [dispatch]);

  return <JobsCards jobs={list} />;
};

export default JobCardsContainer;
