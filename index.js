/**
 * @name RegulusChatCommand
 * @description Changes your message to Regulus style only when you start with /regulus
 * @version 1.1.0
 */

module.exports = class RegulusChatCommand {
  constructor() {
    this.name = "RegulusChatCommand";
  }

  start() {
    const MessageQueue = require('vendetta/metro').metro.findByName('MessageQueue');

    this.unpatch = vendetta.patcher.after(MessageQueue, 'sendMessage', (args) => {
      let channelId = args[0];
      let message = args[1];

      if (message.content && message.content.startsWith("/regulus")) {
        // Remove the command part "/regulus" from the message
        const originalText = message.content.replace("/regulus", "").trim();

        // Change message content to Regulus style
        message.content = this.toRegulusSpeak(originalText);
      }
    });
  }

  toRegulusSpeak(text) {
    const regulusPhrases = [
      "You insolent worm!",
      "Pathetic human!",
      "Bow before me!",
      "You dare defy Regulus Corneas?",
      "Kneel to the Dragon Lord!",
      "Your fate is sealed!",
      "I am the rightful ruler!"
    ];

    // Pick a random Regulus phrase
    const randPhrase = regulusPhrases[Math.floor(Math.random() * regulusPhrases.length)];

    // Return Regulus phrase + your message
    return randPhrase + " " + text;
  }

  stop() {
    if (this.unpatch) this.unpatch();
  }
};
