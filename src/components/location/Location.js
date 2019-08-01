import React, { Component } from 'react'
// Where the data is located
import preload from '../../data/data'
// Searches the data
import withSearch from './withSearch'
// Manages the data
import LocationCard from './LocationCard'
 
// Renders the presentation of the data
const Location = (props) => {
  const { searchTerm } = props
  
  return (
    <div>
      <div>
        <div>
          <h2>Preferred Locations</h2>
        </div>
      </div>
      <div>
        {preload.data
          // Filter locations by the inputted search term
          .filter(location => `${location.name} ${location.zone} ${location.region}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
          // Loop through the locations
          .map(location => <LocationCard key={location.id} {...location} />)}
      </div>
    </div>
  )
}
export default withSearch(Location)