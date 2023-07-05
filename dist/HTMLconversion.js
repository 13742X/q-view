

// this gets the markdown and turns it into HTML
// it uses the latest markdown-it js stored locally
// needs to be here about markdown code to work
// https://www.jsdelivr.com/package/npm/markdown-it
// 


    function convertToHtml(x, type) {
    //console.log(x);

        // hack where no double carriage returns in the text file
        // markdown-it cleans up excess
        // based on sentences ending .space.
         // x = x.replace(/\.\s/g, ".\r\r\r\r\r\r\r");
          // MAGIC HAPPENS HERE
        
      // marked-it options - not really used
      const options = {
                html: false,
                linkify: false,
                typographer: true,
                quotes: '“”‘’',
                breaks: false, //
                langPrefix: 'language-',
                highlight: function (code, lang) {
                  // Implement your own code highlighting logic here
                  return '<pre><code class="' + lang + '">' + code + '</code></pre>';
                }
            }
              const markdownText = x;    
              const md = new window.markdownit(options);         
              const convertedHtml = md.render(markdownText);   
          //    var html="";


              // this does the menus then the md
              html = markdownPlus(convertedHtml,type);
              // get <code></code> and add highlight.js
            
     
              // get <code></code> and add highlight.js
              html = highlightCodeStrings(html);
             // console.log(highlightedCode);

        return html;
      
        }
    
// this is used by the highlight.js 
// its a hack but creates a temp div and parses <code></code>
// sends it back to convertToHTML
function highlightCodeStrings(codeString) {
  var tempElement = document.createElement('div');
  tempElement.innerHTML = codeString;

  // Find all code blocks within the temporary element
  var codeBlocks = tempElement.querySelectorAll('pre code');

  // Apply syntax highlighting to each code block
  codeBlocks.forEach(function(codeBlock) {
    hljs.highlightElement(codeBlock);
  });

  // Get the highlighted HTML
  var highlightedCode = tempElement.innerHTML;

  return highlightedCode;
}












        // html:         false,        // Enable HTML tags in source
        // xhtmlOut:     false,        // Use '/' to close single tags (<br />).
        //                             // This is only for full CommonMark compatibility.
        // breaks:       false,        // Convert '\n' in paragraphs into <br>
        // langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
        //                             // useful for external highlighters.
        // linkify:      false,        // Autoconvert URL-like text to links
      
        // // Enable some language-neutral replacement + quotes beautification
        // // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
        // typographer:  false,
      
        // // Double + single quotes replacement pairs, when typographer enabled,
        // // and smartquotes on. Could be either a String or an Array.
        // //
        // // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        // quotes: '“”‘’',
      
        // // Highlighter function. Should return escaped HTML,
        // // or '' if the source string is not changed and should be escaped externally.
        // // If result starts with <pre... internal wrapper is skipped.
        // highlight: function (/*str, lang*/) { return ''; }


        // function convertToHtml(x) {

        //     const options = {
        //         html: true,
        //         linkify: true,
        //         typographer: true,
        //         quotes: '“”‘’',
        //         breaks: true,
        //         langPrefix: 'language-',
        //         highlight: function (code, lang) {
        //           // Implement your own code highlighting logic here
        //           return '<pre><code class="' + lang + '">' + code + '</code></pre>';
        //         }
        //     }

        //     const markdownText = x;
      
        //     const md = window.markdownit(options);
      
        //     const convertedHtml = md.render(markdownText);

               
        //    html = markdownPlus(convertedHtml,"main");
      
        //     return html;
        //   }
      
       










// var manifestData = chrome.runtime.getManifest();
// console.log(manifestData.version);
// console.log(manifestData.default_locale);

// original small and simple
// see active -2 
// basic - doesnt nest lists
// depreciated for now

