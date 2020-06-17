import HomePage from "../_pages/HomePage";
import LeftMenuBarPage from "../_pages/LeftMenuBarPage";


describe('Left menu bar - play link', () => {
  before(() => {
    HomePage.open();
    browser.waitUntil(() => browser.getTitle() === 'Chess.com - Play Chess Online - Free Games',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });


  it('should check if user can move to play link, click Live chess link', () => {
    LeftMenuBarPage.playLink.moveTo();
    browser.pause(1000)
    LeftMenuBarPage.liveChess.moveTo();
    LeftMenuBarPage.liveChess.click();
    browser.waitUntil(() => browser.getTitle() === 'Play Live Chess Online - Chess.com',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });

  it('should check if user can move to play link, click Daily chess link', () => {
    (LeftMenuBarPage.playLink).moveTo();
    (LeftMenuBarPage.dailyChess).moveTo();
    (LeftMenuBarPage.dailyChess).click();
    browser.waitUntil(() => browser.getTitle() === 'Play Daily (Correspondence) Chess - Chess.com',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });

  it('should check if user can move to play, click Computer', () => {
    (LeftMenuBarPage.playLink).moveTo();
    (LeftMenuBarPage.computerChess).moveTo();
    (LeftMenuBarPage.computerChess).click();
    browser.waitUntil(() => browser.getTitle() === 'Play Chess Online Against the Computer - Chess.com',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });

  it('should check if user can move to play, click Tournaments', () => {
    (LeftMenuBarPage.playLink).moveTo();
    (LeftMenuBarPage.tournamentsChess).moveTo();
    (LeftMenuBarPage.tournamentsChess).click();
    browser.waitUntil(() => browser.getTitle() === 'Play Online Chess Tournaments - Chess.com',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });

  it('should check if user can move to play, click 4 Player Chess', () => {
    (LeftMenuBarPage.playLink).moveTo();
    (LeftMenuBarPage.fourPlayChess).moveTo();
    (LeftMenuBarPage.fourPlayChess).click();
    browser.waitUntil(() => browser.getTitle() === 'Play Four Player Chess - Chess.com',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });

  it('should check if user can move to play, click Leaderboard', () => {
    (LeftMenuBarPage.playLink).moveTo();
    (LeftMenuBarPage.leaderboardChess).moveTo();
    (LeftMenuBarPage.leaderboardChess).click();
    browser.waitUntil(() => browser.getTitle() === 'Blitz Leaderboard - Chess Rankings - Chess.com',
      {timeout: 5000, timeoutMsg: 'expected text to be different after 5s'});
  });
});
