import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'
import BusIcon from 'material-ui/svg-icons/maps/directions-bus'
import RaisedButton from 'material-ui/RaisedButton'

export class BusInfo extends Component {
  constructor(props) {
    super(props)
    this.stops = [
      'Jämeräntaival',
      'Alvar Aallon puisto',
      'Dipoli',
      'Miestenmetsä',
      'Keilaniemi',
      'Itämetsä',
      'Karhusaari',
      'Hanasaari',
      'Länsiväylä',
      'Lapinrinne',
      'Kamppi, tulo'
    ]
    this.styles = {
      wrapper: {
        position: 'absolute',
        left: 45,
        top: 120,
        width: 250,
        height: 350,
        zIndex: 999,
        background: '#fff',
        boxShadow: '0px 0px 5px #999'
      },
      list: {
        height: 300,
        overflow: 'scroll'
      }
    }
  }

  stopList() {
    return this.stops.map((stop, i) => <ListItem key={i} primaryText={stop} />)
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <div style={this.styles.list}>
          <List>
            <Subheader>Bus Information</Subheader>
            <ListItem
              primaryText="Bus 102"
              leftIcon={<BusIcon />}
              primaryTogglesNestedList={true}
              initiallyOpen={false}
              nestedItems={this.stopList()}
            />
            <ListItem
              primaryText="Bus 102T"
              leftIcon={<BusIcon />}
              primaryTogglesNestedList={true}
              initiallyOpen={false}
              nestedItems={this.stopList()}
            />
          </List>
        </div>
        <RaisedButton onTouchTap={this.props.onClose} style={{position: 'absolute', bottom: 1}} label="Close" fullWidth={true} />
      </div>
    )
  }
}
