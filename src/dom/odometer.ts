import { apply } from "../flow";

/**
 * Creates a div that houses content that updates with an animation.
 */
export class OdometerController<T> {
  /** The div to add to the layout which houses the odometer. */
  readonly div: HTMLDivElement;

  /**
   * A function that returns true if two values are equivalent (meaning no UI
   * refresh will be needed).
   */
  private readonly _equals: (a: T, b: T) => boolean;

  /** A function that creates the UI for a given value. */
  private readonly _builder: (value: T) => HTMLElement;

  /** The current value being displayed (transformed by {@link _builder} into UI). */
  private _currentValue: T;

  /** The inner div containing the UI for the {@link _currentValue}. */
  private _in: HTMLElement;

  /** The inner div containing the UI that is animating out (if any). */
  private _out: HTMLElement | null;

  /**
   * Creates the controller, the div, and builds the UI for the initial state.
   * @param initialValue The value to create a view for upon construction of the
   * odometer.
   * @param equals A function that returns true if two values are equivalent
   * (meaning no UI refresh will be needed).
   * @param builder A function that creates the UI for a given value.
   * @param animateStart Whether or not to run the animation for the initial
   * value.
   */
  constructor(initialValue: T, equals: (a: T, b: T) => boolean,
    builder: (value: T) => HTMLElement, animateStart = false) {

    this.div = apply(document.createElement("div"), div => {
      div.className = "odometer";
    });

    this._in = builder(initialValue);
    this._out = null;

    this._currentValue = initialValue;
    this._equals = equals;
    this._builder = builder;

    this.div.append(this._in);
    if (animateStart) {
      this._in.classList.add("odometer-in");
    }
  }

  /**
   * Set the value to be displayed in the odometer. Only updates the UI if the
   * value has changed.
   * @param value The new value to display in the UI.
   */
  update(value: T) {
    if (this._equals(this.currentValue, value)) { return; }

    this._out?.remove();
    this._out = this._in;
    this._out.classList.remove("odometer-in");
    this._out.classList.add("odometer-out");

    this._in = this._builder(value);
    this._in.classList.add("odometer-in");
    this.div.append(this._in);

    this._currentValue = value;
  }

  /**
   * The value the odometer is currently displaying in the UI.
   */
  get currentValue(): T {
    return this._currentValue;
  }
}