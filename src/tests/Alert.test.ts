import { Alert } from '../app/shared/alert';
describe('test Alert', () => {
  const alert = new Alert();
  test('shoud output error alert', () => {
    const alertMessage = alert.error('error alert');
    document.body.appendChild(alertMessage);
    const getAlert = document.getElementById('alert');
    const getAlertSeverity = getAlert.getAttribute('class');

    expect(getAlertSeverity).toEqual('alert-standard-error');
    expect(getAlert.innerHTML).toContain('error alert');
  });

  test('shoud output info alert', () => {
    const alertMessage = alert.info('info alert');
    document.body.appendChild(alertMessage);
    const getAlert = document.getElementById('alert');
    const getAlertSeverity = getAlert.getAttribute('class');

    expect(getAlertSeverity).toEqual('alert-standard-info');
    expect(getAlert.innerHTML).toContain('info alert');
  });

  test('shoud output info warning', () => {
    const alertMessage = alert.warning('warning alert');
    document.body.appendChild(alertMessage);
    const getAlert = document.getElementById('alert');
    const getAlertSeverity = getAlert.getAttribute('class');

    expect(getAlertSeverity).toEqual('alert-standard-warning');
    expect(getAlert.innerHTML).toContain('warning alert');
  });
});
