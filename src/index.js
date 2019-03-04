// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    const checkMoney = (currency) => {
        let amount = {};
        let next = currency;

        const add = (num, rep, divider) => {
            amount[rep] = Math.floor((num / divider));
            next = next % divider;
        };

        if (next >= 50) {
            add(next, 'H', 50);
        }

        if (next >= 25) {
            add(next, 'Q', 25);
        }

        if (next >= 10) {
            add(next, 'D', 10);
        }

        if (next >= 5) {
            add(next, 'N', 5);
        }

        if (next >= 1) {
            add(next, 'P', 1);
        }

        return amount;
    };

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else if (currency === 0) {
        return {};
    } else {
        return checkMoney(currency);
    }
};
