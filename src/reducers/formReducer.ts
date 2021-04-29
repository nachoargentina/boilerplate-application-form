import { GET_FORM_FAILURE, GET_FORM_REQUEST, GET_FORM_SUCCESS } from '@/actions/form';

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_FORM_REQUEST: {
      return { ...state, formData: [], loading: true };
    }
    case GET_FORM_SUCCESS: {
      return { ...state, formData: action.form, loading: false };
    }
    case GET_FORM_FAILURE: {
      return { ...state, formData: [], loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};
export default formReducer;
