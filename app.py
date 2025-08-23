from flask import Flask

# Create the Flask app
app = Flask(__name__)

# Define a route
@app.route("/")
def home():
    return "Hello, Flask! 🚀"

@app.route("/about")
def about():
    return "This is a simple Flask application."

# Run the app
if __name__ == "__main__":
    app.run(debug=True)