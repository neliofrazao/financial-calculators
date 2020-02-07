import Cleave from 'cleave.js';

export class MoneyInput {
  /**
   *
   * @static
   * @param {string} inputId
   * @returns {object}
   * @memberof MoneyInput
   */
  public static format(inputId: string): object {
    const moneyInput = new Cleave(inputId, {
      numeral: true,
      numeralDecimalMark: ',',
      delimiter: '.',
      numericOnly: true,
      rawValueTrimPrefix: true,
      prefix: 'R$ ',
    });

    return moneyInput;
  }
}
