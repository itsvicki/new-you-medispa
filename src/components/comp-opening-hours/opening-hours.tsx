import { Component, h, Prop, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'opening-hours',
  styleUrl: 'opening-hours.css',
  shadow: true
})
export class OpeningHours implements ComponentInterface {
  // private openingData = [
  //   {
  //     day: 'Mon', 
  //     time: '09:30 - 17:00'
  //   },
  //   {
  //     day: 'Tue',
  //     time: '11:00 - 19:00'
  //   },
  //   {
  //     day: 'Wed',
  //     time: 'Closed'
  //   },
  //   {
  //     day: 'Thu',
  //     time: '11:00 - 20:00'
  //   },
  //   {
  //     day: 'Fri',
  //     time: '09:30 - 16:00'
  //   },
  //   {
  //     day: 'Sat',
  //     time: '10:00 - 14:00'
  //   },
  //   {
  //     day: 'Sun',
  //     time: 'Closed'
  // }];

  @Prop() smallTitle: boolean = false;

  render() {
    return (
      <div>        
        <h3 class={this.smallTitle ? 'small' : ''}>Opening Times</h3>

        <p>Sadly, we have had to temporarily close the clinic due to covid-19, the safety of our clients is paramount to us. We will update you via <a href="https://www.facebook.com/pages/New-You-Medispa/464518073640015" target="_blank" rel="noopener">Facebook</a> and email.</p>
        <p>Take care and keep safe.</p>

        {/* {this.openingData.map((data) =>
        <div class="row">
          <div class="day">{data.day}:</div>
          <div class="time">{data.time}</div>
        </div>
        )} */}

      </div>
    );
  }
}
