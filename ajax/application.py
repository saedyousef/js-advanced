from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/ajax", methods=["POST"])
def flight_api():
    param = request.form.get('param')
    if not param:
        return jsonify({'success':False})
    if param is None:
        return jsonify({'success' : False})
    if param == 'fail':
        return jsonify({'success' : False})
    data = ['Test wokred']
    return jsonify({'success' : True, 'result' : data})
