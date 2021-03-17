import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix} from '../utils';

export default class ImageSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let section_width = _.get(section, 'width', null) || 'regular';
        return (
            <figure className={classNames('image-block', 'container', {'container--md': section_width === 'regular', 'container--lg': section_width === 'wide'})}>
              {_.get(section, 'image', null) && (
              <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
              )}
              {_.get(section, 'caption', null) && (
              <figcaption className="image-block__caption">
                {_.get(section, 'caption', null)}
              </figcaption>
              )}
            </figure>
        );
    }
}
