import React, { PureComponent } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import SearchIcon from 'material-ui/svg-icons/action/search'
import BusIcon from 'material-ui/svg-icons/maps/directions-bus'
import LocationIcon from 'material-ui/svg-icons/maps/add-location'
import DirectionIcon from 'material-ui/svg-icons/maps/directions'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import { grey400 } from 'material-ui/styles/colors'

export class SearchField extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      dataSource: [],
    }

    this.styles = {
      wrapper: {
        position: 'relative'
      },
      searchButton: {
        marginLeft: 10
      },
      selectMeans: {
        marginLeft: -37,
        transform: 'translate(0px, 6px)'
      }
    }
  }

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    })
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <AutoComplete
          style={{ width: 256 }}
          textFieldStyle={{ width: 256 }}
          hintText="Bus NO."
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <IconMenu
          style={this.styles.selectMeans}
          iconButtonElement={<IconButton><BusIcon color={grey400} /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem primaryText="Search Bus" leftIcon={<BusIcon />} />
          <MenuItem primaryText="Find Location" leftIcon={<LocationIcon />} />
          <MenuItem primaryText="Search Route" leftIcon={<DirectionIcon />} />
        </IconMenu>
        <RaisedButton
          primary={true}
          icon={<SearchIcon />}
          style={this.styles.searchButton} />
      </div>
    )
  }
}

