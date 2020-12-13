class Rope{
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        }

        fly() {
            this.sling.bodyA = null;
        }

        attach() {
            this.sling.bodyA = Body
        }

        display() {
            if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            }
        }
    }
