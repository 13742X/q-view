m1,Versions,orphan
{{{m1}}}[[
# Versions

Latest (June 2023)
**0.0.2.5:**
* new blobber page to convert files to base64 for purposes of encryption
* updated bug where encrypted file was not stored in localstorage
* controls on filename and password for files
* extension options link in settings
* burger menu misbehaving fixed
* on decryption an icon (unlocked padlock) appears in Settings next to the file
* removal of rogue starting " in encrypted files
* editor removed from settings now replaces sandbox in new tab
* editor has floating toolbar to apply basic markdown syntax
* menu.csv depreciated - menu must be in main file
* on tag creation, copy public key or copy full https://
* url shortener - uses server so security considerations required
* CSP control over rogue iframe activities
* Markdown-it 13.0.1 does not parse SVGs so hack code to do this as base64 (see https://youtrack.jetbrains.com/issue/JT-70691)
* Markdown-it-plus removes plugin dependency - sub, sup, mark, typography, emojis
* use of common highlights.js for code formatting
* options.html dislays the version of the markdown-it used
* print button (ideally for pdf printing) in Settings
* hide certain divs on page load to stop flashing
* help button moved to Settings to avoid clutter
* on creating url shortener, set expiry time. Default is 5 minutes

**0.0.2.4:**
* markdown allows for embedded videos including iframe YouTube
* improved views dropdown
* examples accessible from the Help
* menu fast navigation
* mobile friendly PWA if required

**0.0.2.3:**
* Options now opens in own tab
* Default style sheet now applied on first use
* Toggle scrollbar (off by default)
* Depreciated reload to a view icon
* Switch between CRX and WWW / Tab view different style sheets
* Examples in Help.md points to GitHub Examples repo
* New File button for creating new files
* File names (used in local storage) can be changed on the page before saving
* Settings has scrolling menu
* Refresh Editor to default
* Text encoding for new files
* Darkmode bug fixed so works on page reload
* Hide Expand icon if in a Tab
* Text clicked toggles a yellow highlight
* All *.MD and *.CSV are assumed to be in Uppercase
* Rebrand to Q-VIEWER with demo site at https://app.q-viewer.com

**0.0.2.2:**
* Css colors split into own selectors
* Dark mode in Settings
* Select inside stylesheets for preloaded or enter own
* Markdown css updates
* Search box to highlight key words in the main body
* Enhanced help documentation - getting started
* New tool bar with 5 selections
* Options and sandbox have return home icons
* KPIs - word and sentence count plus reading time
* Competitor comparison table

**0.0.2.0:**

Major changes:
* Use of CommonMark standards v13 (MIT)
* Sandbox to experiment with the syntax
* After file edit can input Cloudinary parameters, upload and view new link
* View Cloudinary upload links, click on links to view files and delete local link 

Minor changes:
* Depreciation of existing markdown -> html js (simple and very small so may keep)
* Hide editor on andriod and ios (not functional)
* Close menu by default if reload is on a mobile
* Remove name from local storage if not saved as a package
* Spinner while pages loads

**0.0.1.0:**
* Files are saved locally into indexeddb
* Can delete each entry stored locally
* Can view a list of packages
* Link shortcuts dropdown on the icon bar

**0.0.0.5:**
* Settings in order of processing
* Package names now called tags
* markdown1.css and markdown2.css updates

**0.0.0.4:**
* Burger css change
* Reload js icon fixed
* Password split into two fields
* Notification if file is not decrypted (missing or incorrect private key)

**0.0.0.3:**
* Stylesheet changes in using crx or website
* icons with text moved to bottom

**0.0.0.2:**
* Can view a logo associated with the markdown. 
* Draggable text area. 
* Save as a public key (for communicating with others)
* Import public key and view files
* History of parameterized views stored and viewed in Settings. 

**0.0.0.1**
* Chrome Extension
* Expandable to full screen
* Can view and click menus - 2 levels. 
* View markdown as html or plain text under Settings. 
* Banner icons  - Refresh ; Help (opens hardcoded help files) ; Expand ; Settings. 
* Settings can crud the markdown, menus and logo locations. 
* Default logo. 
* Encrypted markdown password crud in Settings. 
* Url can have 4 parameters - a, b, c, d where a is name; b is markdown location; c is menu location; d is the logo location. 
* Options shows compatible file locations.











]]