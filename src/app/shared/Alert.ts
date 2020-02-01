import { CreateElementFactory } from '../utils';

export class Alert {
  public error(alertMessage: string): void {
    this.createAlert('alert-standard-error', alertMessage);
  }

  public warning(alertMessage: string): void {
    this.createAlert('alert-standard-warning', alertMessage);
  }

  public info(alertMessage: string): void {
    this.createAlert('alert-standard-info', alertMessage);
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
      ],
    });

    return document.body.appendChild(alertRoot);
  }
}
