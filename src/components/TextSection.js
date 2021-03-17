import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class TextSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <div className="text-block container container--md">
              {markdownify(_.get(section, 'content', null))}
            </div>
        );
    }
}
