class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    // Push item at the end
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // Get item by index
    get(index) {
        return this.data[index];
    }

    // Remove and return last item
    pop() {
        if (this.length === 0) return undefined;
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // Remove and return first item
    shift() {
        if (this.length === 0) return undefined;
        const firstItem = this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    // Add item at the start
    unshift(item) {
        // Shift all elements right by 1 position
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.length;
    }

    // Delete by index
    deletebyIndex(index) {
        if (index < 0 || index >= this.length) return undefined;
        const item = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    // Insert item at a specific index
    insertAt(index, item) {
        if (index < 0 || index > this.length) {
            console.error("Index out of bounds");
            return;
        }

        // Shift right from the end to make space
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[index] = item;
        this.length++;
        return this.length;
    }
}

const arr = new MyArray();

arr.push("apple");
arr.push("banana");
arr.push("orange");
console.log("Initial:", arr);

arr.unshift("grape");
console.log("After unshift:", arr);

arr.insertAt(2, "mango");
console.log("After insertAt(2):", arr);

arr.deletebyIndex(1);
console.log("After deletebyIndex(1):", arr);

arr.pop();
console.log("After pop:", arr);

arr.shift();
console.log("After shift:", arr);
