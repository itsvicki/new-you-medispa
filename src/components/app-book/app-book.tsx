import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-book',
  styleUrl: 'app-book.css',
  shadow: true
})
export class AppBook {

  render() {
    return (
      <div>
        <h2>Book an appointment</h2>

        <p>Sadly, we have had to temporarily close the clinic, the safety of our clients is paramount to us. We will update you via Facebook and email.</p>

        <p>Take care and keep safe.</p>
      </div>
    );
  }
}
