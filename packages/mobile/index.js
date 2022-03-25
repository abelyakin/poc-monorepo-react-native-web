import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

// // Intl polyfill
// import areIntlLocalesSupported from 'intl-locales-supported'
// if (window.Intl) {
//   if (!areIntlLocalesSupported(['en', 'br'])) {
//     var IntlPolyfill = require('intl')
//     window.Intl.NumberFormat = IntlPolyfill.NumberFormat
//     window.Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
//   }
// } else {
//   window.Intl = require('intl')
// }

const { App } = require('@traplinked/components/src/components/App')

AppRegistry.registerComponent('traplinked', () => App)
AppRegistry.registerComponent(appName, () => App)
