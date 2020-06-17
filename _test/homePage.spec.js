import HomePage from "../_pages/HomePage";
import {expect} from "chai";
import {links} from "../_data/homePage.data";


describe('Home Page', () => {
  before(() => {
    HomePage.open();
    browser.waitUntil(
      () => browser.getTitle() === 'Chess.com - Play Chess Online - Free Games',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });


  it('should check if Play Now link is clickable', () => {
    expect(HomePage.playNowBtn.isClickable()).true
    expect(HomePage.playNowBtn.getAttribute('href')).eq('https://www.chess.com/register')
  });

  it('should check if Learn to Play link is clickable', () => {
    expect(HomePage.learnToPlay.isClickable()).true
    expect(HomePage.learnToPlay.getAttribute('href')).eq('https://www.chess.com/lessons')
  });

  it('should check if Play computer link is clickable', () => {
    expect(HomePage.playComputer.isClickable()).true
    expect(HomePage.playComputer.getAttribute('href')).eq('https://www.chess.com/play/computer')
  });

  it('should check if Daily puzzle link is clickable', () => {
    expect(HomePage.dailyPuzzle.isClickable()).true
    expect(HomePage.dailyPuzzle.getAttribute('href')).eq('https://www.chess.com/goto_daily_puzzle')
  });

  it('should check if Solve Puzzle link is clickable', () => {
    expect(HomePage.solvePuzzle.isClickable()).true
    expect(HomePage.solvePuzzle.getAttribute('href')).eq('https://www.chess.com/puzzles')
  });

  it('should check if Start Lesson link is clickable', () => {
    expect(HomePage.startLesson.isClickable()).true
    expect(HomePage.startLesson.getAttribute('href')).eq('https://www.chess.com/lessons')
  });

  it('should check if Chess Today link is clickable', () => {
    expect(HomePage.chessToday.isClickable()).true
    expect(HomePage.chessToday.getAttribute('href')).eq('https://www.chess.com/today')
  });

  it('should check if Today News link is clickable', () => {
    expect(HomePage.todayNews.isClickable()).true
    expect(HomePage.todayNews.getAttribute('href')).eq('https://www.chess.com/today')
  });

  it('should check if navigation footer elements are clickable and include links', () => {
    for (let i = 0; i < HomePage.footerNavigation.length; i++) {
      let menuElement = HomePage.footerNavigation[i];
      let linksElement = links[i];
      expect((menuElement.getAttribute('href')).includes(linksElement) && menuElement.isClickable()).true;
    }
  });


});