// utils/formatString.js

export const formatString = (str) => {
    return str.replace(/[\/-]/g, (match) => match === '/' ? '' : ' ');
};
