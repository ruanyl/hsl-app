import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'
import BusIcon from 'material-ui/svg-icons/maps/directions-bus'
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less'
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'

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
      'Kamppi, tulo',
    ]
    this.styles = {
      wrapper: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 998,
        background: '#fff',
        boxShadow: '0px 0px 5px #999',
        paddingBottom: 10,
      },
      expandList: {
        maxHeight: 400,
        overflow: 'scroll',
      },
      list: {
        maxHeight: 200,
        overflow: 'scroll',
      },
      expandButton: {
        position: 'absolute',
        right: 20,
        top: -30,
        zIndex: 9999,
      },
    }

    this.state = {
      expand: false,
    }
  }

  expandList = () => {
    this.setState({ expand: !this.state.expand })
  }

  stopList() {
    return this.stops.map((stop, i) => <ListItem key={i} primaryText={stop} />)
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        <FloatingActionButton style={this.styles.expandButton} onClick={() => this.expandList()}>
          {this.state.expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </FloatingActionButton>
        <div style={this.state.expand ? this.styles.expandList : this.styles.list}>
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
      </div>
    )
  }
}
