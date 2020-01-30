import {
  CreateElementInterface,
  ChildrenElementInterface,
} from '../interfaces/createElement.interface';

export class CreateElement {
  public static addElement({
    tag,
    textContent,
    attributes,
    children,
  }: CreateElementInterface): HTMLElement {
    const newHtmlElement = this.addHtmlElement(tag);
    newHtmlElement.textContent = textContent;

    this.addAttributesElement(newHtmlElement, attributes);
    this.addChildrenElement(children, newHtmlElement);

    return newHtmlElement;
  }

  private static addAttributesElement(htmlElement: HTMLElement, attributes: object) {
    if (attributes) {
      Object.entries(attributes).forEach(([attr, value]) => {
        htmlElement.setAttribute(attr, value);
      });
    }
  }

  private static addChildrenElement(
    children: Array<ChildrenElementInterface>,
    htmlElement: HTMLElement,
  ) {
    if (children) {
      children.length &&
        children.map(values => {
          const childrenHtmlElement = this.addHtmlElement(values.tag);
          this.addAttributesElement(childrenHtmlElement, values.attributes);

          childrenHtmlElement.textContent = values.textContent;
          htmlElement.append(childrenHtmlElement);
        });
    }
  }

  private static addHtmlElement(tag: string) {
    return document.createElement(tag);
  }
}
