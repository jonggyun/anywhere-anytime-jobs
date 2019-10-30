import React from 'react';
import { useHistory } from 'react-router';

import JobCard from 'components/job/JobCard';

interface JobCardConatinerProps {
  companyId: string;
  company: string;
  location: string;
  anywhere?: {
    rule: string;
    permission: boolean;
  };
  anytime?: {
    rule: string;
    permission: boolean;
  };
}
const JobCardConatiner: React.FC<JobCardConatinerProps> = ({
  companyId,
  company,
  location,
  anywhere,
  anytime,
}) => {
  const { push } = useHistory();
  const handleOnClick = () => {
    push(`/job/${companyId}`);
  };
  return (
    <JobCard
      handleOnClick={handleOnClick}
      company={company}
      location={location}
      anywhere={anywhere}
      anytime={anytime}
    />
  );
};

export default JobCardConatiner;
