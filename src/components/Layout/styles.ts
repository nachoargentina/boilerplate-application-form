import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  skeletonContainer: {
    fontSize: 20,
    lineHeight: 1.5,
  },
  innerBox: {
    boxSizing: 'border-box',
    padding: '40px 48px 0 48px',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 560,
    height: '100%',
  },
});

export default useStyles;
