import { Canvas2d, CanvasFullscreenSize } from "@david.harwardt/canvas-2d";
import { Vec2, Vec3 } from "@david.harwardt/math";
import { Color } from "@david.harwardt/color";
import { writable } from "svelte/store";
import { PointerManager } from "./pointers";
let settings = {
    editingCircle: {
        radius: 50,
        mass: 1,
    },
    running: true,
    traceFreq: 20,       // line frequency in Hz
    drawTraces: true,
    traceWidth: 1 / 2,
    world: {
        restetution: 1,
        motionEnabledStore: writable(false),
        motionEnabled: false,
        gravity: 25,
        velocity: 25,
        airDensity: 10,
    },
    selectedStore: writable<undefined | CircleObject>(undefined),

    stepsPerFrame: 10,
}
let sidebarWidth = 200;
let canvas: Canvas2d;
let backgroundCanvas: Canvas2d;
let pointers: PointerManager;
let time: number = 0;
let draggingNewCircle: { pos: Vec2, pointer: number } | undefined = undefined;
let framerate = 0;
let selected: CircleObject | undefined = undefined;
let gravityDir = new Vec2(0, 0);
let deviceAccel = new Vec2(0, 0);
function getFramerate() { return framerate }

function clearPaper() {
    backgroundCanvas.clear();
}

function removeSelected() {
    if(selected) {
        let idx = objects.findIndex(v => v === selected);
        objects.splice(idx, 1); 
        settings.selectedStore.set(undefined);
        selected = undefined;
    }
}

const experiments: Record<string, () => CircleObject[]> = {
    "2-object-collision": () => {
        let xPos = 100;
        let yOffset = window.innerHeight / 4;

        let pos1 = new Vec2(xPos, window.innerHeight / 2 - yOffset);
        let pos2 = new Vec2(xPos, window.innerHeight / 2 + yOffset);
        let target = new Vec2(window.innerWidth / 2, window.innerHeight / 2);
        let obj1 = new CircleObject(pos1, settings.editingCircle.radius, settings.editingCircle.mass);
        obj1["vel"] = target.sub(pos1);
        let obj2 = new CircleObject(pos2, settings.editingCircle.radius, settings.editingCircle.mass);
        obj2["vel"] = target.sub(pos2);

        return [obj1, obj2]
    },
    "pool": () => {
        let center = new Vec2(window.innerWidth, window.innerHeight).divS(2);
        let radius = settings.editingCircle.radius;
        let mass = settings.editingCircle.mass;
        let initialBallPos = center.sub(new Vec2(center.x / 2, 0));
        let initialBall = new CircleObject(initialBallPos, radius, mass);
        initialBall["vel"] = new Vec2(4000, 0);

        let ballsCenter = center.add(new Vec2(center.x / 2 - 500, 0));
        let balls: CircleObject[] = [];
        const angleV = Math.sin(Math.PI * 2 / 3);
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < i + 1; j++) {
                let pos = ballsCenter.add(new Vec2(i * angleV, -(i / 2) + j).multS(radius * 2 + 5));
                balls.push(new CircleObject(pos, radius, mass));
            }
        }
        
        return [initialBall, ...balls]
    },
    "clear": () => {
        return []
    },
}
function useExperiment(name: string) {
    objects = experiments[name]();
    selected = undefined;
}

function save() {
    let link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    let blob = backgroundCanvas.element.toDataURL("image/png");
    let url = blob.replace(/^data:image\/png/,'data:application/octet-stream');
    link.setAttribute('href', url);
    link.click();
}

