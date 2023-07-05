Markdown Viewer
---------------
d-markdown-app
13742.x

May 2023 

# Purpose

Opens and parses a markdown file. This enables a 2 column "help" app to be delivered. Each group indexed by header is opened and closed depending on the menu index selected. 

# Functionality

Read the HELP.MD.  

# Markdown

There are a number of standards and commonly used protocols. This uses CommonMark. There are a number of limitations (e.g support for iframes or grouping) and bugs (e.g SVG files not parsed properly) so we have created a *-plus.js enhancement..

HTML in Markdown documents will pass as is, unless enclosed into inline or multiline preformatted blocks, in which case it will be escaped appropriately.

For grouping and wrapping text into a Div container, we also use this {id}[text] where the id maps to the Index.

# Setup

1 file needed. The markdown file. The raw id of the menus is used by the js to find the id in the markdown with a "t" appended e.g menu id=welcome and markdown id=twelcome. These are auto created: { { autonumber, menu item, orphan | parent | child}}

On Windows devices the mime type .md text/plain may have to be added to IIS, otherwise it will not be served and a 404 error will appear.

# CORS

Many cloud services or data stores have implemented CORS policies which means files cannot be fetched without error, for example Google drive, unless api's are created and monitored. Cloudinary, Dropbox, Goolgle workspace and most CDNs are CORS free. The other alternative is to use jsdelivr which serves files from GitHub CORS free.

# Deployment

Deployment from the development instance. Update the manifest to the latest version. Remove all test files from ./files/. Note the main styles.css is not minimized as minify in Visual Code strips out scrollbar css. Add script to html page and remove dev scripts.


# References

[Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/) 

[ChatGpt](https://openai.com)

[StackOverflow](https://stackoverflow.com)
