import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#252830',
    'color': '#cfd2da'
  },
  'default-input:focus': {
    'borderRadius': '10px',
    'backgroundColor': '#cfd2da',
    'color': '#252830',
    'fontWeight': 'bold'
  },
  'default-input': {
    'borderRadius': '10px',
    'backgroundColor': '#cfd2da',
    'color': '#252830',
    'fontWeight': 'bold'
  },
  'sortable': {
    'cursor': 'pointer'
  },
  'default-btn': {
    'display': 'inline-block',
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }],
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#5bc0de' }],
    'borderRadius': '10px',
    'color': '#5bc0de',
    'cursor': 'pointer'
  },
  'default-btn:hover': {
    'color': '#2aabd2',
    'borderColor': '#2aabd2'
  },
  'clear-button': {
    'display': 'inline-block',
    'position': 'relative',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'transparent',
    'outline': 'none',
    'color': '#cfd2da',
    'cursor': 'pointer'
  },
  'default-btn:focus': {
    'outline': 'none'
  },
  'clear-button:focus': {
    'outline': 'none'
  }
});
