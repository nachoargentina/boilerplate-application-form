import { FormType } from '@/components/types';

export interface NavigationContextValues {
  currentStep: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

export interface FormContextValues {
  formData: FormType;
  loading: boolean;
}
