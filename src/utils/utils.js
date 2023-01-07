export function keysCreator(str, number) {

    return [...Array(number)].map(i => {
        return [...str].map(e => String.fromCharCode(e.charCodeAt() + Math.floor(Math.random() * 25))).join('');
    })
}