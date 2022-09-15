import React, { Component } from 'react'
import './tourlist.scss'
import {tourData} from '../../tourData'
import Tour from '../tour/tour';

export default class Tourlist extends Component {
  state={
    tours:tourData
  };
  removeTour = id => {
    console.log(id);
    const{tours} = this.state
    const sortedTours = tours.filter (tour=> tour.id !==id)
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    //console.log(this.state.tours);
    const {tours} = this.state;
    return (
      <section className="tourlist">
        {
          tours.map(tour =>(<Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>))
        }

      </section>
    )
  }
}
