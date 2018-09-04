class Github {
  constructor() {
    this.client_id = 'f0f8635ee559507ba3fb';
    this.client_secret = '3ed27a09fbd8fe310fcda0e052ac49292ba1b769';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}