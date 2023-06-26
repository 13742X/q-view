m1,Welcome,orphan
m8,Getting started,parent
m10,Overview,child
m11,Journey,child
m12,Extension,child
m13,Navigation,child
m14,Settings,child
m7,Basics,orphan
x,How it works,parent
m2,Markdown,child
m5,Syntax,child
m3,Grouping,child
m4,Files,orphan
m6,Settings,orphan
m15,Examples,orphan
{{{m1}}}
[[
# HELP

## Overview

This is a simple text viewer with 
* a menu on the left and 
* content on the right.

It is useful for 
* Documentation
* FAQs
* Policies and Procedures
* Books
* Legal Contracts
* Help manuals
* Instruction Guides
* Training Courses etc etc.

No user logon is required.

Only one plain text files is needed for the viewer.

The plain text file can be managed in the app using Markdown notation.

Files can be encrypred using browser cryptography in the app for added security.

Public keys can be generated for other people to import and share.

Files can be stored locally or on servers (such as GitHub or Cloudinary).

Store short cut links.

Apply custom stylesheets.

Reset and delete everything back to default.

Embed static media like this:

![Help](https://res.cloudinary.com/vantacloud/image/upload/v1685222836/smm-summary.png)

!!![https://www.youtube.com/embed/ijqqJHHi4Lg][600,600]

Embed dynamic media such as movies using iframe:

!![moview.mp4][video/mp4][320,240]

Use same markdown for PDFs

!!![example.pdf][1000,1000]

...and google sheets

!!![https://docs.google.com/spreadsheets/d/e/2PACX-1vSw0jd9cRZ0vtc_F9utMXxSWtGguTn3_qu6JjWkJ_Z5UN-NOqTXU1GVCG_IKZPMD6Hi7tO4MNLT5MDp/pubhtml?widget=true&amp;headers=false][600,600]

You can also embed shared Microsoft files served on OneDrive or Sharepoint in the same way.

Here is a Google Slide show:

!!![https://docs.google.com/presentation/d/e/2PACX-1vSHolLjUrXmivHSFhb4WBS9QDB3IVLevZ3YpeuenjUfdPKApksfbqM7P60nkk0HiwaV1S2Id6DO_13h/embed?start=true&loop=true&delayms=3000][600,600]

...and a Google Doc

!!![https://docs.google.com/document/d/e/2PACX-1vQxtoq3dA9cN6-hBzor7D74lWw5DuoinJ4CSE8pIAIkwXuFALXefSQVGt0L9oEE-zsKspmjdwtfhSkO/pub?embedded=true][600,600]

...and a Google calendar

!!![https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FLondon&showTitle=0&showPrint=0&showCalendars=0&src=ZW4udWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043][1000,1000]


...and a Twitch feed (only works on a website)

!!![https://player.twitch.tv/?autoplay=false&channel=ninja&parent=app.q-viewer.com][100,100]

Here is a map:

!!![https://www.openstreetmap.org/export/embed.html?bbox=-73.98564577102663%2C40.72021732170311%2C-73.9707112312317%2C40.73212067043136&amp;layer=mapnik][600,600]


ChatGPT (when it wants too!)

!!![https://chat.openai.com/share/9116e560-16e1-4801-9dfc-39f4755afc58][600,600]

]]
{{m2}}
[[
# Markdown

Markdown is a way to format simple text files that can be converted into HTML for viewing purposes. Any text editor can be used and no coding is required. 

Alternatively, especially if the files and / or media need to be encrypted or embedded directly, the in app editor should be used. 

Markdown is a lightweight markup language that is widely used for formatting text documents. It is useful and productive because it allows users to create well-formatted documents without the need for complex formatting codes or tools. Markdown syntax is simple and easy to learn, which saves time and increases productivity. It can be used for a wide range of purposes, including writing articles, notes, documentation, and creating web pages. Additionally, markdown documents can be easily converted to various formats, such as HTML or PDF, making it a versatile resource for content creation and sharing.

These words are written and saved in a plain text file called help.md. 

The extension, MD stands for Markdown, but the file is just a plain text file. It can be written or read in any app that can process plain text files such as Notepad, Atom or TextEdit.

Markdown is popular because it can be written without knowing much, or anything, about HTML, CSS or Javascript
 
Certain words or phrases can be tagged, so that it can be regenerated into an html page.

Q-Viewer has extended the common markdown syntax with the added functionality of grouping text and indexing it with a menu. This provides a useful utility for Frequently Asked Questions, help, policy and procedures, operating manuals, books with chapters and so on.

However, the Files must on a server (with a url) or within the /files folder of this extension. Some files may be sensitive so the app allows files encrypted with a password to be viewed. When the files are viewed, the password is input (and stored locally if required).

The app can be run as standalone on a device.

Links, or permalinks, can be created to view files in the app or externally.

]]
{{m5}}
[[
## Syntax


There are a number of flavors, but we use the CommonMark specification as it is a widely used syntax standard for the Markdown markup language. 

The CommonMark specification, which defines the syntax for Markdown, was developed by a group of individuals known as the CommonMark community. It was initiated by John MacFarlane, the creator of Pandoc, and was further developed and refined through community collaboration. The goal was to establish a standard specification for Markdown that would be consistent across different implementations and provide a clear and unambiguous syntax for users. The CommonMark community worked collectively to create and maintain the specification, ensuring its openness and accessibility to all.

We have enhanced its capabilities and include embedding of videos.

# Summary
Here's a summary of the key syntax elements in the CommonMark specification:

Headers: Use hash symbols (#) at the beginning of a line to create headers. The number of hash symbols determines the header level.

Paragraphs: Separate paragraphs by leaving a blank line between them.

Emphasis: Surround text with asterisks (*) or underscores (_) to make it italic, or use double asterisks (**) or double underscores (__) for bold.

Links: Create links by enclosing the link text in square brackets ([]) and the URL or reference in parentheses (()). Optionally, you can add a title inside double quotes.

Images: Insert images using an exclamation mark (!), followed by the alt text in square brackets, and the image URL in parentheses. You can also include an optional title. See below for extended use of the ! to embed videos and iframes

Lists: Create unordered lists using hyphens (-), plus signs (+), or asterisks (*) as list markers. For ordered lists, use numbers followed by periods.

Blockquotes: Prefix a line with a greater-than sign (>) to create a blockquote. Multiple levels of nesting are possible.

Code: Surround inline code with backticks (```). For code blocks, indent the text by four spaces or a tab. You can also use triple backticks for fenced code blocks.

Horizontal Rules: Create horizontal rules using three hyphens (---), three asterisks (***), or three underscores (___) on a line by themselves.

Escaping: To display literal characters that have special meaning in Markdown, such as asterisks or backslashes, precede them with a backslash (\).

These are the fundamental syntax elements in the CommonMark specification. Different Markdown implementations may have additional features or variations, but this summary covers the core syntax that is widely supported.

Q-Viewer has some extra syntax, not included in the main protocol. These are to add extra functionality such as embedding responsive YouTube videos or grouping text.

 Videos - ! ! [moview.mp4][video/mp4][320,240]

The [320,240] represent the height and width.

 Youtube or iframe ! ! ! [https://www.youtube.com/embed/ijqqJHHi4Lg][600,600]
 
The [600,600] represent the height and width.

!!![https://chat.openai.com/share/9116e560-16e1-4801-9dfc-39f4755afc58][600,600]

]]

{{m3}}
[[
    
# How to create a group

Grouping text together and giving them an index id. 

In the text file, wrap groups like this:
{ { menu id } }
[ [ lots of text ] ]

If the first group needs to appear as the first menu item, then 
{ { { menu id } } }
[ [ lots of text ] ]

]]

{{m4}}
[[
# Working with files


1 file is required. 

In the header we insert a menu file (See below)

2. a markdown text file

If the markdown is sensitive, it should be edited in Settings and 
* the encrypted check box checked 
* a password entered

before saving the markdown file (menus cannot at present be encrypted). The file will be encrypted and encoded into base64. Unless the password is known and the cryptographic algorithm used, the file will be useless to a bad actor.

Note the password needs to present in Settings at all times. If the browser cache is hard deleted, this should be deleted too.

## menu syntax


This is a csv (comma sepeareted values) file with 3 parts [index],[title],[type].
No header is required although can be put in.

**Example**

    
    menu id,title,type // header
    menu1,Welcome,orphan 
    menu2,How it works,parent 
    menu3,Starting,child 
    menu4,Finishing,child 
    menu5,Closing thoughts,orphan

The [index] is used to open the group of text in the markdown file.

The title is the title of the menu option.

The type is orphan ; parent ; child.

This is saved at the top of the markdown file before the first '{'.

# local files

Chrome extension folders can be found by typing in chrome://version into the browser. Depending on permissions and operating system, there is an empty folder call files which can be used for markdown and csv files and accessed via Settings. However this requires a bit of effort. Files are also stored in the browsers internal database.

]]
{{m6}}
[[

# Settings


Settings have the following functions:

* View the markdown file location (server or app only due to CORS restrictions)
* Change the markdown file locations
* View and change a logo (appears in the app botttom left corner)
* Password field (with eye to view or not) to encrypt edited files
* Api key for server access (stored but not used)
* View history of shortcut links
* Click on shortcuts to view markdowns
* Create a new name for a markdown and save to history
* Delete shortcuts
* Edit a local file and Save As

The default files are these help files. 

File locations are varied but must be able to server files without CORS issues.

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. (source:Mozilla)

To serve files using GitHub as a CDN, use this URL structure: 

https://cdn.jsdelivr.net/gh/user/repo@latest/file.js.

Example is https://cdn.jsdelivr.net/gh/13742x/view-q@latest/HELP.MD

Note the file names are case sensitive. This is very fast and cached. However it is a third party so due diligence risk should be considered.

Alternatively, serve directly from GitHub.

Example is https://raw.githubusercontent.com/13742X/view-q-examples/main/niv.md

Note these files are served as Content-Type => text/plain. Fetching directly from GitHub the files served are often HTML and view-q will not read these properly, so use the 'raw' versions.

]]
{{m7}}[[
## Basics

Navigation is via the left hand menu. Each menu option views a group of paragraphs and chapters in the main body of text, the markdown file. 
The associated logo is in the bottom left hand corner. 
The menu can be opened and closed. 
The app can be refreshed - this clears any parameters in the url. 
The body of the text can be shrunk by grabbing the far right vertical line. 
This template help can be viewed clicking the ? icon.
The settings screen has a number of options.
1. Import a public key (see below as to how they are generated)
2. A password can be entered to decrypt a public key or the main markdown file
3. Description is the short name of the package generated when a link is created
4. When public keys are generated they appear here (and can be copied)
5. The main Markdown file location
6. The last date the markdown file was edited
7. Location of an associated logo if none then defaults
8. Tag links (can click to view a package or delete)
9. Link creation (need to enter a Name / Description)
10. Can select a text based file and save as.
11. Can encrypt the text based file (using password in 2 above)
12. Use the editor for 10 and 11 above

]]
{{m10}}[[
# Getting started

1. Use a text editor and create a body of text in markdown format.
2. Add the menu to the top of the file before the first curly bracket.
3. Decide where to store (Github is easiest) and save.
4. Add the file locations in the Settings.
5. Click reload to ensure files can be viewed.
6. In Settings add a tag name and create a package.
7. Copy the public key and save for future use or to send to someone else.
8. Reload and view the package in the Links dropdown.

It is very difficult to configure the extension to allow local files to be accessed. Although files can be edited and saved, they cannot be served locally. This is a "security" feature and although there are workarounds like running your own local webserver or running other extensions, this version requires the files to be stored online. In doing so it is best to encrypt them.

The way it can be achieved is for the files to be stored locally in the browser. The downside is that they cannot easily be shared but if you are the only person reading them, then it is a solution. 
]]
{{m11}}[[
# Journey

High level

* click on help icon and view help
* import a public key and view
* highlight text by clicking on it
* import a public key and private key to decrypt and view
* manually add file locations and reload to view
* create a link tag based off the manually added file locations
* view and select the links in the icon bar
* copy a generated public key based on the link tag (for importing)
* open an existing file, encrypt with a private key / password and save in a file location
* upload a file to a cloud
* store list of original file, tags and cloud links
* save a file automatically into local storage and view

]]
{{m12}}[[
## Download the extension

* Enable it be seen in the toolbar
    * Click on the jigsaw piece in top right hand corner of the browser and click on a pin to make it visible.

![extension](https://res.cloudinary.com/vantacloud/image/upload/c_scale,w_400/v1684964490/smm-3.png)
* Click and view
* Preloaded with Help
    * Loads up a default menu file and main file
    * Click on the menu items and the relevant section in the main file is shown
* Click on expand into a tab (desktop)
    * This opens up file editing features in Settings
]]
{{m13}}[[
## Navigation

* Toolbar functions
    * Links. These are the package short cuts to enable easy navigation to different packages.
    * Options. This allows all data to be cleared.
    * Editor. This demonstrates how markdown works and can be used for creating and viewing in HTML.
    * View. This reloads the app and removes any parameters in the URL.
    * Expand. Expands the extension into a tab for easier use.
    * Settings
        * Clicking this toggles the menu from visible to hidden. It also shows the Options and Sandbox icons.

* Menus and main text
    * These two files (called a package) are served by what is recorded in Settings. By default it is the Help. Further packages can be viewed if the url links have been recorded.
]]
{{m14}}[[
## Settings

* Importing a public key
    * A public key (see how they are generated below) can be pasted in and imported. If a package is saved as a tag, a public key is generated. This is can be emailed or communicated to other people who can import this public key and then view the menu and main body. If the files are encrypted, the password or private key will need to be entered into the textbox in the Credentials section.
* Credentials
    * Private key - used to unecrypt an imported public key. 
    * API key - currently not used but will provide an secondary security control.
* This
    * The main file aisre recorded here. If the links have been clicked, it will populate these text boxes. These textboxes can be entered with new url links. Click reload and the menu and main text should be viewable. If the messages say "files not loaded" then the text area text will highlight red to show the file could not be found or loaded properly. If a valid load occurs, this not be flagged in red.
    * Style sheet - there are 2 default style sheets although a style sheet url can be entered to override.
    * Logo - a logo associated with the package can be entered here. It will be a link to an image.
    * Tag - if the package has been imported then the name of the package will be here. It is used by the links dropdown.
* Packages
    * Tags - this is group of tags. Clicking on a tag will load up the package. The tag can be deleted by clicking the x.
    * Tag name
    * Public Key

* Limitation of tag characters
* Deleting tags
* Viewing tags in the dropdown called Links

]]
{{m15}}[[

Want to view some use cases?

[See Examples](?JTNGYSUzREV4YW1wbGVzJTI2YiUzRGh0dHBzJTNBJTJGJTJGcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRjEzNzQyWCUyRnZpZXctcS1leGFtcGxlcyUyRm1haW4lMkZleGFtcGxlcy5tZCUyNmMlM0RodHRwcyUzQSUyRiUyRnJhdy5naXRodWJ1c2VyY29udGVudC5jb20lMkYxMzc0MlglMkZ2aWV3LXEtZXhhbXBsZXMlMkZtYWluJTJGZXhhbXBsZXMuY3N2JTI2ZCUzRGRlZmF1bHQtbG9nby5zdmc=)
]]