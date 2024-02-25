function predict() {
    // Collect input values
    var formData = {
        'Border Index': parseFloat(document.getElementById('borderIndex').value),
        'Area': parseFloat(document.getElementById('area').value),
        'Round': parseFloat(document.getElementById('round').value),
        'Bright': parseFloat(document.getElementById('bright').value),
        'Compact': parseFloat(document.getElementById('compact').value),
        'ShpIndx': parseFloat(document.getElementById('shpIndx').value),
        'Mean_G': parseFloat(document.getElementById('meanG').value),
        'Mean_R': parseFloat(document.getElementById('meanR').value),
        'Mean_NIR': parseFloat(document.getElementById('meanNIR').value),
        'SD_G': parseFloat(document.getElementById('sdG').value),
        'SD_R': parseFloat(document.getElementById('sdR').value),
        'SD_NIR': parseFloat(document.getElementById('sdNIR').value),
        'LW': parseFloat(document.getElementById('lw').value),
        'GLCM1': parseFloat(document.getElementById('glcm1').value),
        'Rect': parseFloat(document.getElementById('rect').value),
        'GLCM2': parseFloat(document.getElementById('glcm2').value),
        'Dens': parseFloat(document.getElementById('dens').value),
        'Assym': parseFloat(document.getElementById('assym').value),
        'NDVI': parseFloat(document.getElementById('ndvi').value),
        'BordLngth': parseFloat(document.getElementById('bordLngth').value),
        'GLCM3': parseFloat(document.getElementById('glcm3').value),
    };

    // Send data to Flask server
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Display prediction result
        document.getElementById('predictionResult').innerText = 'Prediction: ' + data.prediction;
    })
    .catch(error => console.error('Error:', error));
}