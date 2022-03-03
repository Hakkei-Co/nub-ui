import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'hakion-search-input',
  styleUrl: 'hakion-search-input.css',
  shadow: true,
})
export class HakionSearchInput implements ComponentInterface {
  @Prop() placeholder?: string = 'Search';
  @Prop() searchTerm?: string = '';
  @Prop() handleInput?: (ev: any) => void;
  @Prop() debounce?: number = 0;

  timer: any = undefined;

  onHandleInput(ev: any) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (this.handleInput) {
        this.handleInput(ev);
      }
    }, this.debounce);
  }

  render() {
    const { placeholder, searchTerm } = this;

    return (
      <Host id="algolia-search">
        <div class="form-group">
          <input
            name="search"
            type="search"
            autocomplete="off"
            value={searchTerm}
            onInput={this.onHandleInput.bind(this)}
            onChange={this.onHandleInput.bind(this)}
            placeholder={placeholder}
            aria-label="Search"
            required
          />
          <slot></slot>
        </div>
      </Host>
    );
  }
}
