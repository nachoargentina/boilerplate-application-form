import useFormDataManager from '@/hooks/useFormDataManager';
import React from 'react';
import { FormContextValues } from './types';

const FormContext = React.createContext<undefined | FormContextValues>(undefined);

const FormProvider = ({ children }): JSX.Element => {
  const formContextData = useFormDataManager();

  return <FormContext.Provider value={formContextData}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