function init(element: HTMLDivElement) {
    backgroundCanvas = Canvas2d.fromParent(element);
    canvas = Canvas2d.fromParent(element);
    new CanvasFullscreenSize(canvas.element);
    new CanvasFullscreenSize(backgroundCanvas.element);

    pointers = new PointerManager(canvas.element);
    pointers.down = (ptrs, list) => {
        let circlePos = new Vec2(window.innerWidth, window.innerHeight).subS(sidebarWidth / 2);
        ptrs.forEach(v => {
            if(v.pos.sub(circlePos).magnitude() < settings.editingCircle.radius) {
                draggingNewCircle = { pos: circlePos.copy(), pointer: v.id };
            }

            if(!settings.running && selected && selected["pos"].add(selected["vel"].divS(10)).sub(v.pos).magnitude() < selected.radius) {
                list.get(v.id)!.data.draggingVel = selected;
                return;
            }

            objects.forEach(obj => {
                if(obj["pos"].sub(v.pos).magnitude() < obj.radius) {
                    list.get(v.id)!.data.dragging = obj;
                }
            });
        });
    }

    pointers.up = ptrs => {
        ptrs.forEach(v => {
            if(draggingNewCircle && draggingNewCircle.pointer === v.id) {
                if(canPlaceDragging()) {
                    objects.push(new CircleObject(
                        draggingNewCircle.pos, 
                        settings.editingCircle.radius,
                        settings.editingCircle.mass
                    ));
                }
                draggingNewCircle = undefined;
            }
        })
    }

    canvas.element.addEventListener("click", ev => {
        let pointerPos = new Vec2(ev.clientX, ev.clientY);
        for(const obj of objects) {
            if(obj["pos"].sub(pointerPos).magnitude() < obj.radius) {
                selected = obj;
                settings.selectedStore.set(selected);
                return;
            }
        }
        settings.selectedStore.set(undefined);
        selected = undefined;
    });

    let lastTime = Date.now() / 1000;
    const drawFn = () => {
        const now = Date.now() / 1000;
        const dt = now - lastTime;
        draw(dt);
        requestAnimationFrame(drawFn);
        lastTime = now;
        framerate = 1 / dt;
    };
    requestAnimationFrame(drawFn);

}

function enableMotion() {
    if(!settings.world.motionEnabled) {
        if(!("DeviceMotionEvent" in window)) { alert("DeviceMotionEvent not supported"); return }

        (DeviceMotionEvent as any).requestPermission().then(res => {
            if(res !== "granted") { alert("permission for DeviceMotionEvent not granted"); return }
            settings.world.motionEnabledStore.set(true);
            settings.world.motionEnabled = true;

            window.addEventListener("devicemotion", ev => {
                let accWithGravity = new Vec3(ev.accelerationIncludingGravity.x, ev.accelerationIncludingGravity.y, ev.accelerationIncludingGravity.z);
                let acc = new Vec3(ev.acceleration.x, ev.acceleration.y, ev.acceleration.z);
                let gravity = accWithGravity.sub(acc);
                gravityDir = new Vec2(gravity.y, gravity.x).multS(-20 * settings.world.gravity);
                deviceAccel = new Vec2(acc.y, acc.x).multS(-2 * settings.world.velocity);
            });
        });
    } else {
        settings.world.motionEnabledStore.set(false);
        settings.world.motionEnabled = false;
    }
}

function canPlaceDragging(): boolean {
    for(const obj of objects) {
        if(obj["pos"].sub(draggingNewCircle.pos).magnitude() < obj.radius + settings.editingCircle.radius) {
            return false
        }
    }
    return true
}

type CollisionResult = {
    normal: Vec2,
    position: Vec2,
    other: { vel: Vec2, mass: number },
};

class CircleObject {
    public static id = 0;

    private id: number = CircleObject.id++;
    private pos: Vec2;
    private oldPos: Vec2;
    // private nextPos: Vec2;
    private vel: Vec2;
    // private nextVel: Vec2;

    public radius: number;
    public mass: number;

    public get impulse(): Vec2 { return this.vel.multS(this.mass) }
    public set impulse(v: Vec2) { this.vel = v.divS(this.mass) }
    
    constructor(pos: Vec2, radius: number, mass: number) {
        this.pos = pos;
        // this.nextPos = this.pos.copy();
        this.vel = new Vec2(0, 0);
        // this.nextVel = this.vel.copy();
        this.radius = radius;
        this.mass = mass;
    } 

