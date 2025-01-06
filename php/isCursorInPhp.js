window.phpIntellisense.isCursorInPHP = function (code, cursorPosition) {
    const { line, column } = cursorPosition;

    const lines = code.split("\n");
    let absolutePosition = 0;
    for (let i = 0; i < line - 1; i++) {
        absolutePosition += lines[i].length + 1;
    }
    absolutePosition += column;

    const phpRegex = /<\?(?:php)?|\?>/g;
    const phpBlocks = [];
    let match;

    while ((match = phpRegex.exec(code)) !== null) {
        if (match[0] === '<?php' || match[0] === '<?') {
            phpBlocks.push({ start: match.index, end: null });
        } else if (match[0] === '?>') {
            const lastBlock = phpBlocks[phpBlocks.length - 1];
            if (lastBlock && lastBlock.end === null) {
                lastBlock.end = match.index;
            }
        }
    }

    phpBlocks.forEach(block => {
        if (block.end === null) {
            block.end = code.length + 1;
        }
    });

    for (const block of phpBlocks) {
        if (block.start <= absolutePosition && absolutePosition <= block.end) {
            return true;
        }
    }

    return false;
};