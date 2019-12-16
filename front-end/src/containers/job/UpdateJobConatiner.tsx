import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useInputs from 'lib/hooks/useInputs';
import useTextarea from 'lib/hooks/useTextarea';

import { RootState } from 'store/index';

import UpdateJob from 'components/job/UpdateJob';

import { updateJobRequest } from 'store/job/actions';

interface UpdateJobContainerProps {}
const UpdateJobContainer: React.FC<UpdateJobContainerProps> = () => {
  const dispatch = useDispatch();
  const { item } = useSelector((state: RootState) => state.job.job);
  const [company, onChangeCompany] = useInputs(item.company);
  const [location, onChangeLocation] = useInputs(item.location);
  const [homepage, onChangeHomepage] = useInputs(item.homepage);
  const [description, onChangeDescription] = useTextarea(item.description);

  const [isWherePermission, setIsWherePermission] = useState(
    item.anywhere ? item.anywhere.permission : false,
  );
  const [isTimePermission, setIsTimePermission] = useState(
    item.anytime ? item.anytime.permission : false,
  );
  const [anywhereRule, onChangeAnywhereRule] = useTextarea(
    item.anywhere ? item.anywhere.rule : '',
  );
  const [anytimeRule, onChangeAnytimeRule] = useTextarea(
    item.anytime ? item.anytime.rule : '',
  );

  const onChangeRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;

    if (name === 'iswhere') setIsWherePermission(!isWherePermission);
    if (name === 'istime') setIsTimePermission(!isTimePermission);
  };

  const assembleParams = () => {
    let params = {};

    if (isWherePermission) {
      params = {
        ...params,
        anywhere: {
          permission: isWherePermission,
          rule: anywhereRule,
        },
      };
    }

    if (isTimePermission) {
      params = {
        ...params,
        anytime: {
          permission: isTimePermission,
          rule: anytimeRule,
        },
      };
    }

    return {
      company,
      companyId: item.companyId,
      location,
      homepage,
      description,
      ...params,
    };
  };

  const onSubmitJob = () => {
    dispatch(updateJobRequest(assembleParams()));
  };

  return (
    <UpdateJob
      company={company}
      onChangeCompany={onChangeCompany}
      location={location}
      onChangeLocation={onChangeLocation}
      homepage={homepage}
      onChangeHomepage={onChangeHomepage}
      description={description}
      onChangeDescription={onChangeDescription}
      isWherePermission={isWherePermission}
      isTimePermission={isTimePermission}
      anywhereRule={anywhereRule}
      anytimeRule={anytimeRule}
      onChangeRadioButton={onChangeRadioButton}
      onChangeAnywhereRule={onChangeAnywhereRule}
      onChangeAnytimeRule={onChangeAnytimeRule}
      onSubmitJob={onSubmitJob}
    />
  );
};

export default UpdateJobContainer;
