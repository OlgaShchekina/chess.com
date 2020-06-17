import BasePage from './BasePage';


class LeftMenuBarPage extends BasePage {

  get leftMenu() {
    return $('#sb')
  }

  get label() {
    return $('[data-panel="notifications"]')
  }

  get playLink() {
    return $('[data-panel="play"]')
  }

  get puzzlesLink() {
    return $('[data-panel="puzzles"]')
  }

  get learnLink() {
    return $('[data-panel="learn"]')
  }

  get todayLink() {
    return $('[data-panel="today"]')
  }

  get connectLink() {
    return $('[data-panel="connect"]')
  }

  get moreLink() {
    return $('[data-panel="more"]')
  }

  get liveChess() {
    return $('[class="link main-link sprite live"]');
  }

  get dailyChess() {
    return $('[class="link main-link sprite daily"]');
  }

  get computerChess() {
    return $('[class="link main-link sprite computer"]');
  }
  get tournamentsChess() {
    return $('[class="link main-link sprite tournaments"]');
  }
  get fourPlayChess() {
    return $('[class="link main-link sprite four-player-chess"]');
  }
  get leaderboardChess() {
    return $('[class="link main-link sprite leaderboard"]');
  }

}

export default new LeftMenuBarPage();
