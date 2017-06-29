import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'coin-names': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'search-coin-wrapper': {
    'position': 'relative'
  },
  'clear-query-btn': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }],
    'bottom': [{ 'unit': 'px', 'value': 2 }],
    'color': '#252830',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'list-of-coins-wrapper': {
    'position': 'relative',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd2da' }],
    'borderRadius': '10px',
    'overflow': 'hidden'
  },
  'list-of-coins': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // min-height: 150px;
    'maxHeight': [{ 'unit': 'vh', 'value': 25 }],
    'listStyle': 'none',
    'overflow': 'auto'
  },
  'list-of-coins-loader': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'list-of-coins__item': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'coin-name__ckeckbox': {
    'display': 'none'
  },
  'coin-name__label': {
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 10 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd2da' }],
    'borderRadius': '10px',
    'boxSizing': 'border-box',
    'fontWeight': 'bold'
  },
  'coin-name__ckeckbox + coin-name__label:hover': {
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#a7a7a7' }],
    'backgroundColor': '#a7a7a7',
    'cursor': 'pointer',
    'color': '#252830'
  },
  'coin-name__ckeckbox:checked + coin-name__label': {
    'backgroundColor': '#cfd2da',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd2da' }],
    'color': '#252830'
  },
  'selected-coin-names': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'list-of-selected-coins-name': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'coin-name': {
    'display': 'inline-block',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'fontWeight': 'bold'
  },
  'coins-main-info-wrapper': {
    'overflow': 'hidden'
  },
  'coins-main-info': {
    'overflow': 'auto',
    'fontWeight': 'bold',
    // padding-bottom: 20px;
    // margin-bottom: -20px;
  },
  'coins-tags-wrapper': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'coin-tags-list': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  }
});
