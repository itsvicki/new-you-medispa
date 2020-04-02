import {Component, ComponentInterface, Host, Prop, h, EventEmitter, Event, Element, State, Watch, Listen} from '@stencil/core';

@Component({
  tag: 'nyms-accordion',
  styleUrl: 'accordion.css',
  shadow: true
})
export class Accordion implements ComponentInterface {
  private accordionId = `accordion-${accordionIds++}`;

  @Element() el!: HTMLElement

  @State() contentHeight!: number

  @Prop({ reflect: true }) name?: string = this.accordionId;
  @Prop({ reflect: true }) accordionTitle!: string;
  @Prop({ reflect: true, mutable: true }) open = false;

  @Watch('open')
  protected openChanged() {
    this.emitStyle()
  }

  /**
   * Emitted when the styles change
   * @internal
   */
  @Event() nymsStyle!: EventEmitter<{
    [styleName: string]: boolean;
  }>

  /**
   * Emitted when the toggle has focus.
   */
  @Event() nymsFocus!: EventEmitter<void>

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() nymsBlur!: EventEmitter<void>

  componentWillRender() {
    this.calcHeight();
  }

  /**
   * Listen for window resize to re-calculate content height
   */
  @Listen('resize', { target: 'window' })
  onResize() {
    this.calcHeight()
  }

  private emitStyle() {
    this.nymsStyle.emit({
      'is-open': this.open
    })
  }

  private toggleAccordion() {
    this.open = !this.open
  }

  private calcHeight() {
    const container = this.el;

    if (container.shadowRoot) {
      const content = container.shadowRoot.querySelector('.content') as HTMLElement;

      if (content) {
        this.contentHeight = content.offsetHeight;
      }
    }
  }

  private onFocus = () => {
    this.nymsFocus.emit();
  }

  private onBlur = () => {
    this.nymsBlur.emit();
  }

  render() {
    const {name, open, accordionTitle} = this;
    const buttonLabel = open ? 'close' : 'open';

    if (!this.accordionTitle) {
      return;
    }

    return (
      <Host
        class={{
          'is-open': open
        }}
        role="region"
        open={`${open}`}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}>
        <header class="title" 
          onClick={() => this.toggleAccordion()}>
          <button
            aria-controls={`nyms-accordion-${name}`}
            aria-expanded={`${open}`}
            aria-label={buttonLabel}
            class="button"></button>

          <h4 id={name}>{accordionTitle}</h4>
        </header>
        <div
          class="content-wrapper"
          style={{
            height: open ? `${this.contentHeight}px` : `0px`
          }}
          id={`nyms-accordion-${name}`}>
          <div
            class={{
              content: true,
              'is-open': open
            }}
            aria-hidden={`${!open}`}>
            <slot></slot>
          </div>
        </div>
      </Host>
    )
  }
}

let accordionIds = 0;
