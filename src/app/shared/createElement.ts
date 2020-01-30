import { CreateElementInterface } from '../interfaces/createElement.interface';

export class CreateElement {
  public static addElement({
    tag,
    textContent,
    attributes,
    children,
  }: CreateElementInterface): HTMLElement {
    const newElement = document.createElement(tag);

    if (attributes) {
      Object.entries(attributes).forEach(([attr, value]) => {
        newElement.setAttribute(attr, value);
      });
    }

    newElement.textContent = textContent;

    children.map(values => {
      const newChildren = document.createElement(values.tag);

      Object.entries(values.attributes).forEach(([key, value]) => {
        newChildren.setAttribute(key, value);
      });

      newChildren.textContent = values.textContent;
      newElement.append(newChildren);
    });

    return newElement;
  }
}
