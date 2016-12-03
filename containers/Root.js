import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Toggle from 'material-ui/Toggle';
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import BuildIcon from 'material-ui/svg-icons/action/build'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import ExploreIcon from 'material-ui/svg-icons/action/explore'
import HelpIcon from 'material-ui/svg-icons/action/help'
import { grey400 } from 'material-ui/styles/colors'

import { MapContainer } from './MapRenderContainer'
import { SearchFieldContainer } from './SearchFieldContainer'
import { BusInfo } from '../components/Dialogs/BusInfo'
import { Routes } from '../components/Dialogs/Routes'
import '../styles/global.scss'

export class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchMode: null
    }
    this.styles = {
      toggles: {
        position: 'absolute',
        display: 'flex',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, .6)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 998
      },
      settings: {
        position: 'absolute',
        top: 100,
        right: 30,
        width: 48,
        height: 48,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 0px 5px #999',
        zIndex: 998
      }
    }
  }

  getDialog = () => {
    if(this.state.searchMode === 'bus') {
      return <BusInfo onClose={this.clearSearchMode} />
    }
    if(this.state.searchMode === 'route') {
      return <Routes onClose={this.clearSearchMode} />
    }
  }

  clearSearchMode = () => {
    this.setState({searchMode: null})
  }

  updateSearchMode = mode => {
    console.log(mode)
    this.setState({searchMode: mode})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={{ position: 'relative', width: '100%', height: window.innerHeight }}>
          <div style={{ padding: 20, zIndex: 999, boxShadow: '0px 1px 8px #999', position: 'relative' }}>
            <SearchFieldContainer onSearch={this.updateSearchMode} />
          </div>
          {this.getDialog()}
          <MapContainer />
          <MediaQuery style={this.styles.toggles} maxWidth={870}>
            <div style={this.styles.toggle}>
              <Toggle label="Bus" labelPosition="right" />
            </div>
            <div style={this.styles.toggle}>
              <Toggle label="Metro" labelPosition="right" />
            </div>
            <div style={this.styles.toggle}>
              <Toggle label="Tram" labelPosition="right" />
            </div>
            <div style={this.styles.toggle}>
              <Toggle label="Ferry" labelPosition="right" />
            </div>
          </MediaQuery>
          <MediaQuery style={this.styles.settings} maxWidth={480}>
            <IconMenu
              iconButtonElement={<IconButton><BuildIcon color={grey400} /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Explore" leftIcon={<ExploreIcon />} />
              <MenuItem primaryText="Help" leftIcon={<HelpIcon />} />
              <MenuItem primaryText="Account" leftIcon={<AccountIcon />} />
            </IconMenu>
          </MediaQuery>
        </div>
      </MuiThemeProvider>
    )
  }
}
