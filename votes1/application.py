import os
import requests

from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SOCKET_SECRET_KEY')
socketio = SocketIO(app,cors_allowed_origins="*")

votes = {'yes' : 0, 'no' : 0, 'maybe' : 0}

@app.route("/")
def index():
    return render_template("index.html", votes=votes)
    
@socketio.on('submit vote')
def vote(data):
    selection = data['selection']
    votes[selection] += 1
    emit("votes total", votes, broadcast = True)