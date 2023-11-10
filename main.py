
from flask import Flask, render_template

app = Flask(__name__)


class Dot:
    def __init__(self, x, y):
        self.x = x
        self.y = y

dots = []
for i in range(100):
    x = random.randint(0, 500)
    y = random.randint(0, 500)
    dot = Dot(x, y)
    dots.append(dot)
    
def distance(dot1, dot2):
    return math.sqrt((dot1.x - dot2.x)**2 + (dot1.y - dot2.y)**2)

def find_nearest_3_dots(dot):
    nearest_dots = []
    for other_dot in dots:
        if other_dot != dot:
            distance = distance(dot, other_dot)
            if len(nearest_dots) < 3 or distance < distance(nearest_dots[2], dot):
                nearest_dots.append(other_dot)
                nearest_dots.sort(key=lambda dot: distance(dot, dot))

    return nearest_dots


@app.route("/")
def index():
    # Get the current mouse position
    mouse_x = request.args.get("mouse_x")
    mouse_y = request.args.get("mouse_y")

    # Find the nearest 3 dots to the mouse position
    nearest_dots = find_nearest_3_dots((mouse_x, mouse_y))

    # Draw wires between the nearest 3 dots
    for i in range(len(nearest_dots) - 1):
        draw_wire(nearest_dots[i], nearest_dots[i + 1])

    # Render the HTML template
    return render_template("index.html", dots=dots)
if __name__ == "__main__":
    app.run(debug=True)
