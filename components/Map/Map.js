import React, { PureComponent } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export class MapRender extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      position: [60.192059, 24.945831],
    }
  }
  render() {
    return (
      <Map center={this.state.position} zoom={13} zoomControl={false}>
        <TileLayer
          url="http://api.digitransit.fi/map/v1/hsl-map/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={this.state.position}>
          <Popup>
            <span>Otaniemi.<br />Aalto Univesity Campus.</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}
