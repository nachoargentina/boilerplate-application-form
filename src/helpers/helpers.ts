import { QuestionsType } from '@/components/types';
import * as Yup from 'yup';

export const getYupSchemaFromObj = (stepQuestions: Array<QuestionsType>): {} => {
  const schema = {};
  stepQuestions.forEach((question) => {
    if (question.required) {
      schema[question.fieldName] = Yup.string().required('Required');
    }
  });
  const finalSchema = Yup.object().shape({
    ...schema,
  });
  return finalSchema;
};

export const getInitialValuesFromObj = (stepQuestions: Array<QuestionsType>): {} => {
  const initialValues = {};
  stepQuestions.forEach((question) => {
    initialValues[question.fieldName] = question.defaultValue;
  });
  return initialValues;
};
