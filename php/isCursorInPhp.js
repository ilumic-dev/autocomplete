window.phpIntellisense.isCursorInPHP = function (code, cursorPosition) {
    const { line, column } = cursorPosition;

    const lines = code.split("\n");
    let absolutePosition = 0;
    for (let i = 0; i < line - 1; i++) {
        absolutePosition += lines[i].length + 1;
    }
    absolutePosition += column;

    const phpRegex = /<\?(?:php)?|\?>/g;
    let match;
    const phpBlocks = [];

    while ((match = phpRegex.exec(code)) !== null) {
        if (match[0] === '<?php' || match[0] === '<?') {
            phpBlocks.push({ start: match.index });
        } else if (match[0] === '?>' && phpBlocks.length > 0) {
            phpBlocks[phpBlocks.length - 1].end = match.index;
        }
    }

    phpBlocks.forEach(block => {
        if (block.end === undefined) {
            block.end = code.length;
        }
    });

    return phpBlocks.some(block => block.start <= absolutePosition && absolutePosition < block.end);
};