from flask import Flask, render_template
import webbrowser

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")


def show_portfolio():
    webbrowser.open('http://127.0.0.1:5000/portfolio')


if __name__ == '__main__':
    app.run(debug=True)
