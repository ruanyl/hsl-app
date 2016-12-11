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
import DirectionsIcon from 'material-ui/svg-icons/maps/directions'
import SearchIcon from 'material-ui/svg-icons/action/search'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import ExploreIcon from 'material-ui/svg-icons/action/explore'
import HelpIcon from 'material-ui/svg-icons/action/help'
import FloatingActionButton from 'material-ui/FloatingActionButton'
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
      searchMode: null,
      buttonAction: 'bus',
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
        top: 70,
        right: 20,
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 0px 5px #666',
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

  updateActionButton = mode => {
    console.log(mode)
    this.setState({buttonAction: mode})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div style={{ position: 'relative', width: '100%', height: window.innerHeight }}>
          <div style={{ zIndex: 999, position: 'fixed', padding: 5, display: 'flex' }}>
            <SearchFieldContainer updateActionButton={this.updateActionButton} onSearch={this.updateSearchMode} />
          </div>
          {this.getDialog()}
          <MapContainer />
          <MediaQuery style={this.styles.settings} maxWidth={480}>
            <FloatingActionButton onClick={() => this.updateSearchMode(this.state.buttonAction)} mini={true}>
              {this.state.buttonAction === 'route' ? <DirectionsIcon color={grey400} /> : <SearchIcon color={grey400} />}
            </FloatingActionButton>
          </MediaQuery>
        </div>
      </MuiThemeProvider>
    )
  }
}
