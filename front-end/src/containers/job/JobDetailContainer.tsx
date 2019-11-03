import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getJobRequest } from 'store/job/actions';
import { RootState } from 'store/index';

import JobDetail from 'components/job/JobDetail';
import JobDetailSkeleton from 'components/_skeleton/JobDetail';

const JobDetailContainer = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const { item, news } = useSelector((state: RootState) => state.job.job);
  const { loading } = useSelector((state: RootState) => state.job);

  const onClickHomePage = (homepage: string) => {
    window.open(homepage, '_blank', 'noopener noreferrer');
  };

  useEffect(() => {
    if (companyId) dispatch(getJobRequest(companyId));
    return () => {};
  }, [dispatch, companyId]);

  return (
    <React.Fragment>
      {loading && <JobDetailSkeleton />}
      {!loading && (
        <JobDetail
          onClickHomePage={onClickHomePage}
          company={item.company}
          homepage={item.homepage}
          location={item.location}
          anywhere={item.anywhere}
          anytime={item.anytime}
          description={item.description}
          news={news}
        />
      )}
    </React.Fragment>
  );
};

export default JobDetailContainer;