    // call order:
    //  - update     => updates the current object, including possible collisions, sets next values, does not modify real values
    //  - bgDraw     => draws background elements
    //  - draw       => draws the object
    //  - lateUpdate => sets acctual values to next values
    public update(dt: number, collisions: CollisionResult[]) {
        let nextPos = this.pos.add(this.vel.multS(dt));
        let nextVel = this.vel.copy();
        
        collisions.forEach(v => {
            canvas.drawCircle(v.position, 10, { color: Color.blue });
            canvas.drawLine(v.position, v.position.add(v.normal.multS(20)))

            // let totalVel = this.vel.multS(dt);
            const overshoot = nextPos.sub(v.position);
            // let overshootFrac = overshoot.magnitude() / totalVel.magnitude();
            // console.log(overshootFrac);
            
            
            // nextPos = v.position.copy();
            
            // let vel = this.vel.magnitude();
            // let otherVel = v.other.vel.magnitude();

            // let totalVel = v.normal.dot(this.vel.sub(v.other.vel)) * (-1 + 1/* times cooeficcient of restetution */);
            // let impulse = totalVel / (1 / this.mass + 1 / v.other.mass);

            // this.nextVel = this.nextVel.add(this.vel.add(v.normal.multS(impulse / this.mass)));
            let inverseMass = 1 / this.mass;
            let otherInvMass = 1 / v.other.mass;

            let relativeVel = v.other.vel.sub(this.vel).dot(v.normal);
            let rest = settings.world.restetution; // perfect collision
            let nextImpulse = (-(1 + rest) * relativeVel) / (inverseMass + otherInvMass);
            
            nextVel = this.vel.sub(v.normal.multS(nextImpulse * inverseMass));
            
            nextPos = CircleObject.reflect(overshoot, v.normal).add(v.position);
            
            // let newVel = (vel * (this.mass - v.other.mass) + otherVel * 2 * v.other.mass) / (this.mass + v.other.mass);
            // this.nextVel = CircleObject.reflect(this.vel.divS(vel).multS(newVel), v.normal);
            // this.nextVel = this.vel.multS(this.mass - v.other.mass).add(v.other.vel.multS(2 * v.other.mass)).divS(this.mass + v.other.mass)

            // ekin = 0.5 * m * v^2

            // let totalImpulse = this.vel.multS(this.mass).add(v.other.vel.multS(v.other.mass));
            // this.nextVel = totalImpulse.multS(0.5).divS(this.mass);
            // this.nextVel = CircleObject.reflect(this.vel, v.normal);
        });

        this.oldPos = this.pos;
        this.pos = nextPos;
        this.vel = nextVel;

        // this.vel = this.vel.add(new Vec2(0, 500).multS(dt));
        let density = settings.world.airDensity * 0.000001;
        let dragCoeff = 0.47;
        let drag = this.vel.magnitude() * (-density * dragCoeff * this.radius);
        this.vel = this.vel.add(this.vel.multS(dt * drag));

        if(settings.world.motionEnabled) {
            this.vel = this.vel.add(gravityDir.multS(dt));
            this.vel = this.vel.add(deviceAccel);
        }


        // let mult = 1 - (1 - settings.dragMult) * dt;
        // this.vel = this.vel.multS(mult);
    }

    public static reflect(v: Vec2, normal: Vec2): Vec2 { return v.sub(normal.multS(2 * v.dot(normal))) }

    public getAllCollisions(objects: CircleObject[], dt: number, wallRect: Vec2) {
        // let nextPos = this.pos.add(this.vel.multS(dt));
        return [...this.getCollisions(this.pos, objects), ...this.getWallCollision(wallRect, this.pos)]
    }

    private getCollisions(nextPos: Vec2, objects: CircleObject[]): CollisionResult[] {
        let res: CollisionResult[] = [];
        objects.forEach(v => {
            if(v === this) { return }
            if(v.pos.sub(nextPos).magnitude() < v.radius + this.radius) {
                let normal = v.pos.sub(nextPos).normalized();
                let position = nextPos.lerp(v.pos, (this.radius /(this.radius + v.radius))).add(normal.multS(-this.radius));

                res.push({
                    normal,
                    position,
                    other: { vel: v.vel.copy(), mass: v.mass },
                });
            }
        });
        return res;
    }

    private getWallCollision(dim: Vec2, nextPos: Vec2): CollisionResult[] {
        let res: CollisionResult[] = [];

        let overshoot = this.getOvershoot(nextPos, dim);
        let normal = overshoot.map(v => -Math.sign(v));

        if(normal.x !== 0) {
            normal = new Vec2(normal.x, 0);
            let position = nextPos.sub(overshoot);
            res.push({
                normal,
                position,
                other: { vel: new Vec2(0, 0), mass: Number.POSITIVE_INFINITY },
            });
        }
        if(normal.y !== 0) {
            normal = new Vec2(0, normal.y);
            let position = nextPos.sub(overshoot);
            res.push({
                normal,
                position,
                other: { vel: new Vec2(0, 0), mass: Number.POSITIVE_INFINITY },
            });
        }

        return res;
    }

    private getOvershoot(p: Vec2, dim: Vec2): Vec2 {
        let rect = this.outsideRect(p, dim);
        return new Vec2(
            rect.left ? (p.x - this.radius) : (rect.right ? p.x - (dim.x) + this.radius : 0),
            rect.top ? (p.y - this.radius) : (rect.bottom ? p.y - (dim.y) + this.radius : 0),
        )
    }

