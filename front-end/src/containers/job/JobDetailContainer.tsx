import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getJobRequest } from 'store/job/actions';
import { RootState } from 'store/index';

import JobDetail from 'components/job/JobDetail';

const JobDetailContainer = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const { item, news } = useSelector((state: RootState) => state.job.job);

  useEffect(() => {
    if (companyId) dispatch(getJobRequest(companyId));
    return () => {};
  }, [dispatch, companyId]);

  return (
    <JobDetail
      company={item.company}
      homepage={item.homepage}
      location={item.location}
      anywhere={item.anywhere}
      anytime={item.anytime}
      description={item.description}
      news={news}
    />
  );
};

export default JobDetailContainer;
