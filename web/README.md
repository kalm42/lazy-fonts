# Pages

- Home
- Font Specific Details
- Terms
- Privacy
- Login
- Reset Password
- Current Account Details
- Register
- Upgrade Account

# Home

List out a subset of fonts available. Describe what Lazy Fonts is and why one
should use it.

## Functionality

- Search fonts
- Change lorem ipsum for the fonts
- Change font size
- Change font color
- Toggle view between list or grid
- Filter fonts by
  - categories
    - serif
    - sans serif
    - display
    - handwritting
    - monospace
  - font properties
    - number of styles
    - thickness
    - slant
    - width
- For each returned font
  - Change text display to
    - Sentence
    - Paragraph
    - Alphabet
    - Numerals
    - Custom
  - Change font size
  - Change font weight
  - Link to font details page
  - Add font to collection
- How to use fonts in collection
  - Embed
    - Standard
    ```html
    <link
      href="https://fonts.googleapis.com/css?family=Jomolhari&display=swap"
      rel="stylesheet"
    />
    ```
    - @IMPORT
    ```css
    <style>
      @import url('https://fonts.googleapis.com/css?family=Jomolhari&display=swap');
    </style>
    ```
  - How to use it in css
  ```css
  font-family: 'Jomolhari', serif;
  ```
  - Download the files
  - Link to page showing your current collection (for sharing)

### Font Data API Request Requirements

Requests to the backend to get a list of the fonts available. We need the
following information for each font.

- Name of the font
- number of styles the font has
- who made the font
- the css font-family name
- the taxonemy of the font (serif, san-serif, display ...)

# Font Specific Details

Shows details on the chosen font.

- Name
- Glyph
- Characters
- Styles
- Popular Combos
- Designer
- About
