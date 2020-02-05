import {
  CreateElementInterface,
  GetChildrenInterface,
} from '../interfaces/createElement.interface';

export class CreateElementFactory {
  /**
   *
   *
   * @static
   * @param {CreateElementInterface} {
   *     tag,
   *     textContent,
   *     attributes = {},
   *     children = [],
   *   }
   * @returns {HTMLElement}
   * @memberof CreateElementFactory
   */
  public static addElement({
    tag,
    textContent,
    attributes = {},
    children = [],
  }: CreateElementInterface): HTMLElement {
    const newHtmlElement = this.addHtmlElement(tag);
    newHtmlElement.textContent = textContent;

    this.addAttributesElement(newHtmlElement, attributes);
    this.addChildrenElement(children, newHtmlElement);

    return newHtmlElement;
  }
  /**
   *
   *
   * @private
   * @static
   * @param {Array<CreateElementInterface>} children
   * @param {HTMLElement} htmlElement
   * @memberof CreateElementFactory
   */
  private static addChildrenElement(
    children: Array<CreateElementInterface>,
    htmlElement: HTMLElement,
  ): void {
    children.length &&
      children.map(childrenValues => {
        const childrenHtmlElement = this.addHtmlElement(childrenValues.tag);
        this.getChildrenElement({ htmlElement, childrenHtmlElement, childrenValues });
        const hasNestedChildrenHtmlElement = childrenValues.children || [];

        hasNestedChildrenHtmlElement.length &&
          childrenValues.children.map(value => {
            const nestedChildrenHtmlElement = this.addHtmlElement(value.tag);
            this.getChildrenElement({
              htmlElement: childrenHtmlElement,
              childrenHtmlElement: nestedChildrenHtmlElement,
              childrenValues: value,
            });
          });
      });
  }
  /**
   *
   *
   * @private
   * @static
   * @param {GetChildrenInterface} {
   *     htmlElement,
   *     childrenHtmlElement,
   *     childrenValues,
   *   }
   * @memberof CreateElementFactory
   */
  private static getChildrenElement({
    htmlElement,
    childrenHtmlElement,
    childrenValues,
  }: GetChildrenInterface): void {
    const getChildrenAttributes = childrenValues.attributes || {};
    this.addAttributesElement(childrenHtmlElement, getChildrenAttributes);
    childrenHtmlElement.textContent = childrenValues.textContent;

    htmlElement.append(childrenHtmlElement);
  }
  /**
   *
   *
   * @private
   * @static
   * @param {HTMLElement} htmlElement
   * @param {object} attributes
   * @memberof CreateElementFactory
   */
  private static addAttributesElement(htmlElement: HTMLElement, attributes: object): void {
    const hasAttributesElement = Object.keys(attributes).length;
    if (hasAttributesElement) {
      Object.entries(attributes).forEach(([attr, value]) => {
        htmlElement.setAttribute(attr, value);
      });
    }
  }
  /**
   *
   *
   * @private
   * @static
   * @param {string} tag
   * @returns {HTMLElement}
   * @memberof CreateElementFactory
   */
  private static addHtmlElement(tag: string): HTMLElement {
    return document.createElement(tag);
  }
}
