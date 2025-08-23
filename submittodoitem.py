from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["todo_db"]
collection = db["todo_items"]

@app.route('/submittodoitem', methods=['POST'])
def submit_todo_item():
    data = request.get_json()
    item_name = data.get("itemName")
    item_description = data.get("itemDescription")

    if not item_name or not item_description:
        return jsonify({"error": "Missing required fields"}), 400

    todo_item = {"itemName": item_name, "itemDescription": item_description}
    collection.insert_one(todo_item)

    return jsonify({"message": "To-Do item added successfully!"}), 201

if __name__ == "__main__":
    app.run(debug=True)