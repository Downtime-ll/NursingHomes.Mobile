import Toast from 'react-native-root-toast';

let {
    durations,
    positions
} = Toast;

const defaultoptions = {
  position: positions.CENTER,
  duration: durations.SHORT
};

function show(message, options = defaultoptions) {
  Toast.show(message, options);
}

export default {
  show: show
};
