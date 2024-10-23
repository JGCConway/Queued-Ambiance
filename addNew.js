let elementCount = 0; // To keep track of how many elements you've created

document.getElementById('addNewModule').addEventListener('click', function() {
    // Create a new div
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-div'); // Add a class if needed for styling

    // Create new elements inside the div with unique IDs
    for (let i = 1; i <= 1; i++) { // Change 3 to how many elements you want
        const newElement = document.createElement('div'); // Example of creating a paragraph element
        elementCount++; // Increment the counter for unique ID
        
        // Set the unique ID
        newElement.id = `unique-element-${elementCount}`;
        newElement.innerHTML ='<div class="populatedBodyParentOne"><div class="populatedDottedOutlineOne"><div class="populatedInnerBoxOne"><p id="fileName">fileName.filetype</p><h2 id="renameField" onclick="editField()">Rain (Renameable Field)</h2><div class="volbox">Volume: <input id="volume" type="range" min="0" max="1" value="1" step="0.01"></div><div class="populatedSoundWave"><img src="media/play.png" id="playBtn1"><img src="media/loop.png" id="loopBtn1"><div id="waveform"></div></div></div></div></div>'
      
      document.getElementById('audioModules').appendChild(newElement);

    // Dynamically assign IDs to each element within the new div
    const headings = newElement.getElementsByClassName('dynamic-heading');
    const paragraphs = newElement.getElementsByClassName('dynamic-paragraph');
    
    // Assign unique IDs to the heading
    for (let i = 0; i < headings.length; i++) {
        elementCount++; // Increment the unique ID counter
        headings[i].id = `heading-${elementCount}`;
    }

    // Assign unique IDs to each paragraph
    for (let i = 0; i < paragraphs.length; i++) {
        elementCount++; // Increment the unique ID counter
        paragraphs[i].id = `paragraph-${elementCount}`;
    }
        
        // Append the new element to the div
        newDiv.appendChild(newElement);
    }
    
    // Append the new div to the container
    document.getElementById('audioModules').appendChild(newDiv);
});