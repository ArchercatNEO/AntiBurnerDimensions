export const simulations = [
    {
        id: 1,
        description: "You must buy a dimension or tickspeed upgrade every 10 seconds or you fail.",
        isQuickResettable: false,

        display(base, limit) {
            return `${TimeSpan.fromSeconds(base).toString()} /
            ${TimeSpan.fromSeconds(limit).toString()} seconds without buying a dimension`;
        },

        get currentResource() { return player.sim1Pow; },
        set currentResource(value) { player.sim1Pow = value; },
        maximumResource: 10,

        failText: "You didn't buy a dimension in under 10 seconds causing you to fail the challenge."
    },
    {
        id: 2,
        description: "You can only a buy 10 a dimension 10 times.",
        isQuickResettable: false,

        display(base, limit) {
            return `${base} / ${limit} dimensions bought`;
        },

        get currentResource() { return player.sim2Pow; },
        set currentResource(value) { player.sim2Pow = value; },
        maximumResource: 10,

        failText: "You bought 10 dimensions too many times."
    }
];