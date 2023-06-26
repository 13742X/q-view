/////////
// initialize
/////////
document.getElementById("cloud-1-input").value = localStorage.getItem("cloud-1");
document.getElementById("cloud-2-input").value = localStorage.getItem("cloud-2");
document.getElementById("cloud-3-input").value = localStorage.getItem("cloud-3");
// Populate the text area with the stored value from localStorage
window.addEventListener('load', function() {
  const savedText = localStorage.getItem('tempText');
  if (savedText) {
    markdownInput.innerText = savedText;
  }
  convertToHtml();
})


///////////////////
// add example markdown
///////////////////
function populateMe(fileName){
fetch(fileName)
  .then(response => response.text())
  .then(data => {
    // Store the text file contents in a variable
    var textFileContents = data.replace(/\r\n/g, '\n');
    document.getElementById("markdownInput").innerText ="";
    document.getElementById("markdownInput").innerText =  textFileContents;
  //  console.log(textFileContents);
    // Additional logic...
  })
  .then(data => {
   // render the HTML
   convertToHtml();
    
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
}

///toggle white space
const toggleButton = document.getElementById('toggle');
const myTextbox = document.getElementById('markdownInput');
const wrapped = document.getElementById("wrapped");
const unwrapped = document.getElementById("unwrapped");

toggleButton.addEventListener('click', () => {
  myTextbox.classList.toggle('nowrap');

  if (wrapped.classList.contains("hide")) {
    wrapped.classList.remove("hide");
    unwrapped.classList.add("hide");
  } else {
    wrapped.classList.add("hide");
    unwrapped.classList.remove("hide");
  }
});

///////

// add templates
////////////////////////////////////////////////////////////
function showEditor(){
  document.getElementById("container-editor").classList.add("show");
  document.getElementById("container-editor").classList.remove("hide");
  document.getElementById("container-blobber").classList.add("hide");
}

const reloadButton = document.getElementById("relode");
reloadButton.addEventListener("click", async () => {
  showEditor();
document.getElementById("markdownInput").innerText="";
document.getElementById("htmlOutput").innerText="";
});

const sampleButton = document.getElementById("sample-button");
sampleButton.addEventListener("click", async () => {
  showEditor();
  populateMe("sandbox.txt");
});

const templateButton = document.getElementById("template-button");
templateButton.addEventListener("click", async () => {
  showEditor();
  populateMe("template.txt");
});

const mediaButton = document.getElementById("media-button");
mediaButton.addEventListener("click", async () => {
  showEditor();
  populateMe("media.txt");
});

const blobberButton = document.getElementById("blobber-button");
blobberButton.addEventListener("click", async () => {
  console.log("blobber button clicked");
  document.getElementById("container-editor").classList.add("hide");

  document.getElementById("container-blobber").classList.remove("hide");
  document.getElementById("container-blobber").classList.add("show");

  document.getElementById("the-drop-area").classList.remove("hide");
  document.getElementById("the-drop-area").classList.add("show");
});

/////////////////////////////////////////////////
// make toolbar
/////////////////////////////////////////////////
    // Get references to the toolbar and buttons
    const toolbar = document.getElementById('floating-toolbar');
    const boldButton = document.getElementById('bold-button');
    const italicButton = document.getElementById('italic-button');
    const h1Button = document.getElementById('h1-button');
    const h2Button = document.getElementById('h2-button');
    const listButton = document.getElementById('list-button');
    const sublistButton = document.getElementById('sublist-button');
    const hrButton = document.getElementById('hr-button');
    const content = document.getElementById('markdownInput');

    // Function to handle the selection and show/hide the toolbar
    function handleSelection(event) {
        const selectedText = window.getSelection().toString().trim();
        const contentText = content.textContent.trim();
      
        // Check if there is any selected text, it belongs to the content div, and not triggered by a click within the toolbar itself
        if (selectedText !== '' && contentText.includes(selectedText) && !toolbar.contains(event.target)) {
        
        // Get the selection range
        const range = window.getSelection().getRangeAt(0);

        // Calculate the position for the toolbar
        const boundingRect = range.getBoundingClientRect();
        const top = boundingRect.top - toolbar.offsetHeight;
        const left = Math.max(0, (boundingRect.left + boundingRect.right - toolbar.offsetWidth) / 2);
        const right = Math.min(window.innerWidth - toolbar.offsetWidth, left);

        toolbar.style.top = `${top}px`;
        toolbar.style.left = `${left}px`;
        toolbar.style.right = `${right}px`;

        // Show the toolbar
        toolbar.style.display = 'block';

        // Check if the selected text already has the formatting
        const isBold = range.toString().startsWith('**') && range.toString().endsWith('**');
        const isItalic = range.toString().startsWith('_') && range.toString().endsWith('_');

        // Update the button states based on the formatting
        boldButton.classList.toggle('active', isBold);
        italicButton.classList.toggle('active', isItalic);
      } else {
        // Hide the toolbar if no text is selected
        toolbar.style.display = 'none';
      }
    }

    // Function to apply or remove bold formatting
    function toggleBold() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const isBold = range.toString().startsWith('**') && range.toString().endsWith('**');

      if (isBold) {
        const modifiedText = range.toString().replace(/\*\*/g, '');
        range.deleteContents();
        range.insertNode(document.createTextNode(modifiedText));
      } else {
        const modifiedText = `**${range.toString()}**`;
        range.deleteContents();
        range.insertNode(document.createTextNode(modifiedText));
      }

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Function to apply or remove italic formatting
    function toggleItalic() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const isItalic = range.toString().startsWith('_') && range.toString().endsWith('_');

      if (isItalic) {
        const modifiedText = range.toString().replace(/_/g, '');
        range.deleteContents();
        range.insertNode(document.createTextNode(modifiedText));
      } else {
        const modifiedText = `_${range.toString()}_`;
        range.deleteContents();
        range.insertNode(document.createTextNode(modifiedText));
      }

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Function to add H1 heading
    function addH1Heading() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      const modifiedText = `# ${selectedText}\n`;

      range.deleteContents();
      range.insertNode(document.createTextNode(modifiedText));

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Function to add H2 heading
    function addH2Heading() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      const modifiedText = `## ${selectedText}\n`;

      range.deleteContents();
      range.insertNode(document.createTextNode(modifiedText));

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Function to add a list item
    function addList() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      const modifiedText = `+ ${selectedText}\n`;

      range.deleteContents();
      range.insertNode(document.createTextNode(modifiedText));

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Function to add a sublist item
    function addSublist() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      const modifiedText = `  + ${selectedText}\n`;

      range.deleteContents();
      range.insertNode(document.createTextNode(modifiedText));

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Function to add an HR (horizontal rule)
    function addHR() {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();

      const modifiedText = `---\n`;

      range.deleteContents();
      range.insertNode(document.createTextNode(modifiedText));

      selection.removeAllRanges();
      selection.addRange(range);

      handleSelection(); // Update the button states
    }

    // Add event listeners
    content.addEventListener('mouseup', handleSelection);
    document.addEventListener('keyup', handleSelection);
    boldButton.addEventListener('click', toggleBold);
    italicButton.addEventListener('click', toggleItalic);
    h1Button.addEventListener('click', addH1Heading);
    h2Button.addEventListener('click', addH2Heading);
    listButton.addEventListener('click', addList);
    sublistButton.addEventListener('click', addSublist);
    hrButton.addEventListener('click', addHR);
 

/////////////////////////////////////////////////
// convert markdown to html
/////////////////////////////////////////////////

    // function convertToHtml() {
    //     const markdownText = document.getElementById('markdownInput').innerText;
    
    //     const md = new window.markdownit();
    
    //     const convertedHtml = md.render(markdownText);
    //  // apply extra rules
    //         // custom created by q-viewer


    //         const regex1 = /\{\{([^}{]+)}}\s*\[\[([^\§]+?)\]\]/g; // groups {{ m2 }} [[    ...   ]]
    //         const regex2 = /\{\{\{([^}{]+)}}}\s*\[\[([^\§]+?)\]\]/g; // welcome {{{ m1 }}} [[   ...    ]]
            
    //         const regex3 = /<img\b(.*?)>/g;
    //         const regex4 = /!!\[(.*?)\]\[(.*?)\]\[(.*?)\]/g; // !![moview.mp4][video/mp4][320,240]
    //         const regex5 = /!!!\[(.*?)\]\[([\d]+),([\d]+)\]/g; // !!![https://www.youtube.com/embed/ijqqJHHi4Lg][600,600]
    //         const regex6 = /\((.*?)\)\((.*?)\)\((.*?)\)/g; //  (link label)(_blank (or other target like iframe))(https://) - opens up link in new tab
    
          
    //         const html = convertedHtml
    
    //         // editor view only - hide the class nonsense
    //           .replace(regex1, '<div id="t$1" class="">$2</div>')
    //           .replace(regex2, '<div id="t$1" class="">$2</div>')

    //           // standard issue
    //           .replace(regex3, '<img $1 class="responsive-image">')
    //           .replace(regex4, '<video width="$3" height="$4" autoplay controls>\n<source src="$1" type="$2">\n</video>')
    //           .replace(regex5, '<div class="embed-container"><iframe width="$2" height="$3" src="$1" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe></div>')
    //           .replace(regex6, '<a href="$3" target="$2">$1</a>')
    // ;
            
          



    //     document.getElementById('htmlOutput').innerHTML = html;
    //    // console.log(html);
    //   }

    function convertToHtml() {
      const markdownText = document.getElementById('markdownInput').innerText;
    
      const md = new window.markdownit();
    
      const convertedHtml = md.render(markdownText);
    
      // // Apply extra rules
      // const regex1 = /\{\{([^}{]+)}}\s*\[\[([^\§]+?)\]\]/g; // groups {{ m2 }} [[    ...   ]]
      // const regex2 = /\{\{\{([^}{]+)}}}\s*\[\[([^\§]+?)\]\]/g; // welcome {{{ m1 }}} [[   ...    ]]
      // const regex3 = /<img\b(.*?)>/g;
      // const regex4 = /!!\[(.*?)\]\[(.*?)\]\[(.*?)\]/g; // !![moview.mp4][video/mp4][320,240]
      // const regex5 = /!!!\[(.*?)\]\[([\d]+),([\d]+)\]/g; // !!![https://www.youtube.com/embed/ijqqJHHi4Lg][600,600]
      // const regex6 = /\((.*?)\)\((.*?)\)\((.*?)\)/g; //  (link label)(_blank (or other target like iframe))(https://) - opens up link in new tab
      // const regex7 = /!\[(.*?)\]\(data:image\/svg\+xml;base64,(.*?)\)/g; // ![image_name](data:image/svg+xml;base64,...)
    
      // let html = convertedHtml
      //   // Editor view only - hide the class nonsense
      //   .replace(regex1, '<div id="t$1" class="">$2</div>')
      //   .replace(regex2, '<div id="t$1" class="">$2</div>')
    
      //   // Standard replacements
      //   .replace(regex3, '<img $1 class="responsive-image">')
      //   .replace(regex4, '<video width="$3" height="$4" autoplay controls>\n<source src="$1" type="$2">\n</video>')
      //   .replace(regex5, '<div class="embed-container"><iframe width="$2" height="$3" src="$1" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe></div>')
      //   .replace(regex6, '<a href="$3" target="$2">$1</a>')     
      //   // svg does not get parsed in markdown-it
      //   // this is a hack - it gets the non parased image and creates an <svg> <image xlink:...></svg>
      //   .replace(regex7, `<svg>\n  <image xlink:href="data:image/svg+xml;base64,$2"/>\n</svg>`)

      // ;

      html = markdownPlus(convertedHtml,"editor");

      document.getElementById('htmlOutput').innerHTML = html;
      // console.log(html);
    }
    
    
// function convertToHtml() {
//   const markdownText = document.getElementById('markdownInput').innerText;

//   const md = new window.markdownit();

//   const convertedHtml = md.render(markdownText);

//   // Apply extra rules
//   const regex1 = /\{\{([^}{]+)}}\s*\[\[([^\§]+?)\]\]/g; // groups {{ m2 }} [[    ...   ]]
//   const regex2 = /\{\{\{([^}{]+)}}}\s*\[\[([^\§]+?)\]\]/g; // welcome {{{ m1 }}} [[   ...    ]]
//   const regex3 = /<img\b(.*?)>/g;
//   const regex4 = /!!\[(.*?)\]\[(.*?)\]\[(.*?)\]/g; // !![moview.mp4][video/mp4][320,240]
//   const regex5 = /!!!\[(.*?)\]\[([\d]+),([\d]+)\]/g; // !!![https://www.youtube.com/embed/ijqqJHHi4Lg][600,600]
//   const regex6 = /\((.*?)\)\((.*?)\)\((.*?)\)/g; //  (link label)(_blank (or other target like iframe))(https://) - opens up link in new tab
//   const regex7 = /!\[(.*?)\]\(data:image\/svg\+xml;(.*?)\)/g; // ![image_name](data:image/svg+xml;...)

//   const html = convertedHtml
//     // Editor view only - hide the class nonsense
//     .replace(regex1, '<div id="t$1" class="">$2</div>')
//     .replace(regex2, '<div id="t$1" class="">$2</div>')

//     // Standard replacements
//     .replace(regex3, '<img $1 class="responsive-image">')
//     .replace(regex4, '<video width="$3" height="$4" autoplay controls>\n<source src="$1" type="$2">\n</video>')
//     .replace(regex5, '<div class="embed-container"><iframe width="$2" height="$3" src="$1" frameborder="0" allowfullscreen webkitallowfullscreen msallowfullscreen></iframe></div>')
//     .replace(regex6, '<a href="$3" target="$2">$1</a>')

//     // SVG parsing
//     .replace(regex7, function(match, altText, captureGroup) {
//       const svgImage = '<svg>\n  <image xlink:href="' + captureGroup + '"/>\n</svg>';
//       return svgImage;
//     });

//   document.getElementById('htmlOutput').innerHTML = html;
//   // console.log(html);
// }

    
////////////////////////////////
     // Get the reference to the password input field
     const passwordInput = document.getElementById('editor-password');

     // Function to handle the keyup event and run encrypt()
    //  function handleKeyUp() {
   
    //    var p = document.getElementById("editor-passwprd");
    //    var d = document.getElementById("markdownText");
      
    //  //  encrypt(d,p);
    
    //  }


      const textarea = document.getElementById('markdownInput');
    
      textarea.addEventListener('keyup', function() {
        // convert to HTML
        convertToHtml();
        // encrypt if ther eis a password
        handleKeyUp();
     
        textarea.style.height = "auto"; // Reset height to auto
        textarea.style.height = textarea.scrollHeight + "px"; // Set height to scrollHeight
    
    });

////////////////////////////////
    // encrypt
////////////////////////////////

  // Add the keyup event listener to the password input field
  passwordInput.addEventListener('keyup', handleKeyUp);

//   // Function to encrypt the password (replace with your actual implementation)
//   function encrypt() {
//     // Get the password value from the input field
//     const password = passwordInput.value;

//     // Run your encryption logic here
//     // Replace this console.log statement with your actual encryption code
//     console.log(`Encrypting password: ${password}`);
//   }

/////////////////////////////////////////////////
// encrypt
/////////////////////////////////////////////////

  const buff_to_base64 = (buff) => btoa(String.fromCharCode.apply(null, buff));
const base64_to_buf = (b64) =>
    Uint8Array.from(atob(b64), (c) => c.charCodeAt(null));
const enc = new TextEncoder();
const dec = new TextDecoder();

async function encrypt(data,password) {
 // console.log(data+password);
    const encryptedData = await encryptData(data, password); // b64 the encrypted data
   // console.log("encrypyted data: "+encryptedData);
    document.getElementById('encryptedText').innerText = encryptedData;
    localStorage.setItem("tempTexte",encryptedData);
    // proof of encryption
    //  const decryptedData = await decryptData(encryptedData, password); // de-b64 to reveal the encrypted data
    //   console.log("decrypted data: "+ decryptedData);

    return encryptedData;

}

const getPasswordKey = (password) =>
    window.crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, [
        "deriveKey",
    ]);
const deriveKey = (passwordKey, salt, keyUsage) =>
    window.crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: salt,
            iterations: 250000,
            hash: "SHA-256",
        },
        passwordKey,
        { name: "AES-GCM", length: 256 },
        false,
        keyUsage
    );
