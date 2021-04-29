import { useReducer } from 'react';
import navigationReducer from '@/reducers/navigationReducer';
import { NEXT_STEP, PREVIOUS_STEP } from '@/actions/navigation';

const useNavigationDataManager = () => {
  /* Reducer initial values */
  const [{ currentStep }, dispatch] = useReducer(navigationReducer, {
    currentStep: 0,
  });

  /* We expose the actions through functions so that they are more easily discoverable to the user */
  function goToNextStep(): void {
    dispatch({ type: NEXT_STEP });
  }
  function goToPreviousStep(): void {
    dispatch({ type: PREVIOUS_STEP });
  }

  return {
    currentStep,
    goToNextStep,
    goToPreviousStep,
  };
};
export default useNavigationDataManager;
