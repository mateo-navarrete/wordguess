import {
  CLEAR,
  ERROR,
  RULES,
  RULES_VIEW,
  START,
  TITLE,
  TITLE_VIEW,
  UFO,
  ufo
} from '../constants';

export default class View {
  constructor() {
    this.messages = {};
    this.rules = RULES_VIEW;
    this.title = TITLE_VIEW;
    this.ufo = ufo;
  }

  getView({ type, payload }) {
    let view = '';
    switch (type) {
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
        view = this[type];
    }

    return view;
  }

  start() {
    this.render({ type: CLEAR });
    this.render({ type: TITLE });
    this.render({ type: RULES });
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
}