    private outsideRect(p: Vec2, dim: Vec2): {
        x: boolean, y: boolean,
        left: boolean, right: boolean, top: boolean, bottom: boolean,
        genral: boolean,
    } {
        let left = (p.x - this.radius) < 0;
        let right = (p.x + this.radius) > dim.x;
        let top = (p.y - this.radius) < 0;
        let bottom = (p.y + this.radius) > dim.y;
        return {
            genral: left || right || top || bottom,
            x: left || right,
            y: top || bottom,
            left, right, top, bottom,
        };
    }

    public lateUpdate(dt: number) {
        // this.pos = this.nextPos;
        // this.vel = this.nextVel;
    }

    public draw(canvas: Canvas2d, background: Canvas2d) {
        canvas.drawCircle(this.pos, this.radius);
        if(!settings.running) {
            let from = this.pos;
            let to = from.add(this.vel.divS(10));

            canvas.drawLine(from, to, { cap: "round", width: 12, color: Color.white as any });
        }
    }

    public bgDraw(canvas: Canvas2d, background: Canvas2d) {
        if(settings.drawTraces) {
            let traceDuration = 1 / settings.traceFreq;
            if(time % traceDuration < settings.traceWidth * traceDuration) {
                // todo use old pos
                background.drawLine(this.oldPos, this.pos, { width: 2 });
            }
        }
    }
}

let objects: CircleObject[] = [];
function draw(dt: number) {
    canvas.clear();
    canvas.beginDraw();
    const winRect = new Vec2(window.innerWidth, window.innerHeight);
    const worldRect = new Vec2(winRect.x - sidebarWidth, winRect.y);

    
    if(settings.running) {
        deviceAccel = deviceAccel.divS(settings.stepsPerFrame);
        for(let i = 0; i < settings.stepsPerFrame; i++) {
            let stepDt = dt / settings.stepsPerFrame;
            let collisions = objects.map(v => v.getAllCollisions(objects, stepDt, worldRect));
            objects.forEach((v, i) => v.update(stepDt, collisions[i]));
            objects.forEach(v => v.bgDraw(canvas, backgroundCanvas));
            // objects.forEach(v => v.lateUpdate(dt));
            time += stepDt;
        }
    }
    objects.forEach(v => v.draw(canvas, backgroundCanvas));
    deviceAccel = new Vec2(0, 0);
    

    canvas.drawRect(new Vec2(winRect.x - sidebarWidth, 0), new Vec2(sidebarWidth, winRect.y), {
        color: Color.hex("#111111")
    });

    let circlePos = winRect.subS(sidebarWidth / 2);
    canvas.drawCircle(circlePos, settings.editingCircle.radius);
    if(draggingNewCircle) {
        canvas.drawCircle(draggingNewCircle.pos, settings.editingCircle.radius, {
            color: canPlaceDragging() ? Color.hex("#005500") : Color.hex("#333333")
        });
    }

    if(selected) {
        canvas.drawCircle(selected["pos"], selected.radius + 10, { borderColor: Color.red, borderWidth: 3, fill: false });
        if(settings.running) {
            canvas.drawLine(selected["pos"], selected["pos"].add(selected["vel"].divS(10)), { width: 12, cap: "round", color: Color.white as any });
            canvas.drawLine(selected["pos"], selected["pos"].add(selected["vel"].divS(10)), { width: 8, cap: "round", color: Color.hex("#23393d") as any });
        } else {
            let from = selected["pos"];
            let to = from.add(selected["vel"].divS(10));

            canvas.drawLine(from, to, { cap: "round", width: 12, color: Color.white as any });
            canvas.drawCircle(to, 20, { color: Color.white })
        }

    }

    // canvas.drawLine(winRect.multS(0.5), winRect.multS(0.5).add(gravityDir));

    pointers.pointers.forEach(v => {
        const delta = v.delta();
        canvas.drawCircle(v.pos, 10, { color: Color.hex("#555555") });

        if(draggingNewCircle && draggingNewCircle.pointer === v.id) {
            draggingNewCircle.pos = draggingNewCircle.pos.add(delta);
        }

        if(v.data.dragging) {
            let data: CircleObject = v.data.dragging;
            if(!settings.running) {
                data["pos"] = data["pos"].add(delta);
            } else {
                data["vel"] = delta.divS(dt);
            }
        }

        if(v.data.draggingVel) {
            let data: CircleObject = v.data.draggingVel;
            data["vel"] = data["vel"].add(delta.multS(10));
        }
    });


    canvas.endDraw();
}

export {
    init,
    settings,
    getFramerate,
    clearPaper,
    enableMotion,
    removeSelected,
    useExperiment,
    CircleObject,
    save,
}
