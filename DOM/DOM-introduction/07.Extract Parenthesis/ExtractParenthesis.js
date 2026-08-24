function extract(elementId) {

    let element = document.getElementById(elementId);
    let pattern = /\(([^\(\)]+)\)/g;

    let matches = element.textContent.matchAll(pattern);
    let result = Array.from(matches)
        .map(el => el[1])
        .join('; ')
    return result;
    
}