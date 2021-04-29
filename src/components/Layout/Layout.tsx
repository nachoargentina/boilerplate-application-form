import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box } from '@/ui';
import { NavigationContext } from '@/context/NavigationContext';
import { FormContext } from '@/context/FormContext';
import { FormContextValues, NavigationContextValues } from '@/context/types';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import useStyles from './styles';

const Layout = (): JSX.Element => {
  const handleSubmit = React.useCallback(() => alert('Submitted'), []);
  const { currentStep } = useContext<undefined | NavigationContextValues>(NavigationContext);
  const { formData, loading } = useContext<undefined | FormContextValues>(FormContext);
  const classes = useStyles();
  const { steps } = formData;

  return (
    <Box border={1} borderRadius={10} backgroundColor="white" style={{ minHeight: 560, width: 640, margin: '0 auto' }}>
      <div className={classes.innerBox}>
        {loading ? (
          <div className={classes.skeletonContainer}>
            <h1>
              <Skeleton />
            </h1>
            <Skeleton count={10} />
          </div>
        ) : (
          <>
            <div>
              <Header title={steps[currentStep].title} description={steps[currentStep].description} />
              <Content rows={steps[currentStep].questions} />
            </div>
            <Footer handleSubmit={handleSubmit} />
          </>
        )}
      </div>
    </Box>
  );
};

export default Layout;
