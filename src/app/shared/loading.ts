import { CreateElementFactory } from '../utils';

export class Loading {
  public static addLoading(): HTMLElement {
    const container = document.getElementById('container');
    const addLoading = CreateElementFactory.addElement({
      tag: 'div',
      attributes: {
        id: 'loading',
      },
      children: [
        {
          tag: 'span',
          textContent: 'Carregando...',
        },
      ],
    });

    return container.appendChild(addLoading);
  }

  public static removeLoading(): void {
    const container = document.getElementById('loading');
    container.remove();
  }
}
