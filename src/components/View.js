import {
  BANK,
  CLEAR,
  CODEWORD,
  ERROR,
  ERROR_INPUT,
  ERROR_DUPLICATE,
  ERROR_INPUT_VIEW,
  ERROR_DUPLICATE_VIEW,
  IS_WIN,
  IS_LOSS,
  LOSS_VIEW,
  RULES_VIEW,
  START,
  TITLE_VIEW,
  UFO,
  WIN_VIEW,
  ufo
} from '../constants';

export default class View {
  constructor() {
    this.messages = {
      [ERROR_INPUT]: ERROR_INPUT_VIEW,
      [ERROR_DUPLICATE]: ERROR_DUPLICATE_VIEW,
    };
    this.ufo = ufo;
  }

  getView({ type, payload }) {
    let view = '';
    switch (type) {
      case BANK:
        view = BANK + ' ' + payload;
        break;
      case CODEWORD:
        view = CODEWORD + ' ' + payload;
        break;
      case ERROR:
        view = this.messages[payload];
        break;
      case UFO:
        view = this.ufo[payload];
        break;
      case START:
        view = this.ufo[0];
        break;
      case IS_WIN:
        view =
          this.ufo[this.ufo.length - 1] +
          `
 ${WIN_VIEW}`;
        break;
      case IS_LOSS:
        view =
          this.ufo[this.ufo.length - 3] +
          `
 ${LOSS_VIEW}`;
        break;
      default:
        view = type;
    }

    return view;
  }

  start() {
    this.update();
    this.render({ type: START });
  }

  render(action) {
    if (action.type === CLEAR) {
      console.clear();
      return;
    }

    const view = this.getView(action);
    console.log(view);
  }

  update() {
    this.render({ type: CLEAR });
    this.render({ type: TITLE_VIEW });
    this.render({ type: RULES_VIEW });
  }
}