async function encryptData(secretData, password) {
    try {
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        const passwordKey = await getPasswordKey(password);
        const aesKey = await deriveKey(passwordKey, salt, ["encrypt"]);
        const encryptedContent = await window.crypto.subtle.encrypt(
            {
                name: "AES-GCM",
                iv: iv,
            },
            aesKey,
            enc.encode(secretData)
        );
        const encryptedContentArr = new Uint8Array(encryptedContent);
        let buff = new Uint8Array(
            salt.byteLength + iv.byteLength + encryptedContentArr.byteLength
        );
        buff.set(salt, 0);
        buff.set(iv, salt.byteLength);
        buff.set(encryptedContentArr, salt.byteLength + iv.byteLength);
        const base64Buff = buff_to_base64(buff);
        return base64Buff;
    } catch (e) {
       // console.log(`Error - ${e}`);
        return "";
    }
}

/////////////////////////////////////////////////
// event handelr to run the encryption
/////////////////////////////////////////////////

 
  // Function to handle the keyup event and run encrypt()
  function handleKeyUp() {
 var passwordEntered = document.getElementById('editor-password').value;
 var markdownEntered = document.getElementById('markdownInput').innerText;

 encrypt(markdownEntered, passwordEntered);
 localStorage.setItem("tempText",markdownEntered)
 


  }

  // Add the keyup event listener to the password input field
  passwordInput.addEventListener('keyup', handleKeyUp);
  ///////////
  function togglePasswordVisibility(eyeElement, passwordElement) {
    eyeElement.addEventListener("click", () => {
      const type = passwordElement.getAttribute("type") === "password" ? "text" : "password";
      passwordElement.setAttribute("type", type);
      eyeElement.classList.toggle("open");
    });
  }
  
  togglePasswordVisibility(document.getElementById("e1"), document.querySelector("#editor-password"));
  
