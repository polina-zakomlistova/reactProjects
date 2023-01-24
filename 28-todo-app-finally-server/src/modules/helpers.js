export const getEl = (selector, all = false, el = document) =>
    all ? [...el.querySelectorAll(selector)] : el.querySelector(selector);
