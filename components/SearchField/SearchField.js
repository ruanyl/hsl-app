import React, { PureComponent } from 'react'
import MediaQuery from 'react-responsive'
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import BusIcon from 'material-ui/svg-icons/maps/directions-bus'
import LocationIcon from 'material-ui/svg-icons/maps/add-location'
import DirectionIcon from 'material-ui/svg-icons/maps/directions'
import BuildIcon from 'material-ui/svg-icons/action/build'
import AccountIcon from 'material-ui/svg-icons/action/account-circle'
import ExploreIcon from 'material-ui/svg-icons/action/explore'
import HelpIcon from 'material-ui/svg-icons/action/help'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import { grey400 } from 'material-ui/styles/colors'

export class SearchField extends PureComponent {
  constructor(props) {
    super(props)

    this.config = {
      bus: {
        hintText: 'Bus NO.',
        icon: <BusIcon color={grey400} />,
        dataSource: ['102', '102T', '110', '103', '103T', '158', '156', '154', '550'],
      },
      location: {
        hintText: 'Find a Location',
        icon: <LocationIcon color={grey400} />,
        dataSource: ['Otaniemi', 'iso omena', 'Kamppi', 'Vallila'],
      },
      route: {
        icon: <DirectionIcon color={grey400} />,
        dataSource: ['Otaniemi', 'iso omena', 'Kamppi', 'Vallila'],
      },
    }

    this.styles = {
      wrapper: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
      },
      searchButton: {
        marginLeft: 10,
      },
      selectMeans: {
        marginLeft: -37
      },
      searchs: {
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        minWidth: 368,
        flexWrap: 'nowrap'
      },
      toggles: {
        display: 'flex',
        transform: 'translate(8px, 14px)'
      },
      toggle: {
        marginLeft: 20
      },
      settings: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
      }
    }

    this.state = {
      dataSource: this.config.bus.dataSource,
      mode: 'bus'
    }
  }

  onMenuItemClick = mode => {
    this.setState({
      mode,
      dataSource: this.config[mode].dataSource
    })
  }

  doSearch = () => {
    this.props.onSearch(this.state.mode)
  }

  getSearchField() {
    if(this.state.mode == 'route') {
      return (
        <div>
          <AutoComplete
            maxSearchResults={5}
            style={{ width: 110 }}
            textFieldStyle={{ width: 110 }}
            hintText="From"
            dataSource={this.state.dataSource}
          />
          <AutoComplete
            maxSearchResults={5}
            style={{ width: 110, marginLeft: 25 }}
            textFieldStyle={{ width: 110 }}
            hintText="To"
            dataSource={this.state.dataSource}
          />
        </div>
      )
    }
    return (
      <div>
        <AutoComplete
          maxSearchResults={5}
          style={{ width: 256 }}
          textFieldStyle={{ width: 256 }}
          hintText={this.config[this.state.mode].hintText}
          dataSource={this.state.dataSource}
        />
      </div>
    )
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <MediaQuery style={{display: 'flex', width: '100%', flexWrap: 'wrap'}} minWidth={870}>
          <div style={this.styles.searchs}>
            {this.getSearchField()}
            <div style={this.styles.selectMeans}>
              <IconMenu
                iconButtonElement={<IconButton>{this.config[this.state.mode].icon}</IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem onClick={() => this.onMenuItemClick('bus')} primaryText="Search Bus" leftIcon={<BusIcon />} />
                <MenuItem onClick={() => this.onMenuItemClick('location')} primaryText="Find Location" leftIcon={<LocationIcon />} />
                <MenuItem onClick={() => this.onMenuItemClick('route')} primaryText="Search Route" leftIcon={<DirectionIcon />} />
              </IconMenu>
            </div>
            <div>
              <RaisedButton
                onTouchTap={this.doSearch}
                primary={true}
                icon={<SearchIcon />}
                style={this.styles.searchButton} />
            </div>
          </div>
          <div style={this.styles.toggles}>
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
          </div>
          <div style={this.styles.settings}>
            <IconMenu
              iconButtonElement={<IconButton><BuildIcon color={grey400} /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Explore" leftIcon={<ExploreIcon />} />
              <MenuItem primaryText="Help" leftIcon={<HelpIcon />} />
              <MenuItem primaryText="Account" leftIcon={<AccountIcon />} />
            </IconMenu>
          </div>
        </MediaQuery>
        <MediaQuery style={{display: 'flex', width: '100%', flexWrap: 'wrap'}} maxWidth={870} minWidth={480}>
          <div style={this.styles.searchs}>
            {this.getSearchField()}
            <div style={this.styles.selectMeans}>
              <IconMenu
                iconButtonElement={<IconButton>{this.config[this.state.mode].icon}</IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
                <MenuItem onClick={() => this.onMenuItemClick('bus')} primaryText="Search Bus" leftIcon={<BusIcon />} />
                <MenuItem onClick={() => this.onMenuItemClick('location')} primaryText="Find Location" leftIcon={<LocationIcon />} />
                <MenuItem onClick={() => this.onMenuItemClick('route')} primaryText="Search Route" leftIcon={<DirectionIcon />} />
              </IconMenu>
            </div>
            <div>
              <RaisedButton
                onTouchTap={this.doSearch}
                primary={true}
                icon={<SearchIcon />}
                style={this.styles.searchButton} />
            </div>
          </div>
          <div style={this.styles.settings}>
            <IconMenu
              iconButtonElement={<IconButton><BuildIcon color={grey400} /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem primaryText="Explore" leftIcon={<ExploreIcon />} />
              <MenuItem primaryText="Help" leftIcon={<HelpIcon />} />
              <MenuItem primaryText="Account" leftIcon={<AccountIcon />} />
            </IconMenu>
          </div>
        </MediaQuery>
        <MediaQuery style={this.styles.searchs} maxWidth={480}>
          {this.getSearchField()}
          <div style={this.styles.selectMeans}>
            <IconMenu
              iconButtonElement={<IconButton>{this.config[this.state.mode].icon}</IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
              <MenuItem onClick={() => this.onMenuItemClick('bus')} primaryText="Search Bus" leftIcon={<BusIcon />} />
              <MenuItem onClick={() => this.onMenuItemClick('location')} primaryText="Find Location" leftIcon={<LocationIcon />} />
              <MenuItem onClick={() => this.onMenuItemClick('route')} primaryText="Search Route" leftIcon={<DirectionIcon />} />
            </IconMenu>
          </div>
          <div>
            <RaisedButton
              onTouchTap={this.doSearch}
              primary={true}
              icon={<SearchIcon />}
              style={this.styles.searchButton} />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

