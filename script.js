const mdInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

mdInput.addEventListener("input", () => {
  const converted = convertMarkdown();
  htmlOutput.innerText = converted;
  preview.innerHTML = converted;
});

function convertMarkdown() {
  let markdown = mdInput.value;

  // Escape HTML (basic security)
  markdown = markdown
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Headings
  markdown = markdown.replace(/^(#{1,6})\s+(.*)/gm, (_, level, content) => {
    return `<h${level.length}>${content}</h${level.length}>`;
  });

  // Bold
  markdown = markdown.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  markdown = markdown.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Italic (AFTER bold to avoid conflicts)
  markdown = markdown.replace(/\*(.*?)\*/g, "<em>$1</em>");
  markdown = markdown.replace(/_(.*?)_/g, "<em>$1</em>");

  // Inline code
  markdown = markdown.replace(/`(.*?)`/g, "<code>$1</code>");

  // Images
  markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  // Links
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');

  // Blockquotes
  markdown = markdown.replace(/^>\s+(.*)/gm, "<blockquote>$1</blockquote>");

  // Lists
  markdown = markdown.replace(/^\s*-\s+(.*)/gm, "<li>$1</li>");
  markdown = markdown.replace(/(<li>.*<\/li>)/gms, "<ul>$1</ul>");

  // Line breaks
  markdown = markdown.replace(/\n/g, "<br>");

  return markdown;
}