/////////////////////////////////////////////////
////copy buttons
/////////////////////////////////////////////////
const copyenrypted = document.getElementById("copy-encrypted");
copyenrypted.addEventListener("click", async () => {
var myTextarea = document.getElementById("encryptedText");
    await navigator.clipboard.writeText(myTextarea.innerHTML); 

    copyenrypted.textContent = 'DATA COPIED!'; // Change button text to "Copied!"
        setTimeout(function() {
          copyenrypted.textContent = 'COPY ENCRYPTED'; // Revert back to the original button text
        }, 2000); // Revert after 2 seconds
        copyenrypted.focus(); // Maintain focus on the button after copying




});





const copymarkdown = document.getElementById("small-copy-button");
const coppy = document.getElementById("coppy");
copymarkdown.addEventListener("click", async () => {
var myTextarea = document.getElementById("markdownInput");
    await navigator.clipboard.writeText(myTextarea.innerText); 
    coppy.innerHTML = '<img src="./images/check.svg" /><span class="tooltip">Copied!</span>'; // Change button text to "Copied!"
    console.log("copied!");
    setTimeout(function() {
      console.log("revert");
      coppy.innerHTML = '<img src="./images/copy.svg" /><span class="tooltip">Copy</span>'; // Revert back to the original button text
    }, 1000); // Revert after 2 seconds
    copymarkdown.focus(); // Maintain focus on the button after copying




});



