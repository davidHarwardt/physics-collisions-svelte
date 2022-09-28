import { Vec2 } from "@david.harwardt/math";

class Pointer {
    public readonly id: number;
    public readonly pos: Vec2;
    private lastPos: Vec2;
    public data: any = {};

    constructor(pos: Vec2, id: number) {
        this.pos = pos;
        this.id = id;
        this.lastPos = pos.copy();
    }

    public setPos(v: Vec2) { (this.pos as any) = v }

    public delta(): Vec2 {
        let delta = this.pos.sub(this.lastPos);
        this.lastPos = this.pos;
        return delta;
    }

}

class PointerManager {
    public static readonly POINTER_ID = -1;
    public readonly parent: HTMLElement;

    public pointers: Map<number, Pointer>;
    public down: (pointer: { id: number, pos: Vec2 }[], list: Map<number, Pointer>) => void = () => {};
    public move: (pointer: { id: number, pos: Vec2 }[]) => void = () => {};
    public up: (pointer: { id: number, pos: Vec2 }[], list: Map<number, Pointer>) => void = () => {};

    constructor(parent: HTMLElement) {
        this.parent = parent;
        this.pointers = new Map();

        this.parent.addEventListener("touchstart", ev => {
            // ev.preventDefault();
            this.beginPointer(this.fromList(ev.changedTouches));
        }, { passive: false });

        this.parent.addEventListener("touchmove", ev => {
            ev.preventDefault();
            this.movePointer(this.fromList(ev.changedTouches));
        }, { passive: false });

        this.parent.addEventListener("touchend", ev => {
            // ev.preventDefault();
            this.removePointer(this.fromList(ev.changedTouches));
        }, { passive: false });

        this.parent.addEventListener("touchcancel", ev => {
            this.removePointer(this.fromList(ev.changedTouches));
        });

        this.parent.addEventListener("mousedown", ev => {
            this.beginPointer([{
                id: PointerManager.POINTER_ID,
                pos: new Vec2(ev.clientX, ev.clientY),
            }]);
        }, { passive: false });
        
        this.parent.addEventListener("mousemove", ev => {
            this.movePointer([{
                id: PointerManager.POINTER_ID,
                pos: new Vec2(ev.clientX, ev.clientY),
            }]);
        }, { passive: false });

        this.parent.addEventListener("mouseup", ev => {
            this.removePointer([{
                id: PointerManager.POINTER_ID,
                pos: new Vec2(ev.clientX, ev.clientY),
            }]);
        }, { passive: false });

        this.parent.addEventListener("mouseleave", ev => {
            this.removePointer([{
                id: PointerManager.POINTER_ID,
                pos: new Vec2(ev.clientX, ev.clientY),
            }]);
        });
    }

    private fromList(list: TouchList): { id: number, pos: Vec2 }[] {
        return new Array(list.length).fill(0).map((v, i) => ({
            id: list[i].identifier,
            pos: new Vec2(list[i].clientX, list[i].clientY),
        }));
    }

    private beginPointer(touches: { id: number, pos: Vec2 }[]) {
        touches.forEach(v => {
            this.pointers.set(v.id, new Pointer(v.pos, v.id));
        });
        this.down(touches, this.pointers);
    }

    private movePointer(touches: { id: number, pos: Vec2 }[]) {
        touches.forEach(v => {
            this.pointers.get(v.id)?.setPos(v.pos);
        });
        this.move(touches);
    }

    private removePointer(touches: { id: number, pos: Vec2 }[]) { 
        touches.forEach(v => {
            this.pointers.delete(v.id);
        });
        this.up(touches, this.pointers);
    }
}

export {
    PointerManager,
}
