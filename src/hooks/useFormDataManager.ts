import { useReducer, useEffect, useRef } from 'react';
import formReducer from '@/reducers/formReducer';
import axios from 'axios';
import { GET_FORM_FAILURE, GET_FORM_REQUEST, GET_FORM_SUCCESS } from '@/actions/form';

const useFormDataManager = () => {
  const [{ formData, loading }, dispatch] = useReducer(formReducer, {
    formData: [],
    loading: true,
  });

  const signal = useRef(axios.CancelToken.source());

  useEffect(() => {
    const fetchData = async () => {
      dispatch(GET_FORM_REQUEST);
      try {
        const response = await axios.get('http://localhost:4000/formData');
        dispatch({ type: GET_FORM_SUCCESS, form: response.data });
      } catch (e) {
        dispatch({ type: GET_FORM_FAILURE, error: e });
      }
    };
    fetchData();
    // Cancel the API call is component is unmounted
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel();
    };
  }, []);

  const submitForm = async () => {
    try {
      dispatch('submitFormRequest');
      await axios.put('http://localhost:3000/formData');
    } catch (e) {
      console.log(e);
    }
  };

  const localProps = {
    submitForm,
    formData,
    loading,
  };

  return localProps;
};
export default useFormDataManager;
