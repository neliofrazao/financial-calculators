import { ReceiptsForm } from '../app/components/ReceiptsForm';
import * as fs from 'fs';
import * as path from 'path';
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest.dontMock('fs');

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
  const receiptsForm = new ReceiptsForm();
  receiptsForm.init();
});

afterEach(() => {
  jest.resetModules();
});

jest.useFakeTimers();
describe('test ReceiptsForm component', () => {
  test('shoud print required field message', () => {
    const getAmount: any = document.getElementById('amount');
    const getInstallments: any = document.getElementById('installments');

    getAmount.value = '12122';
    getInstallments.value = '1';

    document.getElementById('send').click();
    jest.advanceTimersByTime(100);
    const getAlert = document.getElementById('alert');

    expect(getAlert.innerHTML).toContain('Por favor, preencha os itens corretamente!');
  });
});
