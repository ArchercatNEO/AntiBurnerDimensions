import { DC } from "../../constants";

export const overflowUpgrades = {
    epMult: {
        id: 1,
        cost: 5,
        description: () => `Multiply ep by 5`,
        effect: () => DC.D5,

    },

    nt: {
        id: 2,
        cost: 3,
        description: () => "Ugga bugga",
        effect: () => DC.E5
    }
};