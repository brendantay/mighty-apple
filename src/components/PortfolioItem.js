import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class PortfolioItem extends React.Component {
    render() {
        let project = _.get(this.props, 'project_page', null);
        return (
            <article className="cell project-card">
              <Link to={withPrefix(_.get(project, 'url', null))} className="project-card__link">
                {_.get(project, 'frontmatter.thumb_image', null) && (
                <div className="project-card__image">
                  <img src={withPrefix(_.get(project, 'frontmatter.thumb_image', null))} alt={_.get(project, 'frontmatter.thumb_image_alt', null)} />
                </div>
                )}
                <header className="project-card__header">
                  <h3 className="project-card__title">{_.get(project, 'frontmatter.title', null)}</h3>
                  {_.get(project, 'frontmatter.subtitle', null) && (
                  <div className="project-card__subtitle">
                    {_.get(project, 'frontmatter.subtitle', null)}
                  </div>
                  )}
                </header>
              </Link>
            </article>
        );
    }
}
