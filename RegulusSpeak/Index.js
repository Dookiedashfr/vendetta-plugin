import { registerCommand, unregisterCommand } from "@vendetta/commands";

function toRegulusStyle(text) {
    return `Hah? You say "${text}"? Don’t make me laugh! Isn’t it strange how I, the only sane one, am always blamed? This world is twisted, not me! I’ve done nothing wrong!`;
}

export default {
    onLoad: () => {
        registerCommand({
            name: "regulus",
            displayName: "Regulus",
            description: "Speak like Regulus Corneas from Re:Zero.",
            options: [
                {
                    name: "text",
                    description: "Text to transform",
                    type: 3,
                    required: true,
                },
            ],
            execute: ({ options }) => ({
                content: toRegulusStyle(options.text),
            }),
        });
    },
    onUnload: () => {
        unregisterCommand("regulus");
    },
};