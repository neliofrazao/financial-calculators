import { createElementInterface } from '../interfaces/createElement.interface'

export class createElement {
  public static setHtmlElement({ tag, className }: createElementInterface) {
    const createHtmlElement = document.createElement(tag);
    const hasClassName = typeof className !== 'undefined';
    hasClassName && createHtmlElement.classList.add(className);
  
    return createHtmlElement;
  }
}
