import useNavigationDataManager from '@/hooks/useWizardDataManager';
import React from 'react';
import { NavigationContextValues } from './types';

const NavigationContext = React.createContext<undefined | NavigationContextValues>(undefined);

const NavigationProvider = ({ children }): JSX.Element => {
  // hooks are only used inside the Context as singletons to have all the app interacting with the same state
  const { currentStep, goToNextStep, goToPreviousStep } = useNavigationDataManager();
  const navigationContextData = {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  };

  return <NavigationContext.Provider value={navigationContextData}>{children}</NavigationContext.Provider>;
};

export { NavigationContext, NavigationProvider };
