CustomRenderer = function(name) {
    CustomRenderer.superClass_.constructor.call(this,name);
};

Blockly.utils.object.inherits(CustomRenderer,
    Blockly.blockRendering.Renderer);

CustomRenderer.prototype.makeConstants_ = function() {
    return new CustomConstantsProvider();
};

Blockly.blockRendering.register('custom_renderer', CustomRenderer);

CustomConstantsProvider = function() {
    // Set up all of the constants from the base provider.
    CustomConstantsProvider.superClass_.constructor.call(this);

    // Override a few properties.
    /**
     * The width of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_WIDTH = 25;

    /**
     * The height of the notch used for previous and next connections.
     * @type {number}
     * @override
     */
    this.NOTCH_HEIGHT = 10;

    /**
     * Rounded corner radius.
     * @type {number}
     * @override
     */
    this.CORNER_RADIUS = 5;

    /**
     * The width of the puzzle tab used for input and output connections.
     * @type {number}
     */
    this.TAB_WIDTH = 5;

    /**
     * The height of the puzzle tab used for input and output connections.
     * @type {number}
     */
    this.TAB_HEIGHT = 15;

    /**
     * A field's border rect corner radius.
     * @type {number}
     */
    this.FIELD_BORDER_RECT_RADIUS = 4;

    /**
     * Whether to add a 'hat' on top of all blocks with no previous or output
     * connections. Can be overridden by 'hat' property on Theme.BlockStyle.
     * @type {boolean}
     */
    this.ADD_START_HATS = false;

    /**
     * Additional offset added to the statement input's width to account for the
     * notch.
     * @type {number}
     */
    this.STATEMENT_INPUT_NOTCH_OFFSET = this.NOTCH_OFFSET_LEFT;

    this.STATEMENT_BOTTOM_SPACER = 0;
    this.STATEMENT_INPUT_PADDING_LEFT = 10;

    /**
     * The size of large padding.
     * @type {number}
     */
    this.LARGE_PADDING = 20;

};
Blockly.utils.object.inherits(CustomConstantsProvider,
    Blockly.blockRendering.ConstantProvider);

/**
 * @override
 */
CustomConstantsProvider.prototype.init = function() {
    CustomConstantsProvider.superClass_.init.call(this);
    // Add calls to create shape objects for the new connection shapes.
    this.RECT_PREV_NEXT = this.makeRectangularPreviousConn();
    this.RECT_INPUT_OUTPUT = this.makeRectangularInputConn();
    this.ROUND_PREV_NEXT = this.makeRoundPreviousConn();
    this.NO_INPUT_OUTPUT = this.makeValueInputConn();
    // this.TRI_INPUT_OUTPUT = this.makeTriangleInputConn();
};

//test make round connection
CustomConstantsProvider.prototype.makeRoundPreviousConn = function() {
    var width = this.NOTCH_WIDTH;
    var height = this.NOTCH_HEIGHT;
    const Prev_block = Blockly.utils.svgPaths.arc('a', '0,0,0', height / 8, Blockly.utils.svgPaths.point(width, 0));
    const Next_block = Blockly.utils.svgPaths.arc('a', '0,0,1', height / 8, Blockly.utils.svgPaths.point(-width, 0));

    return {
        width: width,
        height: height,
        pathLeft: Prev_block,
        pathRight: Next_block
    };
};

/**
 * Return a rectangular notch for use with previous and next connections.
 */
CustomConstantsProvider.prototype.makeRectangularPreviousConn = function() {
    var width = this.NOTCH_WIDTH; //20
    var height = this.NOTCH_HEIGHT; //10

    /**
     * Since previous and next connections share the same shape
     * you can define a function to generate the path for both.
     */
    function makeMainPath(dir) {
        return Blockly.utils.svgPaths.line(
            [
                Blockly.utils.svgPaths.point(0, height), // 0 is a origin and height is a height
                Blockly.utils.svgPaths.point(dir * width, 0), //set new origin x `dir` and draw line to width fit and not draw in y axis
                Blockly.utils.svgPaths.point(0, -height) // draw line to - height
            ]);

    }
    var pathLeft = makeMainPath(1);
    var pathRight = makeMainPath(-1);

    return {
        width: width,
        height: height,
        pathLeft: pathLeft,
        pathRight: pathRight
    };
};


