interface ChildrenElementInterface {
  tag: string;
  textContent?: string;
  attributes?: object;
}

export interface CreateElementInterface {
  tag: string;
  textContent?: string;
  attributes?: object;
  children?: ChildrenElementInterface[];
}
