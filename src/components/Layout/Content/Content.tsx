/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Field as UiField, Padding, Input, RadioButton } from '@/ui';
import { ContentProps } from './types';
import { QuestionsType } from '@/components/types';
import { getInitialValuesFromObj, getYupSchemaFromObj } from '@/helpers/helpers';

const Content = ({ rows }: ContentProps): JSX.Element => {
  const stepSchema = getYupSchemaFromObj(rows);
  const stepInitialValues = getInitialValuesFromObj(rows);

  const renderRow = (row: QuestionsType): JSX.Element => {
    const id = row.id.toString();

    switch (row.type) {
      case 'text':
        return (
          <div key={`${row.fieldName}-${row.id}`}>
            <Padding bottom={16}>
              <Field name={row.fieldName}>
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <UiField fieldId={id} label={row.label} error={meta.touched && meta.error}>
                    <Input
                      fieldId={id}
                      placeholder={row.placeholder}
                      type="text"
                      handleChangeSyntheticEvent
                      {...field}
                    />
                  </UiField>
                )}
              </Field>
            </Padding>
          </div>
        );
      case 'number':
        return (
          <div key={`${row.fieldName}-${row.id}`}>
            <Padding bottom={16}>
              <Field name={row.fieldName}>
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <UiField fieldId={id} label={row.label} error={meta.touched && meta.error}>
                    <Input
                      fieldId={id}
                      placeholder={row.placeholder}
                      type="number"
                      handleChangeSyntheticEvent
                      {...field}
                    />
                  </UiField>
                )}
              </Field>
            </Padding>
          </div>
        );
      case 'textarea':
        return (
          <div key={`${row.fieldName}-${row.id}`}>
            <Padding bottom={16}>
              <Field name={row.fieldName}>
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <UiField fieldId={id} label={row.label} error={meta.touched && meta.error}>
                    <Input
                      fieldId={id}
                      placeholder={row.placeholder}
                      type="textarea"
                      handleChangeSyntheticEvent
                      {...field}
                    />
                  </UiField>
                )}
              </Field>
            </Padding>
          </div>
        );
      case 'radio':
        return (
          <div key={`${row.fieldName}-${row.id}`}>
            <Padding bottom={16}>
              <UiField fieldId={id} label={row.label}>
                {row.options.map((option) => {
                  return (
                    <div key={option.optionId}>
                      <RadioButton label={option.label} value={option.optionId} name={row.fieldName} />
                    </div>
                  );
                })}
              </UiField>
            </Padding>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={stepInitialValues}
      validationSchema={stepSchema}
      onSubmit={(values) => {
        // same shape as initial values
        // eslint-disable-next-line no-console
        console.log(values);
      }}
    >
      {() => (
        <Form>
          {rows?.map((item: QuestionsType) => {
            return renderRow(item);
          })}
        </Form>
      )}
    </Formik>
  );
};

export default Content;
