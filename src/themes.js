import { createMuiTheme } from '@material-ui/core/styles';

// for overriding custom themes
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#7FDBFF',
      contrastText: 'white',
    },
  },
});

// settings for particle effect
export const partOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      color: '#708090',
    },
    shape: {
      type: 'image',
      image: {
        src: 'https://i.imgur.com/rh6x9nZ.png',
      },
    },
    size: {
      value: 10,
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 50,
          duration: 0.4,
        },
      },
    },
  },
};

export default theme;
