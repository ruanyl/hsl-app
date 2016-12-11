import React, { PureComponent } from 'react'
import MediaQuery from 'react-responsive'
import AutoComplete from 'material-ui/AutoComplete'
import BusIcon from 'material-ui/svg-icons/maps/directions-bus'
import LocationIcon from 'material-ui/svg-icons/maps/add-location'
import DirectionIcon from 'material-ui/svg-icons/maps/directions'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import Toggle from 'material-ui/Toggle'
import Drawer from 'material-ui/Drawer'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
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
        zIndex: 9999,
      },
      searchButton: {
        marginLeft: 10,
      },
      selectMeans: {
        marginLeft: -37,
      },
      searchs: {
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        minWidth: 368,
        flexWrap: 'nowrap',
        backgroundColor: '#fff',
        borderRadius: 3,
        boxShadow: '0 1px 2px #999',
      },
      toggles: {
        display: 'flex',
        transform: 'translate(8px, 14px)',
      },
      toggle: {
        marginLeft: 20,
      },
      settings: {
        alignSelf: 'flex-end',
        marginLeft: 'auto',
      },
    }

    this.state = {
      open: false,
      dataSource: this.config.bus.dataSource,
      mode: 'bus',
    }
  }

  onMenuItemClick = mode => {
    this.setState({
      mode,
      dataSource: this.config[mode].dataSource,
    })
    this.props.updateActionButton(mode)
  }

  doSearch = () => {
    this.props.onSearch(this.state.mode)
  }

  getSearchField() {
    if (this.state.mode == 'route') {
      return (
        <div>
          <AutoComplete
            underlineShow={false}
            maxSearchResults={5}
            style={{ width: 140 }}
            textFieldStyle={{ width: 140 }}
            hintText="From"
            dataSource={this.state.dataSource}
          />
          <AutoComplete
            underlineShow={false}
            maxSearchResults={5}
            style={{ width: 140, marginLeft: 25 }}
            textFieldStyle={{ width: 140 }}
            hintText="To"
            dataSource={this.state.dataSource}
          />
        </div>
      )
    }
    return (
      <AutoComplete
        menuStyle={{ width: '100%' }}
        maxSearchResults={5}
        style={{ width: '100%' }}
        underlineShow={false}
        textFieldStyle={{ width: '100%' }}
        hintText={this.config[this.state.mode].hintText}
        dataSource={this.state.dataSource}
      />
    )
  }

  handleToggle = () => {
    console.log('aaaa')
    this.setState({ open: !this.state.open })
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div style={this.styles.wrapper}>
        <MediaQuery style={this.styles.searchs} maxWidth={480}>
          <div>
            <IconButton onTouchTap={this.handleToggle} tooltip="Show Menu">
              <MenuIcon color="#999" />
            </IconButton>
          </div>
          {this.getSearchField()}
          <div style={this.styles.selectMeans}>
            <IconMenu
              iconButtonElement={<IconButton>{this.config[this.state.mode].icon}</IconButton>}
              anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
              targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
              <MenuItem onClick={() => this.onMenuItemClick('bus')} primaryText="Search Bus" leftIcon={<BusIcon />} />
              <MenuItem onClick={() => this.onMenuItemClick('location')} primaryText="Find Location" leftIcon={<LocationIcon />} />
              <MenuItem onClick={() => this.onMenuItemClick('route')} primaryText="Search Route" leftIcon={<DirectionIcon />} />
            </IconMenu>
          </div>
        </MediaQuery>
        <Drawer
          style={{ zIndex: 9999 }}
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            <ListItem
              primaryText="Application Preferences"
              secondaryText="Make changes here"
            />
          </List>
          <Divider />
          <List>
            <Subheader>Modes of transport</Subheader>
            <ListItem primaryText="Bus" rightToggle={<Toggle />} />
            <ListItem primaryText="Metro" rightToggle={<Toggle />} />
            <ListItem primaryText="Tram" rightToggle={<Toggle />} />
            <ListItem primaryText="Ferry" rightToggle={<Toggle />} />
          </List>
          <Divider />
          <List>
            <Subheader>Settings</Subheader>
            <ListItem primaryText="Account" />
            <ListItem primaryText="Help" />
            <ListItem primaryText="Profile" />
          </List>
        </Drawer>
      </div>
    )
  }
}

