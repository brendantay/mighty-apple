import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';

import {Layout} from '../components/index';
import {withPrefix, htmlToReact} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <article className="post">
              <header className="post__header">
                <div className="container container--md">
                  <h1 className="post__title line-top">{_.get(this.props, 'pageContext.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle', null) && (
                  <div className="post__subtitle">
                    {_.get(this.props, 'pageContext.frontmatter.subtitle', null)}
                  </div>
                  )}
                </div>
              </header>
              {_.get(this.props, 'pageContext.frontmatter.image', null) && (
              <div className="post__image">
                <div className="container container--lg">
                  <img src={withPrefix(_.get(this.props, 'pageContext.frontmatter.image', null))} alt={_.get(this.props, 'pageContext.frontmatter.image_alt', null)} />
                </div>
              </div>
              )}
              <div className="post__body text-block">
                <div className="container container--md">
                  {htmlToReact(_.get(this.props, 'pageContext.html', null))}
                </div>
              </div>
            </article>
            </Layout>
        );
    }
}
