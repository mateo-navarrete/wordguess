import { ERROR, RULES, RULES_VIEW, TITLE, TITLE_VIEW, UFO, ufo } from '../constants';

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
      default:
        view = this[type];
    }

    return view;
  }

  render(action) {
    const view = getView(action);
    console.log(view);
  }
}
