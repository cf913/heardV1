import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    display: 'flex',
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: 'blue',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  guess: {
    display: 'flex',
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: 'green',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  goto2: {
    color: 'green',
    fontSize: 30
  },
  goto: {
    color: 'blue',
    fontSize: 72
  },
  status: {
    fontWeight: '600'
  }
});

export default styles