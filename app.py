from flask import Flask, render_template, request, redirect, url_for, flash, session
import json
import os.path

# javascript may be needed to implement my ideas of variable matrix dimensions.

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/matrix', methods=['GET', 'POST'])
def result():
    return render_template('matrix.html',rows=request.form['rows'],cols=request.form['cols'])