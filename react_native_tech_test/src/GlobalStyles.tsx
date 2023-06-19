import {StyleSheet} from 'react-native';
import {globalColours} from './GlobalColours';

export const globalStyles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  },
  screenView: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'yellow',
    backgroundColor: globalColours.LightGrey,
    marginHorizontal: 10,
  },
  screenTitleView: {
    borderWidth: 0,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 2,
  },
  screenTitleText: {
    fontSize: 32,
    color: 'black',
  },
  detailsView: {
    flex: 4,
    borderWidth: 0,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 2,
  },
  modalFlatlistContainer: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'grey',
    justifyContent: 'space-around',
  },
  modalCellOutline: {
    borderWidth: 0,
    borderColor: 'blue',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  modalScreen: {
    flex: 1,
    borderWidth: 0,
    borderColor: 'magenta',
    borderTop: 30,
    paddingTop: 20,
    backgroundColor: '#f2f2f2',
  },
  modalScreenText: {
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    fontWeight: 'regular',
    marginHorizontal: 20,
    textAlign: 'center',
    color: globalColours.DarkGrey,
  },
  modalTitleText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'regular',
    marginHorizontal: 20,
    textAlign: 'left',
    color: 'black',
  },
  modalDetailsText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'regular',
    marginHorizontal: 20,
    textAlign: 'left',
    color: 'black',
  },
  buttonView: {
    borderWidth: 0,
    borderColor: 'green',
    marginVertical: 10,
  },
  buttonUnselected: {
    borderWidth: 0,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 25,
    padding: 5,
  },
  buttonSelected: {
    borderWidth: 0,
    backgroundColor: globalColours.DarkGrey,
    borderColor: globalColours.DarkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 25,
    padding: 5,
  },
  buttonUnselectedText: {
    fontSize: 20,
    textAlign: 'center',
    color: globalColours.DarkGrey,
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonSelectedText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
  },
});
