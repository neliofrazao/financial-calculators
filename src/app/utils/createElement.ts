import { CreateElementInterface } from '../interfaces/createElement.interface';

export class CreateElement {
  public static setHtmlElement({ tag, className }: CreateElementInterface): HTMLElement {
    const createHtmlElement = document.createElement(tag);
    const hasClassName = typeof className !== 'undefined';
    hasClassName && createHtmlElement.classList.add(className);

    return createHtmlElement;
  }
}
