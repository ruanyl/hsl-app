import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import ContentSend from 'material-ui/svg-icons/content/send'
import BusIcon from 'material-ui/svg-icons/maps/directions-bus'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton';
import ExpandLessIcon from 'material-ui/svg-icons/navigation/expand-less'
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';

export class Routes extends Component {
  constructor(props) {
    super(props)
    this.stops = [
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
        zIndex: 9998,
      },
    }
    this.state = {
      stepIndex: 0,
      expand: false,
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  }

  handlePrev = () => {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  expandList = () => {
    this.setState({ expand: !this.state.expand })
  }

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

  render() {
    const {stepIndex} = this.state;
    return (
      <div style={this.styles.wrapper}>
        <FloatingActionButton style={this.styles.expandButton} onClick={() => this.expandList()}>
          {this.state.expand ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </FloatingActionButton>
        <div style={this.state.expand ? this.styles.expandList : this.styles.list}>
          <Stepper
            activeStep={stepIndex}
            linear={false}
            orientation="vertical"
          >
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
                Walk To Kamppi
              </StepButton>
              <StepContent>
                <p>
                  Walk From: Your Current Location to Kamppi (229m)
                </p>
                {this.renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                Take Bus 103 To Alvar Aallon puisto
              </StepButton>
              <StepContent>
                <p>Take BUS(103) To Alvar Aallon puisto (8Km)</p>
                {this.renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
                Walk To Destination
              </StepButton>
              <StepContent>
                <p>
                  Walk From: Alvar Aallon puisto To Destination (1Km)
                </p>
                {this.renderStepActions(2)}
              </StepContent>
            </Step>
          </Stepper>
        </div>
      </div>
    )
  }
}
