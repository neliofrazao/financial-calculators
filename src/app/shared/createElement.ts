import {
  CreateElementInterface,
  ChildrenElementInterface,
} from '../interfaces/createElement.interface';

export class CreateElement {
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

  private static addAttributesElement(htmlElement: HTMLElement, attributes: object) {
    const hasNoErrors = Object.keys(attributes).length;
    if (hasNoErrors) {
      Object.entries(attributes).forEach(([attr, value]) => {
        htmlElement.setAttribute(attr, value);
      });
    }
  }

  private static addChildrenElement(
    children: Array<ChildrenElementInterface>,
    htmlElement: HTMLElement,
  ) {
    const hasChildren = children.length;

    if (hasChildren) {
      children.map(values => {
        const getChildrenAttributes = values.attributes || {};
        const childrenHtmlElement = this.addHtmlElement(values.tag);
        this.addAttributesElement(childrenHtmlElement, getChildrenAttributes);
        childrenHtmlElement.textContent = values.textContent;
        htmlElement.append(childrenHtmlElement);
      });
    }
  }

  private static addHtmlElement(tag: string) {
    return document.createElement(tag);
  }
}
