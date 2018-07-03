define([
        '../Core/freezeObject'
    ], function(
        freezeObject) {
    'use strict';

    /**
     * @private
     */
    var ExpressionNodeType = {
        VARIABLE : 0,
        UNARY : 1,
        BINARY : 2,
        TERNARY : 3,
        CONDITIONAL : 4,
        MEMBER : 5,
        FUNCTION_CALL : 6,
        ARRAY : 7,
        REGEX: 8,
        VARIABLE_IN_STRING : 9,
        LITERAL_NULL : 11,
        LITERAL_BOOLEAN : 12,
        LITERAL_NUMBER : 13,
        LITERAL_STRING : 14,
        LITERAL_COLOR : 15,
        LITERAL_VECTOR : 16,
        LITERAL_REGEX : 17,
        LITERAL_UNDEFINED : 18,
        BUILTIN_VARIABLE : 19
    };

    return freezeObject(ExpressionNodeType);
});
