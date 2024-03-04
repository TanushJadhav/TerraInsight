from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import joblib

model = joblib.load('./Model/ulc_classifier.pkl')

app = Flask(__name__, static_url_path='/static')
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if data:
        BrdIndx = data.get('Border Index')
        Area = data.get('Area') 
        Round = data.get("Round") 
        Bright = data.get("Bright")
        Compact = data.get("Compact")
        ShpIndx = data.get("ShpIndx")
        Mean_G =data.get("Mean_G")
        Mean_R = data.get("Mean_R")
        Mean_NIR = data.get("Mean_NIR")
        SD_G = data.get("SD_G")
        SD_R = data.get("SD_R")
        SD_NIR =data.get("SD_NIR")
        LW = data.get("LW")
        GLCM1 = data.get("GLCM1")
        Rect = data.get("Rect")
        GLCM2 = data.get("GLCM2")
        Dens = data.get("Dens")
        Assym = data.get("Assym")
        NDVI = data.get("NDVI")
        BordLngth = data.get("BordLngth")
        GLCM3 =data.get("GLCM3")

        print(([[BrdIndx, Area, Round, Bright, Compact, ShpIndx, Mean_G, Mean_R, Mean_NIR,SD_G,SD_R,SD_NIR,LW,GLCM1,Rect,GLCM2,Dens,Assym,NDVI,BordLngth,GLCM3]]))
        
        prediction = model.predict([[BrdIndx, Area, Round, Bright, Compact, ShpIndx, Mean_G, Mean_R, Mean_NIR,SD_G,SD_R,SD_NIR,LW,GLCM1,Rect,GLCM2,Dens,Assym,NDVI,BordLngth,GLCM3]])

        if prediction == 0:
            pred = 'Grass'
        elif prediction == 1:
            pred = "Building"
        elif prediction == 2:
            pred = "Concrete"
        elif prediction == 3:
            pred = "Tree"
        elif prediction == 4:
            pred = "Shadow"
        elif prediction == 5:
            pred = "Pool"
        elif prediction == 6:
            pred = "Asphalt"
        elif prediction == 7:
            pred = "Soil"
        else:
            pred = 'Car'

        print(prediction, ":", pred)
        return jsonify({'prediction': pred}) 
    
    else:
        return jsonify({'error': 'No data received'})

if __name__ == '__main__':
    app.run(port=5000, debug=True)