import { CreateElementFactory } from '../utils/CreateElementFactory';

export class Loading {
  /**
   *
   *
   * @static
   * @returns {HTMLElement}
   * @memberof Loading
   */
  public static addLoading(): HTMLElement {
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

    return document.body.appendChild(addLoading);
  }
  /**
   *
   *
   * @static
   * @memberof Loading
   */
  public static removeLoading(): void {
    const container = document.getElementById('loading');
    container.remove();
  }
}
