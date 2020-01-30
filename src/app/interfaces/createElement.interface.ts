interface ChildrenElementInterface {
  tag: string;
  textContent?: string;
  attributes?: object;
  children?: Array<ChildrenElementInterface>;
}

export interface GetChildrenInterface {
  htmlElement: HTMLElement;
  childrenHtmlElement: HTMLElement;
  childrenValues: ChildrenElementInterface;
}

export interface CreateElementInterface {
  tag: string;
  textContent?: string;
  attributes?: object;
  children?: Array<ChildrenElementInterface>;
}
