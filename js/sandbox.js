function convertToHtml() {
    const markdownText = document.getElementById('markdownInput').value;

    const md = new window.markdownit();

    const convertedHtml = md.render(markdownText);

    const regex1 = /\{\{([^}{]+)}}\s*\[\[([^\§]+?)\]\]/g;
    const regex2 = /\{\{\{([^}{]+)}}}\s*\[\[([^\§]+?)\]\]/g;
    const regex3 = /<img\b(.*?)>/g;

    const html = convertedHtml
      .replace(regex1, '<div id="t$1" class="hideme">$2</div>')
      .replace(regex2, '<div id="t$1" class="showme">$2</div>')
      .replace(regex3, '<img $1 class="responsive-image">');

    document.getElementById('htmlOutput').innerHTML = html;
   // console.log(html);
  }
  const textarea = document.getElementById('markdownInput');

  textarea.addEventListener('keyup', function(event) {
    // Call your function here
    convertToHtml();
 
    textarea.style.height = "auto"; // Reset height to auto
    textarea.style.height = textarea.scrollHeight + "px"; // Set height to scrollHeight

});

/////////////
fetch('sandbox.txt')
  .then(response => response.text())
  .then(data => {
    // Store the text file contents in a variable
    var textFileContents = data.replace(/\r\n/g, '\n');

document.getElementById("markdownInput").value =  textFileContents;
    // console.log(textFileContents);
    // Additional logic...
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });