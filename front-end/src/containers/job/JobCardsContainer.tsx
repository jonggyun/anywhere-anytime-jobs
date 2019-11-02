import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JobsCards from 'components/job/JobCards';

import { getAllJobsRequest } from 'store/job/actions';
import { RootState } from 'store/index';

import JobCardsSkeleton from 'components/_skeleton/JobCards';

interface JobCardsContainerProps {}
const JobCardsContainer: React.FC<JobCardsContainerProps> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.job);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllJobsRequest());
    setIsLoading(false);
    return () => {};
  }, [dispatch]);
  return (
    <React.Fragment>
      {isLoading && <JobCardsSkeleton />}
      {!isLoading && <JobsCards jobs={list} />}
    </React.Fragment>
  );
};

export default JobCardsContainer;