/////
// paste
/////


// Get a reference to the button
const poppyButton = document.getElementById("poppy");

// Add a click event listener to the button
poppyButton.addEventListener("click", () => {
  // Access the clipboard data
  navigator.clipboard.readText()
    .then(pastedText => {
      // Set the pasted text as the innerHTML of the target <div>
      document.getElementById("markdownInput").innerHTML = pastedText;
    })
    .catch(error => {
      console.error('Failed to read clipboard contents: ', error);
    });
});





/////

//////////////////////////////////////////////
// build database
//////////////////////////////////////////////
// (c) CHATGPT - 3.5
// CREATE INDEXEDDB IF DOES NOT EXIST
function createIDB(){
  let request = indexedDB.open("systemm");
  
  // Handle the onerror event
  request.onerror = function(event) {
    console.log("Database error: " + event.target.errorCode);
  };
  
  // Handle the onupgradeneeded event (only called if the database doesn't exist)
  request.onupgradeneeded = function(event) {
    let db = event.target.result;
  
    // Create an object store called "records"
    let objectStore = db.createObjectStore("records", { keyPath: "id", autoIncrement: true });
  
    // Define the structure of the record
    objectStore.createIndex("id", "id", { unique: true });
    objectStore.createIndex("theindex", "theindex", { unique: true });
    objectStore.createIndex("thetext", "thetext", { unique: false });
   
  };
  }
  
  createIDB()
  
  // open database
  async function openDatabase() {
    return new Promise((resolve, reject) => {
      const dbOpenRequest = indexedDB.open('systemm', 1);
  
      dbOpenRequest.onerror = function(event) {
        reject(`Failed to open database: ${event.target.errorCode}`);
      };
  
      dbOpenRequest.onupgradeneeded = function(event) {
        const db = event.target.result;
        const objectStore = db.createObjectStore('records', { keyPath: 'id' });
        objectStore.createIndex('id', 'id', { unique: true });
        objectStore.createIndex("theindex", "theindex", { unique: true });
        objectStore.createIndex("thetext", "thetext", { unique: false });
      };
  
      dbOpenRequest.onsuccess = function(event) {
        const db = event.target.result;
        resolve(db);
      };
    });
  }
  
  
  // ADD RECORDS TO INDEXEDDB
  async function dbit(xhash, xall  ){
  let request = indexedDB.open("systemm");
 // console.log("xhash" + xhash); // file name
 // console.log("xall" + xall); // text
  // Handle the onerror event
  
  // if doesnt exist repeat the same error trap as above
  request.onerror = function(event) {
    console.log("Database error: " + event.target.errorCode);
  };
  
  // Handle the onupgradeneeded event (only called if the database doesn't exist)
  request.onupgradeneeded = function(event) {
    let db = event.target.result;
  
    // Create an object store called "records"
    let objectStore = db.createObjectStore("records", { keyPath: "id", autoIncrement: true });
  
     // Define the structure of the record
     objectStore.createIndex("id", "id", { unique: true });
     objectStore.createIndex("theindex", "theindex", { unique: true });
     objectStore.createIndex("thetext", "thetext", { unique: false });
  
  };
  
  // Handle the onsuccess event (called after the database has been opened)
  request.onsuccess = function(event) {
    let db = event.target.result;
  
    // Start a transaction
    let transaction = db.transaction(["records"], "readwrite");
  
    // Get the object store
    let objectStore = transaction.objectStore("records");
  
  
    // Define the data for the record
    let record = {
      theindex:xhash,
      thetext: xall,
  
    };
  
    // Add the record to the object store
    let request = objectStore.add(record);
  
    // Handle the onsuccess event (called after the record has been added)
    request.onsuccess = function(event) {
   //   console.log("Record added to database.");
     
    };
  
    // Handle the onerror event
    request.onerror = function(event) {
      console.log("Error adding record to database: " + event.target.errorCode);
    };
  
    // Close the transaction when it's done
    transaction.oncomplete = function(event) {
      db.close();
    };
  };
  }
  
  
  async function getRecords() {
    const db = await openDatabase();
    const transaction = db.transaction('records', 'readonly');
    const objectStore = transaction.objectStore('records');
    const index = objectStore.index('id');
  
    const records = await new Promise((resolve, reject) => {
      const request = index.getAll();
  
      request.onerror = function(event) {
        reject(`Failed to get records: ${event.target.errorCode}`);
      };
  
      request.onsuccess = function(event) {
        resolve(event.target.result);
      };
    });
  
    return records;
  }
  
  // async function displayRecords() {
  //   const records = await getRecords();
  //   const outputDiv = document.getElementById('output');
  //   outputDiv.innerHTML = '';
  
  //   records.forEach((record) => {
  //     const details = document.createElement('details');
  //     const summary = document.createElement('summary');
  //     const deleteButton = document.createElement('button');
  
  //     summary.textContent = record.theindex;
  //     deleteButton.textContent = 'DELETE';
  
  //     deleteButton.addEventListener('click', async () => {
  //       const db = await openDatabase();
  //       const transaction = db.transaction('records', 'readwrite');
  //       const objectStore = transaction.objectStore('records');
  
  //       objectStore.delete(record.id);
  
  //       transaction.oncomplete = function() {
  //         displayRecords();
  //       };
  //     });
  
  //     const textDiv = document.createElement('div');
  //     textDiv.textContent = record.thetext;
  
  //     textDiv.classList.add('file-list-local');
  //     deleteButton.classList.add('del-boy');
      
  //     details.appendChild(summary);
  //     details.appendChild(deleteButton);
  //     details.appendChild(textDiv);
  //     outputDiv.appendChild(details);
  
  //     // Add class "d-f" to the output element
  //     details.classList.add('d-f');
    
  
  //   });
  // }
  
  async function displayRecords() {
  
    const records = await getRecords();
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    records.forEach((record) => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      const deleteButton = document.createElement('button');
  
      summary.textContent = record.theindex;
      deleteButton.textContent = 'DELETE';
  
      deleteButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent default link/button click behavior
      
        const db = await openDatabase();
        const transaction = db.transaction('records', 'readwrite');
        const objectStore = transaction.objectStore('records');
      
        objectStore.delete(record.id);
      
        transaction.oncomplete = function () {
          displayRecords();
          deleteButton.focus(); // Set focus back to the delete button
        };
  
      });
  
      const textDiv = document.createElement('div');
      textDiv.textContent = record.thetext;
  
      textDiv.classList.add('file-list-local');
      deleteButton.classList.add('del-boy');
      deleteButton.classList.add('background-color-two');
  
      details.appendChild(summary);
      details.appendChild(deleteButton);
      details.appendChild(textDiv);
      outputDiv.appendChild(details);
  
      // Add class "d-f" to the output element
      details.classList.add('d-f');
  
      // Set focus on the details element after adding it to the DOM
      details.focus();
    });
  }
  
  
  displayRecords();
  
