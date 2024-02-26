
    const borderIndex = document.getElementById('borderIndex')
    const borderIndexError = document.getElementById('borderIndexError')
    const area = document.getElementById('area')
    const areaError = document.getElementById('areaError')
    const round = document.getElementById('round')
    const roundError = document.getElementById('roundError')
    const bright = document.getElementById('bright')
    const brightError = document.getElementById('brightError')
    const compact = document.getElementById('compact')
    const compactError = document.getElementById('compactError')
    const shpIndx = document.getElementById('shpIndx')
    const shpIndxError = document.getElementById('shpIndxError')
    const meanG = document.getElementById('meanG')
    const meanGError = document.getElementById('meanGError')
    const meanR = document.getElementById('meanR')
    const meanRError = document.getElementById('meanRError')
    const meanNIR = document.getElementById('meanNIR')
    const meanNIRError = document.getElementById('meanNIRError')
    const sdG = document.getElementById('sdG')
    const sdGError = document.getElementById('sdGError')
    const sdR = document.getElementById('sdR')
    const sdRError = document.getElementById('sdRError')
    const sdNIR = document.getElementById('sdNIR')
    const sdNIRError = document.getElementById('sdNIRError')
    const lw = document.getElementById('lw')
    const lwError = document.getElementById('lwError')
    const glcm1 = document.getElementById('glcm1')
    const glcm1Error = document.getElementById('glcm1Error')
    const rect = document.getElementById('rect')
    const rectError = document.getElementById('rectError')
    const glcm2 = document.getElementById('glcm2')
    const glcm2Error = document.getElementById('glcm2Error')
    const dens = document.getElementById('dens')
    const densError = document.getElementById('densError')
    const assym = document.getElementById('assym')
    const assymError = document.getElementById('assymError')
    const ndvi = document.getElementById('ndvi')
    const ndviError = document.getElementById('ndviError')
    const bordLngth = document.getElementById('bordLngthError')
    const bordLngthError = document.getElementById('bordLngthError')
    const glcm3 = document.getElementById('glcm3')
    const glcm3Error = document.getElementById('glcm3Error')

    document.getElementById("predButton").addEventListener('click', function(event) {
        let hasError = false;
        if (borderIndex.value === '') {
            borderIndexError.textContent = '*Required';
        hasError = true;
        } else {
            borderIndexError.textContent = '';
        }

        if (area.value === '') {
            areaError.textContent = '*Required';
        hasError = true;
        } else {
            areaError.textContent = '';
        }

        if (round.value === '') {
            brightError.textContent = '*Required';
        hasError = true;
        } else {
            brightError.textContent = '';
        }

        if (bright.value === '') {
            roundError.textContent = '*Required';
        hasError = true;
        } else {
            roundError.textContent = '';
        }

        if (compact.value === '') {
            compactError.textContent = '*Required';
        hasError = true;
        } else {
            compactError.textContent = '';
        }
        
        if (shpIndx.value === '') {
            shpIndxError.textContent = '*Required';
        hasError = true;
        } else {
            shpIndxError.textContent = '';
        }

        if (meanG.value === '') {
            meanGError.textContent = '*Required';
        hasError = true;
        } else {
            meanGError.textContent = '';
        }

        if (meanR.value === '') {
            meanRError.textContent = '*Required';
        hasError = true;
        } else {
            meanRError.textContent = '';
        }

        if (meanNIR.value === '') {
            meanNIRError.textContent = '*Required';
        hasError = true;
        } else {
            meanNIRError.textContent = '';
        }

        if (sdG.value === '') {
            sdGError.textContent = '*Required';
        hasError = true;
        } else {
            sdGError.textContent = '';
        }

        if (sdR.value === '') {
            sdRError.textContent = '*Required';
        hasError = true;
        } else {
            sdRError.textContent = '';
        }

        if (sdNIR.value === '') {
            sdNIRError.textContent = '*Required';
        hasError = true;
        } else {
            sdNIRError.textContent = '';
        }

        if (lw.value === '') {
            lwError.textContent = '*Required';
        hasError = true;
        } else {
            lwError.textContent = '';
        }

        if (glcm1.value === '') {
            glcm1Error.textContent = '*Required';
        hasError = true;
        } else {
            glcm1Error.textContent = '';
        }

        if (rect.value === '') {
            rectError.textContent = '*Required';
        hasError = true;
        } else {
            rectError.textContent = '';
        }

        if (glcm2.value === '') {
            glcm2Error.textContent = '*Required';
        hasError = true;
        } else {
            glcm2Error.textContent = '';
        }

        if (dens.value === '') {
            densError.textContent = '*Required';
        hasError = true;
        } else {
            densError.textContent = '';
        }
        
        if (assym.value === '') {
            assymError.textContent = '*Required';
        hasError = true;
        } else {
            assymError.textContent = '';
        }

        if (ndvi.value === '') {
            ndviError.textContent = '*Required';
        hasError = true;
        } else {
            ndviError.textContent = '';
        }

        if (bordLngth.value === '') {
            bordLngthError.textContent = '*Required';
        hasError = true;
        } else {
            bordLngthError.textContent = '';
        }

        if (glcm3.value === '') {
            glcm3Error.textContent = '*Required';
        hasError = true;
        } else {
            bordLngthError.textContent = '';
        }


        if (hasError) {
            event.preventDefault();
        }
    });
