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
    const addHtmlElement = document.createElement(tag);
    addHtmlElement.textContent = textContent;

    this.addAttributesElement(addHtmlElement, attributes);
    this.addChildrenElement(children, addHtmlElement);

    return addHtmlElement;
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
    children.map(values => {
      const childrenHtmlElement = document.createElement(values.tag);
      this.addAttributesElement(childrenHtmlElement, values.attributes);

      childrenHtmlElement.textContent = values.textContent;
      htmlElement.append(childrenHtmlElement);
    });
  }
}
