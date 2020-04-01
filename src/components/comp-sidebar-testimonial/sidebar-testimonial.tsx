import {Component, h, State, Listen, Event, EventEmitter, ComponentInterface, Build} from '@stencil/core';

import {TestimonialInterface} from '../../global/definitions/definitions';

@Component({
  tag: 'nyms-sidebar-testimonial',
  styleUrl: 'sidebar-testimonial.css',
  shadow: true
})
export class SidebarTestimonial implements ComponentInterface {
  private testimonials: TestimonialInterface[] = [
    {
      quote: "I'm not really one for treatments usually but I had some milia that needed removing. I got an almost immediate appointment, the very next morning, at the time of my choice. The place was immaculate, very welcoming and smelled lovely. The staff were great.. ",
      cite: "Carol M."
    },
    {
      quote: "My first time at Medi Spa and cannot fault the experience. Friendly welcome from Dianne. Both the waiting area and the treatment room was clean and comfortable. My treatment was great, and I will definitely be back. Great honest skin care advice from Theresa. ",
      cite: "Liz N"
    },
    {
      quote: "I've been going for nearly a year now and have recommended these to all my friends. The treatments are amazing and prices even better - Staff are amazing and very professional wish I had discovered these earlier x very happy with my results ",
      cite: "Julie F"
    },
    {
      quote: "Teresa is so gentle I was really nervous and she put me at ease straight away. ",
      cite: "Emma S."
    },
    {
      quote: "Always a lovely experience ..Theresa and Diane make a great team..Theresa is so fantastic at what she does...Diane is so welcoming and helpful..I have and would recommend them to anyone interested in having ant treatments done.I think they're the best. ",
      cite: "Eileen B."
    },
    {
      quote: "Lovely clinic and very friendly! Excellent advice given from Teresa, I've been visiting for a while now and they really try to get to know you and understand your personality, so they can recommend the corrrct treatments.. ",
      cite: "Christine T."
    }
  ];

  private intervalTimer: number;
  private currentQuoteIndex: number = 0;

  @State() currentQuote: TestimonialInterface;

  @Event() rotateQuote: EventEmitter;

  /**
   * Update the state with a new quote
   * 
   * @param quote 
   */
  private updateCurrentQuote(quote: TestimonialInterface):void {
    this.currentQuote = quote;
  }

  /**
   * Return a new quote index
   * - This will increment until there are no quotes to go through; in which it will
   *   return to 0
   * 
   * @return number
   */
  private getNewQuoteIndex(): number {
    // Check if there is any quotes, otherwise restart
    return (this.testimonials[this.currentQuoteIndex + 1]) ? this.currentQuoteIndex+1 : 0;
  }

  /**
   * Return a quote for given index. If none found an empty TestimonialInterface is returned
   * 
   * @param index 
   * 
   * @returns TestimonialInterface
   */
  private getQuote(index):TestimonialInterface  {
    if (this.testimonials[index]) {
      return this.testimonials[index];
    }
    
    return {
      quote: '',
      cite: ''
    };
  }

  /**
   * Handler for a quote rotation request event
   */
  @Listen('rotateQuote')
  rotateQuoteHandler() {
    this.currentQuoteIndex = this.getNewQuoteIndex();
    const newCurrentQuote = this.getQuote(this.currentQuoteIndex);
    this.updateCurrentQuote(newCurrentQuote);
  }

  componentWillLoad() {
    if (!Build.isBrowser) {
      const newCurrentQuote = this.getQuote(this.currentQuoteIndex);
      this.updateCurrentQuote(newCurrentQuote);
    }
  }

  componentDidLoad() {
    if (!Build.isBrowser) {
      this.intervalTimer = window.setInterval(() => {
        // Request a new quote
        this.rotateQuote.emit();
      }, 6000);
    }
  }

  componentDidUnload() {
    clearInterval(this.intervalTimer);
  }

  render() {
    if (!Build.isBrowser || !this.currentQuote) {
      return;
    }

    const {quote, cite} = this.currentQuote;

    return (
      <div class="testimonials">
        <nyms-sidebar-segment heading="what our clients say about us..">
          <blockquote>
            {quote}
            <cite>- {cite}</cite>
          </blockquote>
        </nyms-sidebar-segment>
      </div>
    );
  }

}
