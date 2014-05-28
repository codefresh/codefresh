/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 * Contributors:
 *	 IBM Corporation - initial API and implementation
 *******************************************************************************/
/*global define module require exports */
(function(root, factory) {
	if(typeof exports === 'object') {  //$NON-NLS-0$
		module.exports = factory(require, exports, module);
	}
	else if(typeof define === 'function' && define.amd) {  //$NON-NLS-0$
		define(['require', 'exports', 'module'], factory);
	}
	else {
		var req = function(id) {return root[id];},
			exp = root,
			mod = {exports: exp};
		root.rules.noundef = factory(req, exp, mod);
	}
}(this, function(require, exports, module) {

	module.exports = function(context) {
		"use strict";  //$NON-NLS-0$
		
		return {
			'BinaryExpression' : function(node) {
				if(node.left.type === 'Identifier' && node.left.name === 'NaN') {
					context.report(node.left, 'Use the isNaN function to compare with NaN.', null, node.left);
				} else if(node.right.type === 'Identifier' && node.right.name === 'NaN') {
					context.report(node.right, 'Use the isNaN function to compare with NaN.', null, node.right);
				}
			}
		};
	};
	return module.exports;
}));
