import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { MapContainer } from './MapRenderContainer'
import { SearchFieldContainer } from './SearchFieldContainer'
import '../styles/global.scss'

injectTapEventPlugin()

export const Root = () =>
  <div style={{ position: 'relative', width: '100%', height: window.innerHeight }}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div style={{ padding: 20, zIndex: 999, boxShadow: '0px 1px 8px #999', position: 'relative' }}>
        <SearchFieldContainer />
      </div>
    </MuiThemeProvider>
    <MapContainer />
  </div>
