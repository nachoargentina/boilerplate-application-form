import React, { useContext } from 'react';
import { Button } from '@/ui';
import { NavigationContext } from '@/context/NavigationContext';
import { FormContext } from '@/context/FormContext';
import { FooterProps } from './types';
import useStyles from './styles';

const Footer = React.memo(
  ({ handleSubmit }: FooterProps): JSX.Element => {
    const { currentStep, goToNextStep, goToPreviousStep } = useContext(NavigationContext);
    const { formData } = useContext(FormContext);
    const classes = useStyles();
    const { steps } = formData;
    const totalSteps = steps.length - 1;
    const isLastStep = currentStep === totalSteps;

    const showBackButton = currentStep >= 1;
    const primaryButtonLabel = isLastStep ? 'Finish' : 'Next';

    const appliedClasses = showBackButton ? `${classes.footerContainer} ${classes.showBack}` : classes.footerContainer;

    return (
      <div className={appliedClasses}>
        {!!showBackButton && (
          <Button type="button" size="secondary" onClick={goToPreviousStep}>
            Back
          </Button>
        )}
        <Button type="button" size="primary" onClick={isLastStep ? handleSubmit : goToNextStep}>
          {primaryButtonLabel}
        </Button>
      </div>
    );
  },
);

export default Footer;