/**
 * Return a rectangular puzzle tab for use with input and output connections.
 */
CustomConstantsProvider.prototype.makeRectangularInputConn = function() {
    var width = this.TAB_WIDTH;
    var height = this.TAB_HEIGHT;

    /**
     * Since input and output connections share the same shape you can
     * define a function to generate the path for both.
     */
    function makeMainPath(up) {
        return Blockly.utils.svgPaths.line(
            [
                Blockly.utils.svgPaths.point(-width, 0),
                Blockly.utils.svgPaths.point(0, -1 * up * height),
                Blockly.utils.svgPaths.point(width, 0)
            ]);
    }

    var pathUp = makeMainPath(1);
    var pathDown = makeMainPath(-1);

    return {
        width: width,
        height: height,
        pathDown: pathDown,
        pathUp: pathUp
    };
};

CustomConstantsProvider.prototype.makeValueInputConn = function() {
    var width = this.TAB_WIDTH;
    var height = this.TAB_HEIGHT;

    function makeMainPath() {
        return Blockly.utils.svgPaths.line(
            [
                Blockly.utils.svgPaths.point(0, 0),
                Blockly.utils.svgPaths.point(0, height),
                Blockly.utils.svgPaths.point(0, 0)
            ]);
    }
    var pathUp = makeMainPath(1);
    var pathDown = makeMainPath(-1);

    return {
        width: width,
        height: height,
        pathDown: pathDown,
        pathUp: pathUp
    };
};

// CustomConstantsProvider.prototype.makeTriangleInputConn = function() {
//     var width = this.TAB_WIDTH;
//     var height = this.TAB_HEIGHT;

//     /**
//      * Since input and output connections share the same shape you can
//      * define a function to generate the path for both.
//      */
//     function makeMainPath(up) {
//         return Blockly.utils.svgPaths.line(
//             [
//                 Blockly.utils.svgPaths.point(-width, 0),
//                 Blockly.utils.svgPaths.point(0, -1 * up * height),
//                 Blockly.utils.svgPaths.point(width, 0)

//             ]);
//     }

//     var pathUp = makeMainPath(1);
//     var pathDown = makeMainPath(-1);

//     return {
//         width: width,
//         height: height,
//         pathDown: pathDown,
//         pathUp: pathUp
//     };
// };


/**
 * @override
 */
CustomConstantsProvider.prototype.shapeFor = function(connection) {
    var checks = connection.getCheck();
    switch (connection.type) {
        case Blockly.INPUT_VALUE:
        case Blockly.OUTPUT_VALUE:
            // Includes doesn't work in IE.
            if (checks && checks.indexOf('Id') != -1) {
                return this.RECT_INPUT_OUTPUT;
            }
            // if (checks && checks.indexOf('String') != -1) {
            //     return this.NO_INPUT_OUTPUT;
            // }
            // if (checks && checks.indexOf('Number') != -1) {
            //     return this.NO_INPUT_OUTPUT;
            // }
            // if (checks && checks.indexOf('Param') != -1) {
            //     return this.NO_INPUT_OUTPUT;
            // }
            if (checks && checks.indexOf('Logic') != -1) {
                return this.PUZZLE_TAB;
            }
            if (checks && checks.indexOf('Boolean') != -1) {
                return this.PUZZLE_TAB;
            }
            return this.NO_INPUT_OUTPUT;
        case Blockly.PREVIOUS_STATEMENT:
        case Blockly.NEXT_STATEMENT:
            if (checks && checks.indexOf('It') != -1) {
                return this.NOTCH;
            }
            return this.ROUND_PREV_NEXT;
        default:
            throw Error('Unknown type');
    }
};