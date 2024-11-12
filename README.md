Welcome to Navigating Nature a site that provides information on national parks and mountain. Users can search and filter data on each page. This website was developed using HTML, CSS, JavaScript and Bootstrap. 

# Table of Contents

---

- Features
- Project Structure
- Getting Started
- Usage
- Functions
- Resources

# Features

---

- **Homepage-**  Highlights the organization mission and “about us” summary with link to both the National Parks Search Page and Mountains Page
- **Mountain Page**: Provides a user interface that allows the user to explore the details of 48 different mountains.  Once the user selects the mountain from a dropdown menu, the Name, elevation description and effort level is displayed.
- **National Parks Page**: Provides a user interface that allows the user  to search for national parks based on location or type, displaying relevant park details like phone number, address and website  in a table format.

# Project Structure

---

- index.html: homepage
- national-parks.html: Page with a table listing parks based on the selected location or park type.
- mountains.html: Page featuring mountain details when selected from a dropdown.
- css/index.css: custom styling for homepage
- css/mountains.css: custom styling for mountains page
- css/nationalparks.css : custom styling for national parks page
- scripts/:
    - locationData.js: Contains location information for the national parks.
    - mountain.data.js Contains data on each mountain.
    - nationalParkdata.js: Contains data about each national park.
    - national-parks.js:  JavaScript for handling the dropdown and  filter by park type and location functionality
    - mountains.js: JavaScript for handling mountain details display functionality.
    
    # Usage
    
    ---
    
    ## Mountain Page:
    
    1. Select a mountain from the dropdown menu
    2. Once mountain is selected details will be displayed including an image, description, elevation and effort level

![image (1)](https://github.com/user-attachments/assets/b5422a20-7705-4a76-9b7e-3d1e1332e427)


### National Parks Page

1. Choose a filter option whether park type or location. 
2. Select an option from the dropdown to filter the parks. Table will populate parks that meet the criteria along with details
![Capture](https://github.com/user-attachments/assets/80734d1b-d4d1-4344-b262-1bd8b0cfabc4)

# Resources

---

- **JavaScript:** To provide functionality , DOM manipulation, event handling and data processing
- **Bootstrap**: Used for styling and responsive design