///////////////////////////////////////////////////
//Cloud list library folder cloudinary
///////////////////////////////////////////////////
// if encrypted checkbox is checked show password div
// JavaScript code to show/hide the div based on checkbox click
const checkbox2 = document.getElementById('cloudme');

checkbox2.addEventListener('click', function() {
  if (this.checked) {
    document.getElementById("cloud-container").classList.remove("hide");
    document.getElementById("cloud-container").classList.add("show");
  //  console.log("me");
  } else {
    document.getElementById("cloud-container").classList.add("hide");
    document.getElementById("cloud-container").classList.remove("show");
  }
});

function cloudList() {
  // Retrieve all keys from local storage
  var keys = Object.keys(localStorage);

  // Filter the keys starting with "cloudinary"
  var cloudinaryKeys = keys.filter(function(key) {
    return key.startsWith("cloudinary");
  });

  // Function to convert Unix timestamp to formatted date
  function formatDate(unixTimestamp) {
    var date = new Date(unixTimestamp * 1000);
    var formattedDate = date.toISOString().slice(0, 19).replace("T", " ");
    return formattedDate;
  }

  // Generate an array of objects for sorting
  var fileList = cloudinaryKeys.map(function(key) {
    var keyParts = key.split(",");
    var fName = keyParts[2];
    var jsonData = localStorage.getItem(key);
    try {
      var data = JSON.parse(jsonData);
      var loc = data.loc;
      var unixDate = parseInt(keyParts[1]);
      var formattedDate = formatDate(unixDate);
      return {
        filename: fName,
        date: formattedDate,
        location: loc,
        key: key // Store the key for deletion
      };
    } catch (error) {
      console.log('Error parsing JSON for key:', key, error);
      return null;
    }
  });

  // Remove any null objects from the list
  fileList = fileList.filter(function(file) {
    return file !== null;
  });

  // Sort the file list by the filename
  fileList.sort(function(a, b) {
    var filenameA = a.filename;
    var filenameB = b.filename;
    return filenameA.localeCompare(filenameB);
  });

  // Generate HTML code for the div
  var div = document.getElementById('cloud-list');
  div.innerHTML = '';

  for (var i = 0; i < fileList.length; i++) {
    var file = fileList[i];
    var fName = file.filename;
    var formattedDate = file.date;
    var loc = file.location;
    var key = file.key; // Retrieve the key for deletion

    var wrapper = document.createElement('div');
    wrapper.classList.add('file-wrapper');

    var link = document.createElement('a');
    link.href = loc;
    link.textContent = fName + ' - ' + formattedDate;

    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE LINK';
    deleteButton.classList.add('del-boy');
    deleteButton.classList.add('background-color-two');
    deleteButton.addEventListener('click', createDeleteHandler(key));

    var copyButton = document.createElement('button');
    copyButton.textContent = 'COPY LINK';
    copyButton.classList.add('del-boy');
    copyButton.classList.add('background-color-two');
    copyButton.addEventListener('click', createCopyHandler(link));

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(copyButton);

    wrapper.appendChild(link);
    wrapper.appendChild(buttonContainer);

    div.appendChild(wrapper);
  }

  // Function to delete the item from local storage
  function deleteFile(key) {
    localStorage.removeItem(key);
    cloudList(); // Refresh the list after deletion
  }

  // Function to create a delete handler with the key argument captured in a closure
  function createDeleteHandler(key) {
    return function() {
      deleteFile(key);
    };
  }

  function createCopyHandler(link) {
      return function(event) {
        event.preventDefault(); // Prevent the link from navigating
        var url = link.getAttribute('href');
        copyToClipboard(url);
        var button = this; // Store reference to the button element
        button.textContent = 'LINK COPIED!'; // Change button text to "Copied!"
        setTimeout(function() {
          button.textContent = 'COPY LINK'; // Revert back to the original button text
        }, 2000); // Revert after 2 seconds
        button.focus(); // Maintain focus on the button after copying
      };
    }
    

  // Function to copy the text to the clipboard
  function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}

