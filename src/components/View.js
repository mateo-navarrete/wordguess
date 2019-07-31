import {
  CLEAR,
  ERROR,
  ERROR_INPUT,
  ERROR_DUPLICATE,
  ERROR_INPUT_VIEW,
  ERROR_DUPLICATE_VIEW,
  RULES_VIEW,
  CODEWORD,
  START,
  TITLE_VIEW,
  UFO,
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
