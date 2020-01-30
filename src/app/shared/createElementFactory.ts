import {
  CreateElementInterface,
  GetChildrenInterface,
} from '../interfaces/createElement.interface';

export class CreateElementFactory {
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

  private static addChildrenElement(
    children: Array<CreateElementInterface>,
    htmlElement: HTMLElement,
  ) {
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

  private static addAttributesElement(htmlElement: HTMLElement, attributes: object): void {
    const hasAttributesElement = Object.keys(attributes).length;
    if (hasAttributesElement) {
      Object.entries(attributes).forEach(([attr, value]) => {
        htmlElement.setAttribute(attr, value);
      });
    }
  }

  private static addHtmlElement(tag: string): HTMLElement {
    return document.createElement(tag);
  }
}
