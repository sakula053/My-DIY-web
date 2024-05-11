/*
 * Copyright 2015, Yahoo Inc.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

import {Component, Children, PropTypes} from 'react';
import {intlShape} from '../types';
import {invariantIntlContext} from '../utils';

export default class MessagesProvider extends Component {
    constructor(props, context) {
        super(props, context);
        invariantIntlContext(context);
    }

    getChildContext() {
        return {
            intl: {
                ...this.context.intl,
                messages: this.props.messages,
            },
        };
    }

    render() {
        return Children.only(this.props.children);
    }
}

MessagesProvider.displayName = 'MessagesProvider';

MessagesProvider.contextTypes = {
    intl: intlShape,
};

MessagesProvider.propTypes = {
    messages: PropTypes.object,
};

MessagesProvider.defaultProps = {
    messages: {},
};
