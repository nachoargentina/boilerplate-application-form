import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footerContainer: {
    width: '100%',
    display: 'flex',
    padding: '15px 0px',
    justifyContent: 'flex-end',
    position: 'relative',
    // TODO this is a bit hacky. We should implement a Separator component to take care of drawing the line
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: -49,
      width: '642px',
      borderTop: '1px solid #dbdbdb',
    },
  },
  showBack: {
    justifyContent: 'space-between',
  },
});

export default useStyles;
