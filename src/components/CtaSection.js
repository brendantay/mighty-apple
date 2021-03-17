import React from 'react';
import _ from 'lodash';

import {classNames, withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class CtaSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let bg_color = _.get(section, 'bg_color', null) || 'none';
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--cta">
              <div className="container container--lg">
                <div className={classNames({'section__bg': bg_color !== 'none'})}>
                  <div className={classNames({'grid': _.get(section, 'image', null)})}>
                    {_.get(section, 'image', null) && (
                    <div className="section__image cell">
                      <img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} />
                    </div>
                    )}
                    <div className={classNames('section__content', {'cell': _.get(section, 'image', null)})}>
                      {_.get(section, 'title', null) && (
                      <h2 className="section__title">{_.get(section, 'title', null)}</h2>
                      )}
                      {_.get(section, 'content', null) && (
                      <div className="section__body text-block">
                        {markdownify(_.get(section, 'content', null))}
                      </div>
                      )}
                      {_.get(section, 'actions', null) && (
                      <div className="section__actions button-group">
                        <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                      </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
