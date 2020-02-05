import { CreateElementFactory } from '../utils/CreateElementFactory';

export class Alert {
  public error(alertMessage: string): Node {
    return this.createAlert('alert-standard-error', alertMessage);
  }

  public warning(alertMessage: string): Node {
    return this.createAlert('alert-standard-warning', alertMessage);
  }

  public info(alertMessage: string): Node {
    return this.createAlert('alert-standard-info', alertMessage);
  }

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

  private handleTimeoutCloseAlert(): void {
    setTimeout(() => {
      const getAlert = document.getElementById('alert');
      getAlert.remove();
    }, 2500);
  }

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
