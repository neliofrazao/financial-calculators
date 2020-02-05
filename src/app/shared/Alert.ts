import { CreateElementFactory } from '../utils/CreateElementFactory';

export class Alert {
  /**
   *
   *
   * @param {string} alertMessage
   * @returns {Node}
   * @memberof Alert
   */
  public error(alertMessage: string): Node {
    return this.createAlert('alert-standard-error', alertMessage);
  }
  /**
   *
   *
   * @param {string} alertMessage
   * @returns {Node}
   * @memberof Alert
   */
  public warning(alertMessage: string): Node {
    return this.createAlert('alert-standard-warning', alertMessage);
  }
  /**
   *
   *
   * @param {string} alertMessage
   * @returns {Node}
   * @memberof Alert
   */
  public info(alertMessage: string): Node {
    return this.createAlert('alert-standard-info', alertMessage);
  }
  /**
   *
   *
   * @private
   * @param {string} alertSeverity
   * @param {string} alertMessage
   * @returns {HTMLElement}
   * @memberof Alert
   */
  private createAlert(alertSeverity: string, alertMessage: string): HTMLElement {
    const alertRoot = CreateElementFactory.addElement({
      tag: 'div',
      attributes: {
        id: 'alert',
        class: alertSeverity,
      },
      children: [
        {
          tag: 'p',
          textContent: alertMessage,
          attributes: {
            class: 'alert-message',
          },
        },
        {
          tag: 'span',
          textContent: 'x',
          attributes: {
            id: 'close',
            class: 'alert-close',
          },
        },
      ],
    });
    const currentAlert = document.getElementById('alert');
    if (currentAlert) currentAlert.remove();
    this.handleTimeoutCloseAlert();
    this.handleCloseAlert();

    return document.body.appendChild(alertRoot);
  }
  /**
   *
   *
   * @private
   * @memberof Alert
   */
  private handleTimeoutCloseAlert(): void {
    setTimeout(() => {
      const getAlert = document.getElementById('alert');
      getAlert.remove();
    }, 2500);
  }
  /**
   *
   *
   * @private
   * @memberof Alert
   */
  private handleCloseAlert(): void {
    setTimeout(() => {
      const getAlert = document.getElementById('alert');
      const getCloseButton = document.getElementById('close');
      getCloseButton.addEventListener('click', () => {
        getAlert.remove();
      });
    }, 100);
  }
}
