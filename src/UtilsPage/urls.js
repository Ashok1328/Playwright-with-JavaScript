exports.Urls = class Urls {
  constructor(page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto("https://demoblaze.com/index.html");
  }
};
