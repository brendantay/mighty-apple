import React from 'react';
import _ from 'lodash';

import {markdownify, withPrefix} from '../utils';

export default class ContentSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--text">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title line-top">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="section__subtitle">{_.get(section, 'subtitle', null)}</p>
                )}
                {_.get(section, 'content', null) && (
                <div className="section__body text-block">
                  {markdownify(_.get(section, 'content', null))}
                </div>
                )}
                {_.get(section, 'image', null) && (
                <figure className="section__image">
                  <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                </figure>
                )}
              </div>
            </section>
        );
    }
}
