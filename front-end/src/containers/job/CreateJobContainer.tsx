import React, { useState } from 'react';

import useInputs from 'lib/hooks/useInputs';
import useTextarea from 'lib/hooks/useTextarea';

import CreateStep1 from 'components/job/CreateStep1';
import CreateStep2 from 'components/job/CreateStep2';

interface CreateJobContainerProps {}
const CreateJobContainer: React.FC<CreateJobContainerProps> = () => {
  const [step, setStep] = useState(1);
  const [company, onChangeCompany] = useInputs('');
  const [location, onChangeLocation] = useInputs('');
  const [homepage, onChangeHomepage] = useInputs('');
  const [logo, setLogo] = useState();
  const [isWherePermission, setIsWherePermission] = useState(false);
  const [isTimePermission, setIsTimePermission] = useState(false);
  const [description, onChangeDescription] = useTextarea('');
  const [anywhereRule, onChangeAnywhereRule] = useTextarea('');
  const [anytimeRule, onChangeAnytimeRule] = useTextarea('');

  const onClickButton = () => {
    if (step === 1) setStep(2);
    if (step === 2) setStep(1);
  };

  const onChangeLogoImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) setLogo(files[0]);
  };

  const onChangeRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;

    if (name === 'iswhere') setIsWherePermission(!isWherePermission);
    if (name === 'istime') setIsTimePermission(!isTimePermission);
  };

  const onSubmitJob = () => {
    const params = {
      company,
      location,
      homepage,
      description,
      logo,
      anywhere: isWherePermission && {
        permission: isWherePermission,
        rule: anywhereRule,
      },
      anytime: isTimePermission && {
        permission: isTimePermission,
        rule: anytimeRule,
      },
    };

    console.log('params', params);
  };

  return (
    <React.Fragment>
      {step === 1 && (
        <CreateStep1
          onClickButton={onClickButton}
          company={company}
          onChangeCompany={onChangeCompany}
          location={location}
          onChangeLocation={onChangeLocation}
          homepage={homepage}
          onChangeHomepage={onChangeHomepage}
          onChangeLogoImage={onChangeLogoImage}
        />
      )}
      {step === 2 && (
        <CreateStep2
          onClickButton={onClickButton}
          isWherePermission={isWherePermission}
          isTimePermission={isTimePermission}
          onChangeRadioButton={onChangeRadioButton}
          description={description}
          onChangeDescription={onChangeDescription}
          anywhereRule={anywhereRule}
          onChangeAnywhereRule={onChangeAnywhereRule}
          anytimeRule={anytimeRule}
          onChangeAnytimeRule={onChangeAnytimeRule}
          onSubmitJob={onSubmitJob}
        />
      )}
    </React.Fragment>
  );
};

export default CreateJobContainer;