// create cloud lists
cloudList();
///////////////////////////////////////////////////
// cloudinary event listeners handler
///////////////////////////////////////////////////
document.getElementById("cloud-1").addEventListener("keyup", functionc1);
    function functionc1() {
      var a = document.getElementById("cloud-1-input").value;
      localStorage.setItem("cloud-1",a);
    }
    document.getElementById("cloud-2").addEventListener("keyup", functionc2);
    function functionc2() {
      var a = document.getElementById("cloud-2-input").value;
      localStorage.setItem("cloud-2",a);
    }
    document.getElementById("cloud-3").addEventListener("keyup", functionc3);
    function functionc3() {
      var a = document.getElementById("cloud-3-input").value;
      localStorage.setItem("cloud-3",a);
    }

async function cloudinary(name, folder, preset, thedata, thefilename, fragno) {
  cloud_name = name,
  cloud_folder = folder,
  upload_preset = preset,
//  console.log("Cloudinary"),
  // b64 string for upload
  (str = thedata), (b64 = btoa(str)); // data
 // console.log(b64);
  const x = "data:text/plain;base64," + b64,
      formData = new FormData();
  formData.append("file", x), formData.append("upload_preset", upload_preset);
  const options = { 
      method: "POST", 
      body: formData, 
      folder: cloud_folder, 
      disallow_public_id: !0, 
      unique_filename: !1, 
      filename_override: !0, 
      use_filename: !0, 
      tags: "vu-q" + thefilename, 
      public_id: thefilename, 
      format: "text/plain" };
  return fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/raw/upload`, options)
      .then((res) => {
          if (res.status >= 200 && res.status <= 299) return res.json();
          console.log("error");
      })
      .then((data) => {
         // console.log(data);
          const y = data.secure_url;
          var newtok = '{"loc":"' + data.secure_url + '","f":"' + fragno + "\"}";
       //   console.log(newtok);
          localStorage.setItem("cloudinary," + fragno + ","+thefilename, newtok);
          // put new link on page
          document.getElementById("message").innerText = data.secure_url;
          cloudList();
      })
  //     .catch((error) => {
  // console.log("not clouded");
  //     })
      ;

}

// put l

/////////////////////////////////////////////////
// valid faile name
/////////////////////////////////////////////////
// check file names input fileinput
const filenameInput = document.getElementById('entered-file-name');

// Add event listener to the input field
filenameInput.addEventListener('input', function(event) {
  const enteredCharacter = event.data;
  const allowedPattern = /^[a-zA-Z0-9_. -]+$/;

  // Check if the entered character matches the allowed pattern
  if (!allowedPattern.test(enteredCharacter)) {
    // Remove the invalid character from the input value
    filenameInput.value = filenameInput.value.replace(enteredCharacter, '');
  }
});
/////////////////////////////////////////////////
/// create new file save as
/////////////////////////////////////////////////
function download_txt() {
  fn = document.getElementById("entered-file-name").value;
  // dont allow press
    if (fn === null || fn === "") {
      return;
    }


// get text
//var textToSave = stripHtml(document.getElementById("fileContents").innerText);
// pre converts /n to divs so must remove
// could use innerText but then loose the markdown tags that look like HTML
// check if file should be encrypted on save as

// ENCRYPT FILE IF REQUIRED

 // console.log(key);

 var textToSave = document.getElementById("encryptedText").innerText;


// raw text

//  console.log("xxxx"+textToSave);
var hiddenElement = document.createElement('a');
  // save raw text
 hiddenElement.href = 'data:text/plain,' + encodeURIComponent(textToSave);
 hiddenElement.target = '_blank';
 hiddenElement.download = document.getElementById("entered-file-name").value; // saveas original file name
 hiddenElement.click();


// save to indexeddb
// if checked
var localcheckbox = document.getElementById("localme"); // Replace "myCheckbox" with the actual ID of your checkbox element

if (localcheckbox.checked) {
 dbit(document.getElementById("entered-file-name").value, textToSave);
// refresh div area
 displayRecords();
}else{
//


// upload to cloudinary if check box checked
var checkbox = document.getElementById("cloudme"); // Replace "myCheckbox" with the actual ID of your checkbox element

if (checkbox.checked) {
var cloudVariables = [
  document.getElementById("cloud-1-input").value,
  document.getElementById("cloud-2-input").value,
  document.getElementById("cloud-3-input").value,
  //localStorage.getItem("cloud-1"), // cloud 0
  //localStorage.getItem("cloud-2"), // folder 1
  //localStorage.getItem("cloud-3"), // preset 2
  document.getElementById("entered-file-name").value, // name - 
  Math.floor(Date.now() / 1000).toString() // date 3 

];


// cloudinary(name, folder, preset, thedata, thefilename, fragno)
 cloudinary(cloudVariables[0], cloudVariables[1], cloudVariables[2], textToSave, cloudVariables[3], cloudVariables[4]);
}else{

}
}}

// click the SAVE-AS ? download button
document.getElementById('save-encrypted-to-text-file').addEventListener('click', download_txt);

