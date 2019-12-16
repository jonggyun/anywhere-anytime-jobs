import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getJobRequest } from 'store/job/actions';
import { RootState } from 'store/index';

import JobDetail from 'components/job/JobDetail';
import JobDetailSkeleton from 'components/_skeleton/JobDetail';

import UpdateJobContainer from 'containers/job/UpdateJobConatiner';

const JobDetailContainer = () => {
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const { item, news } = useSelector((state: RootState) => state.job.job);
  const { loading } = useSelector((state: RootState) => state.job);
  const [pageType, setPageType] = useState('detail');

  const onClickHomePage = (homepage: string) => {
    window.open(homepage, '_blank', 'noopener noreferrer');
  };

  const onClickEditButton = () => {
    setPageType('edit');
  };

  useEffect(() => {
    if (companyId) dispatch(getJobRequest(companyId));
    return () => {};
  }, [dispatch, companyId]);

  return (
    <React.Fragment>
      {loading && <JobDetailSkeleton />}
      {!loading && pageType === 'detail' && (
        <JobDetail
          onClickHomePage={onClickHomePage}
          companyId={item.companyId}
          company={item.company}
          homepage={item.homepage}
          location={item.location}
          anywhere={item.anywhere}
          anytime={item.anytime}
          logo={item.logo}
          description={item.description}
          news={news}
          onClickEditButton={onClickEditButton}
        />
      )}
      {!loading && pageType === 'edit' && <UpdateJobContainer />}
    </React.Fragment>
  );
};

export default JobDetailContainer;
