import { NEXT_STEP, PREVIOUS_STEP } from '@/actions/navigation';

const navigationReducer = (state: any, action: any) => {
  switch (action.type) {
    case NEXT_STEP: {
      return { ...state, currentStep: state.currentStep += 1 };
    }
    case PREVIOUS_STEP: {
      return { ...state, currentStep: state.currentStep -= 1 };
    }
    default: {
      return state;
    }
  }
};
export default navigationReducer;
