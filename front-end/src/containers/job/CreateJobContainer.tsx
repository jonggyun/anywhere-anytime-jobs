import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useInputs from 'lib/hooks/useInputs';
import useTextarea from 'lib/hooks/useTextarea';

import CreateStep1 from 'components/job/CreateStep1';
import CreateStep2 from 'components/job/CreateStep2';

import { addJobRequest } from 'store/job/actions';

interface CreateJobContainerProps {}
const CreateJobContainer: React.FC<CreateJobContainerProps> = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [company, onChangeCompany] = useInputs('');
  const [location, onChangeLocation] = useInputs('');
  const [homepage, onChangeHomepage] = useInputs('');
  const [logo, setLogo] = useState();
  const [previewLogo, setPreviewLogo] = useState();
  const [isWherePermission, setIsWherePermission] = useState(false);
  const [isTimePermission, setIsTimePermission] = useState(false);
  const [description, onChangeDescription] = useTextarea('');
  const [anywhereRule, onChangeAnywhereRule] = useTextarea('');
  const [anytimeRule, onChangeAnytimeRule] = useTextarea('');

  const onClickButton = () => {
    if (step === 1) setStep(2);
    if (step === 2) setStep(1);
  };

  const setLogoPreview = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewLogo(reader.result);
    };
  };

  const onChangeLogoImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files[0]) {
      setLogoPreview(files[0]);
      setLogo(files[0]);
    }
  };

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
      location,
      homepage,
      description,
      ...params,
    };
  };

  const onSubmitJob = () => {
    dispatch(
      addJobRequest({
        job: assembleParams(),
        logo,
      }),
    );
  };

  const onRemovePreviewImage = () => {
    setLogo(null);
    setPreviewLogo(null);
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
          previewLogo={previewLogo}
          onRemovePreviewImage={onRemovePreviewImage}
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