// (function(m, libName){
// 	var esc=function(s){
// 	    s = s.replace(/\&/g, '&amp;')
// 	    var escChars = '\'#|<>`*-~_=:"![]()nt',c,l=escChars.length,i
// 	    for(i=0;i<l;i++) s=s.replace(RegExp('\\'+escChars[i], 'g'), function(m){return'&#'+m.charCodeAt(0)+';'})
// 	    return s
// 	}, rules = [
//             {p:/\r\n/g, r:'\n'},
//             {p:/\n\s*```\n([^]*?)\n\s*```\s*\n/g, r:function(m,grp){return'<pre>'+esc(grp)+'</pre>'}},
//             {p:/`(.*?)`/g, r:function(m,grp){return'<code>'+esc(grp)+'</code>'}}, // monospace
//             {p:/\n\s*(#+)(.*?)/g, r:function(m,hset,hval){m=hset.length;return'<h'+m+'>'+hval.trim()+'</h'+m+'>'}},
//             {p:/\n\s*(.*?)\n={3,}\n/g, r:'\n<h2>$1</h2>\n'}, // === h2
//             {p:/\n\s*(.*?)\n-{3,}\n/g, r:'\n<h1>$1</h1>\n'}, // --- h1
//             {p:/___(.*?)___/g, r:'<u>$1</u>'}, // underline
//             {p:/(\*\*|__)(.*?)\1/g, r:'<strong>$2</strong>'}, // bold **
//           //  {p:/(\*|_)(.*?)\1/g, r:'<em>$2</em>'},
//             {p:/~~(.*?)~~/g, r:'<del>$1</del>'}, // deleted text
//             {p:/\!\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r:'<img src="$2" alt="$1" class="responsive-image">'}, // note class added
//           //  {p:/\{([^\[]+?)\}\s*\[([^}]+)]/g, r:'<div id="t$1" class="hideme">$2</div>'}, // wraps groups - not a standard {}[]; text file must not contain [] or {}
//             {p:/\{\{([^}{]+)}}\s*\[\[([^\§]+?)\]\]/g, r:'<div id="t$1" class="hideme">$2</div>'}, // wraps groups - not a standard {{id}} [[text]] excludes §
//             {p:/\{\{\{([^}{]+)}}}\s*\[\[([^\§]+?)\]\]/g, r:'<div id="t$1" class="showme">$2</div>'}, // wraps groups - not a standard {{id}} [[text]] excludes § for Welcome
//             {p:/:"(.*?)":/g, r:'<q>$1</q>'},   // quote :" ": 
//             {p:/\[([^\[]+?)\]\s*\(([^\)]+?)\)/g, r:'<a href="$2" target="_blank">$1</a>'}, // link
//             {p:/\n\s*(\*|\-)\s*([^\n]*)/g, r:'\n<ul><li>$2</li></ul>'}, // unordered lists
//          //   {p:/\n( {2}|\t)*(\*{1,8})\s*([^\n]*)($<ul>|$)/g, r:'$<$2nest$1>${3.trim()}$<ul>$4</ul>$</$2nest$1>'}, // test

//          //   {p:/^(*{1}\s+.+(\n|$)|**{1}\s+.+(\n|$)|***{1}\s+.+(\n|$))+/g, r:'\n<ul><li>$2</li></ul>'}, // unordered lists  
            
//             {p:/\n\s*\d+\.\s*([^\n]*)/g, r:'\n<ol><li>$1</li></ol>'}, // ordered lists

//             {p:/\n\s*(\>|&gt;)\s*([^\n]*)/g, r:'\n<blockquote>$2</blockquote>'}, // quotes
//             {p:/<\/(ul|ol|blockquote)>\s*<\1>/g, r: ' '}, //?? not sure how this works
//             {p:/\n\s*\_{3,}\s*\n/g, r:'\n<hr>'}, // ___ line is <hr> 
//             {p:/\n{3,}/g, r:'\n\n'}, // carriage returns
//             {p:/\n([^\n]+)\n/g, r:function(m, grp){grp=grp.trim();return /^\<\/?(ul|ol|bl|h\d|p).*/.test(grp.slice(0,9)) ? grp : ('<p>'+grp+'</p>')}},
//             {p:/>\s+</g, r:'><'} // ??
// 	], l = rules.length, i
 
// 	m[libName] = {
// 		addRule:function(ruleString, replacement) {rules.push({p:RegExp(ruleString, 'g'),r:replacement})},
// 		render:function(text) {
// 		    if(text = text || '') {
// 		    	text = '\n' + text.trim() + '\n'
// 			for(var i=0;i<l;i++) text = text.replace(rules[i].p, rules[i].r)
// 		    }
// 		    return text
// 		}
// 	}
// })(self, 'Systemm')


// use regex101 to test and chatgpt
// https://www.site24x7.com/help/markdown-cheat-sheet.html
// https://www.toptal.com/designers/htmlarrows/punctuation/left-parenthesis/ for char codes
// https://www.rapidtables.com/web/html/html-codes.html char codes


