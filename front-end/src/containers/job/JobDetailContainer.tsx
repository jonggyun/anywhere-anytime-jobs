import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getJobRequest } from 'store/job/actions';
import { RootState } from 'store/index';

import JobDetail from 'components/job/JobDetail';

const JobDetailContainer = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const { job } = useSelector((state: RootState) => state.job);

  useEffect(() => {
    if (companyId) dispatch(getJobRequest(companyId));
    return () => {};
  }, [dispatch, companyId]);

  return (
    <JobDetail
      company={job.company}
      homepage={job.homepage}
      location={job.location}
      anywhere={job.anywhere}
      anytime={job.anytime}
      description={job.description}
    />
  );
};

export default JobDetailContainer;
