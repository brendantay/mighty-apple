import React from 'react';
import _ from 'lodash';

import {withPrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class GridSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let col_number = _.get(section, 'col_number', null) || 'three';
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--grid">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title line-top">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="section__subtitle">{_.get(section, 'subtitle', null)}</p>
                )}
                {_.get(section, 'grid_items', null) && (
                <div className={'grid grid--col-' + col_number}>
                  {_.map(_.get(section, 'grid_items', null), (item, item_idx) => (
                  <div key={item_idx} className="cell card">
                    {_.get(item, 'image', null) && (
                    <div className="card__image">
                      <img src={withPrefix(_.get(item, 'image', null))} alt={_.get(item, 'image_alt', null)} />
                    </div>
                    )}
                    {_.get(item, 'title', null) && (
                    <h3 className="card__title">{_.get(item, 'title', null)}</h3>
                    )}
                    {_.get(item, 'subtitle', null) && (
                    <div className="card__subtitle">{_.get(item, 'subtitle', null)}</div>
                    )}
                    {_.get(item, 'content', null) && (
                    <div className="card__body">
                      {markdownify(_.get(item, 'content', null))}
                    </div>
                    )}
                    {_.get(item, 'actions', null) && (
                    <div className="card__actions button-group">
                      <CtaButtons {...this.props} actions={_.get(item, 'actions', null)} />
                    </div>
                    )}
                  </div>
                  ))}
                </div>
                )}
              </div>
            </section>
        );
    }
}
