import React from 'react';
import _ from 'lodash';

import {getPages} from '../utils';
import BlogFeedItem from './BlogFeedItem';
import CtaButtons from './CtaButtons';

export default class PostsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let col_number = _.get(section, 'col_number', null) || 'three';
        let posts_sorted = _.orderBy(getPages(this.props.pageContext.pages, '/blog'), 'frontmatter.date', 'desc');
        let recent_posts = posts_sorted.slice(0, _.get(section, 'posts_number', null));
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--posts">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title line-top">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="section__subtitle">{_.get(section, 'subtitle', null)}</p>
                )}
                <div className={'grid post-feed post-feed--col-' + col_number}>
                  {_.map(recent_posts, (post, post_idx) => (
                    <BlogFeedItem key={post_idx} {...this.props} post_page={post} />
                  ))}
                </div>
                {_.get(section, 'actions', null) && (
                <div className="section__actions button-group">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}
              </div>
            </section>
        );
    }
}
