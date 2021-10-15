/**
 * TimeTask is simply library for run multiple function in queue with timeout
 * @param delay
 * @constructor
 */
var TimeTask = function (delay) {
    this.taskQueue = [];
    this.currentIndex = 0;
    this.defaultDelay = delay || 2500;
}

TimeTask.prototype = {
    /**
     * Clear Queue and reset index
     */
    clear: function () {
        this.taskQueue = [];
        this.currentIndex = 0;
    },
    /**
     * Set current queue index
     * @param index
     */
    setIndex: function (index) {
        if (!isNaN(index))
            this.currentIndex = parseInt(index);
    },
    /**
     * Add new function in queue
     * @param fn
     * @param delay
     */
    subscribe: function (fn, delay) {
        if (this.__isFunction__(fn)) {
            this.taskQueue.push({
                fn: fn,
                delay: delay,
                name: fn.name
            });
        } else
            throw new Error('Subscribe require function');
    },
    /**
     * Call next function in queue
     */
    next: function () {
        var self = this
            , i = this.currentIndex++
            , at = this.taskQueue[i]
            , next = this.taskQueue[this.currentIndex]
        if (!at) return;
        at.fn();
        next && setTimeout(function () {
            self.next();
        }, next.delay || this.defaultDelay);
    },
    /**
     * Reset queue index
     */
    reset: function () {
        this.currentIndex = 0;
    },
    /**
     * Run all function in queue
     * @param index
     */
    run: function (index) {
        (index || index === 0) && (this.currentIndex = index);
        this.next();
    },
    /**
     * remove specific function in queue !! IF FUNCTION HAVE NAME !!
     * @param fn
     */
    unsubscribe: function (fn) {
        if (this.__isFunction__(fn) && fn.name != "") {
            if (this.taskQueue.length > 0 && this.__get__(fn.name)) {
                const index = this.taskQueue.indexOf(this.__get__(fn.name));
                if (index > -1) {
                    this.taskQueue.splice(index, 1);
                }
            } else
                throw new Error('Error unsubscribe: Empty Queue or function not found');
        } else
            throw new Error('Error unsubscribe: not registered function');
    },
    /**
     * Remove all function in queue
     */
    unsubscribeAll: function () {
        this.clear();
    },
    /**
     * Return Bool when run execution is finished
     * @param callback
     */
    watch: function (callback) {
        let self = this;
        let interval = setInterval(function () {
            if (self.currentIndex === self.taskQueue.length) {
                clearInterval(interval);
                return callback(true);
            } else {
                return callback(false);
            }
        }, 100)
    },
    __isFunction__: function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    __get__: function (value) {
        var result = this.taskQueue.filter(function (o) {
            return o.name == value;
        });

        return result ? result[0] : null; // or undefined
    }
}