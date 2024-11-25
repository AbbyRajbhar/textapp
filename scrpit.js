function formatText(command) {
    document.execCommand(command, false, null);
    updateAnalysis(); // Update analysis after formatting
}

function clearFormatting() {
    const editor = document.getElementById('editor');
    editor.innerHTML = editor.innerText; // This will strip all formatting
    updateAnalysis(); // Update analysis after clearing formatting
}

function convertText(format) {
    const editor = document.getElementById('editor');
    let text = editor.innerText.trim();
    
    if (text === "") return;

    let convertedText;
    switch (format) {
        case 'camelCase':
            convertedText = text.replace(/\s(.)/g, (match) => match.toUpperCase())
                                 .replace(/\s/g, '')
                                 .replace(/^(.)/, (match) => match.toLowerCase());
            break;
        case 'snake_case':
            convertedText = text.replace(/\s+/g, '_').toLowerCase();
            break;
        case 'PascalCase':
            convertedText = text.replace(/\s(.)/g, (match) => match.toUpperCase())
                                 .replace(/\s/g, '')
                                 .replace(/^(.)/, (match) => match.toUpperCase());
            break;
        default:
            return;
    }
    
    editor.innerText = convertedText; // Update editor with converted text
    updateAnalysis(); // Update analysis after conversion
}

function updateAnalysis() {
    const editor = document.getElementById('editor');
    const text = editor.innerText.trim();

    const wordCount = text ? text.split(/\s+/).length : 0;
    const charCount = text.length;
    const readingTime = Math.ceil(wordCount / 200); }// Assuming an average reading speed of 200 words per minute

    // document.getElementById('wordCount').innerText = `Word Count:
