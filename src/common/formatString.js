// utils/formatString.js

export const formatString = (str) => {
    return str.replace(/[\""/_]/g, (match) => match === '/' ? '' : ' ');
};
