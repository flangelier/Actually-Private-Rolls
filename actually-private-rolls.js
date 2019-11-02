Hooks.on('init', () => {
    game.settings.register("chatfix", "hidePrivateRolls", {
        name: "Hide Private Rolls",
        hint: "Enable this to hide Private GM Rolls unless they are GM or the one that rolled.",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });
});

Hooks.on('renderChatMessage', (app, msg, html) => {

    if (game.settings.get('chatfix', 'hidePrivateRolls') && msg.isWhisper === 1) {
        if (game.user.isGM === false && game.user.data._id !== msg.author.data._id) {
            console.log('hide message');
            html.hide();
        }
    }
});