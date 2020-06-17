import BasePage from "./BasePage";

class HomePage extends BasePage {


  get playNowBtn() {
    return browser.$('//a[contains(text(),"Play Now")]')
  }

  get learnToPlay() {
    return browser.$('//div[@class="guest-play-more"]//a[1]')
  }

  get playComputer() {
    return browser.$('//div[@class="guest-play-more"]//a[2]')
  }

  get dailyPuzzle() {
    return browser.$('//div[@class="guest-play-more"]//a[3]')
  }

  get solvePuzzle() {
    return browser.$('//a[contains(text(),"Solve Puzzles")]')
  }

  get startLesson() {
    return browser.$('//a[contains(text(),"Start Lessons")]')
  }

  get chessToday() {
    return browser.$('//a[contains(text(),"Chess Today")]')
  }

  get todayNews() {
    return $('.index-post-link')
  }

  get footerNavigation() {
    return browser.$$('//*[@class = "navigation-footer-pages-component navigation-footer-left"]//a')
  }

  open() {
    super.open('https://www.chess.com');
  }
}

export default new HomePage();
