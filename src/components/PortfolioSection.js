import React from 'react';
import _ from 'lodash';

import {getPages, Link, withPrefix} from '../utils';
import PortfolioItem from './PortfolioItem';

export default class PortfolioSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let layout_style = _.get(section, 'layout_style', null) || 'mosaic';
        let projects_sorted = _.orderBy(getPages(this.props.pageContext.pages, '/portfolio'), 'frontmatter.date', 'desc');
        let projects_recent = projects_sorted.slice(0, _.get(section, 'projects_number', null));
        let project_len = _.size(projects_recent);
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--portfolio">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title line-top">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="section__subtitle">{_.get(section, 'subtitle', null)}</p>
                )}
                <div className={'grid portfolio-feed portfolio-feed--' + layout_style}>
                  {
                  _.map(projects_recent, (project, project_idx) => (
                    (((project_idx === project_len - 1) && _.get(section, 'view_all_label', null)) && _.get(section, 'view_all_url', null)) ? (
                    <article key={project_idx} className="cell project-card">
                      <Link to={withPrefix(_.get(section, 'view_all_url', null))} className="project-card__view-all">
                        {_.get(project, 'frontmatter.thumb_image', null) && (
                        <div className="project-card__image">
                          <img src={withPrefix(_.get(project, 'frontmatter.thumb_image', null))} alt={_.get(project, 'frontmatter.thumb_image_alt', null)} />
                        </div>
                        )}
                        <span className="project-card__button">{_.get(section, 'view_all_label', null)}</span>
                      </Link>
                    </article>
                    ) : 
                      <PortfolioItem key={project_idx + '.1'} {...this.props} project_page={project} />
                  ))}
                </div>
              </div>
            </section>
        );
    }
}
