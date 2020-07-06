import { Component, h, Prop, ComponentInterface } from "@stencil/core";

@Component({
  tag: "opening-hours",
  styleUrl: "opening-hours.css",
  shadow: true,
})
export class OpeningHours implements ComponentInterface {
  private openingData = [
    {
      day: "Mon",
      time: "09:30 - 17:00",
    },
    {
      day: "Tue",
      time: "11:00 - 19:00",
    },
    {
      day: "Wed",
      time: "Closed",
    },
    {
      day: "Thu",
      time: "11:00 - 20:00",
    },
    {
      day: "Fri",
      time: "09:30 - 16:00",
    },
    {
      day: "Sat",
      time: "10:00 - 14:00",
    },
    {
      day: "Sun",
      time: "Closed",
    },
  ];

  @Prop() smallTitle: boolean = false;

  render() {
    return (
      <div>
        {this.openingData.map((data) => (
          <div class="row">
            <div class="day">{data.day}:</div>
            <div class="time">{data.time}</div>
          </div>
        ))}
      </div>
    );
  }
}
