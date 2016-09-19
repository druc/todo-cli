var Fs = require('fs');
var Sift = require('sift');
var chalk = require('chalk');

const STORAGE_PATH = process.cwd() + '/todos.json';

var TODO = function (callback) {
    var self = this;

    callback = callback || function (error) {
            if (error) throw error;
        };

    if (Fs.existsSync(STORAGE_PATH)) {
        self.list(function (error, todos) {
            if (error) {
                return callback(error);
            }

            self.todos = todos;
            callback(null, todos, self);
        });
    } else {
        self.todos = [];
        self.save();
        console.log(chalk.red("No todos. Prepared storage though..."));
    }

    return self;
};

/**
 * List todos
 * @param  {Function} callback
 * @return {object}
 */
TODO.prototype.list = function (callback) {
    Fs.readFile(STORAGE_PATH, "utf-8", function (err, content) {
        if (err) {
            return callback(err);
        }
        try {
            content = JSON.parse(content);
        } catch (e) {
            err = e;
        }
        callback(err, content);
    });

    return this;
};

/**
 * Create tood
 * @param  {string} todo
 * @return {object}
 */
TODO.prototype.create = function (todo) {
    var now = new Date();
    if (!todo) {
        console.log(chalk.red("Todo can't be empty!"));
    }

    this.todos.push({
        id: this.todos.length,
        todo: todo,
        date: now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear() + " - " + now.getHours() + ":" + now.getMinutes(),
        state: 'OPEN'
    });

    console.log(chalk.green("Todo " + this.todos.length + " created"));

    return this;
};

/**
 * Todo close
 * @param  {int}   id
 * @return {object}
 */
TODO.prototype.close = function (ids) {
    ids = ids.split(",");
    var self = this;

    ids.forEach(function (id) {
        if (!self.todos[id - 1]) {
            return console.log(chalk.red("Can't find todo with id: " + id + "."));
        }

        self.todos[id - 1].state = "CLOSED";
        console.log(chalk.green("Todo " + id + " closed"));
    });

    return self;
};

/**
 * Todo closeAll
 * @return {object}
 */
TODO.prototype.closeAll = function () {
    var i, length = this.todos.length;

    for (i = 0; i < length; i++) {
        this.todos[i].state = "CLOSED";
    }

    console.log(chalk.green("Closed all todos"));

    return this;
};

/**
 * Todo reopen
 * @param  {int}   id
 * @return {object}
 */
TODO.prototype.reopen = function (ids) {
    ids = ids.split(",");
    var self = this;

    ids.forEach(function (id) {
        if (!self.todos[id - 1]) {
            return console.log(chalk.red("Can't find todo with id: " + id + "."));
        }

        self.todos[id - 1].state = "OPEN";
        console.log(chalk.green("Todo " + id + " reopened"));

    });

    return self;
};


/**
 * Todo reopenAll
 * @return {object}
 */
TODO.prototype.reopenAll = function () {

    this.todos.forEach(function (todo) {
        todo.state = "OPEN";
    });

    console.log(chalk.green("Reopened all todos"));

    return this;
};

/**
 * Todo save
 * @return {object}
 */
TODO.prototype.save = function () {
    Fs.writeFile(STORAGE_PATH, JSON.stringify(this.todos, null, 2));

    return this;
};

/**
 * Todo filter
 * @param  {object}   filters
 * @param  {Function} callback
 * @return {object}
 */
TODO.prototype.filter = function (filters, callback) {
    callback(null, Sift(filters, this.todos));

    return this;
};

/**
 * Todo clear
 * @return {object}
 */
TODO.prototype.clear = function () {
    Fs.unlink(STORAGE_PATH);
    console.log(chalk.green("Todo list finished and removed"));

    return this;
};

module.exports = TODO;
