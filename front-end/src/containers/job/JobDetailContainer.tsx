import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { getJobRequest } from 'store/job/actions';
import JobDetail from 'components/job/JobDetail';

const JobDetailContainer = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (companyId) dispatch(getJobRequest(companyId));
    return () => {};
  }, [dispatch, companyId]);

  return <JobDetail />;
};

export default JobDetailContainer;
