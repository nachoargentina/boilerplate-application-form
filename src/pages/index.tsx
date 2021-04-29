import React from 'react';
import useStyles from './styles';
import { NavigationProvider } from '@/context/NavigationContext';
import { FormProvider } from '@/context/FormContext';
import Layout from '@/components/Layout/Layout';

export default function IndexPage(): JSX.Element {
  const classes = useStyles();
  return (
    <NavigationProvider>
      <FormProvider>
        <div className={classes.wrapper}>
          <Layout />
        </div>
      </FormProvider>
    </NavigationProvider>
  );
}
