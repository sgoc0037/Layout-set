export function makeKey(str) {
    return [...str].map(e => String.fromCharCode(e.charCodeAt() + Math.floor(Math.random() * 25))).join('');
}