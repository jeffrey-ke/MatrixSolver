from flask import Flask, render_template, request, redirect, url_for, flash, session
import numpy as np
import json
import os.path

# javascript may be needed to implement my ideas of variable matrix dimensions.

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/matrix', methods=['GET', 'POST'])
def matrix():
    return render_template('matrix.html',rows=request.form['rows'],cols=request.form['cols'])

@app.route('/result', methods=['GET', 'POST'])
def route():
    # Here is where I parse through the string of numbers.
    rows, cols = int(str(request.form['rows'])), int(str(request.form['cols']))
    values = np.array([int(n) for n in request.form['values'].split()])
    matrix = np.empty([rows, cols])
    index = 0
    for i in range(rows):
        for j in range(cols):
            matrix[i, j] = values[index]
            index+=1
    rref(matrix)
    return str(matrix)

    
def cleancol(M, i):
    rows = np.shape(M)[0]
    for l in range(rows):
        #pivot index = i
        if(l != i and M[l][i] != 0 and M[i][i] != 0):
            M[l]/= M[l][i] #divide row by its first element, making the first element 1.
            M[l] -= M[i]/M[i][i] #add the i row to the l row

def rref(M):
    rows = np.shape(M)[0]
    for i in range(rows):
        cleancol(M, i)
        if(M[i][i] != 0):
            M[i] /= M[i][i]
    for i in range(rows):
         if(M[i][i] != 0):
            M[i] /= M[i][i]
