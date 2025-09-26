# auth.py
# User authentication module

def login(username, password):
    # TODO: Add database validation later
    if username == "admin" and password == "1234":
        return "Login successful"
    else:
        return "Login failed"