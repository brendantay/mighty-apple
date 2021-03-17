import React from 'react';
import _ from 'lodash';

import {htmlToReact} from '../utils';
import ActionLink from './ActionLink';
import Action from './Action';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <div className="container container--lg">
                <div className="site-footer__inside">
                  <div className="site-footer__info">
                    {_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null) && (
                    <span className="site-footer__copyright">{htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content', null))}</span>
                    )}
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
                      <ActionLink key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>
                  {_.get(this.props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
                  <div className="site-footer__social">
                    {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.social_links', null), (action, action_idx) => (
                      <Action key={action_idx} {...this.props} action={action} />
                    ))}
                  </div>
                  )}
                </div>
              </div>
            </footer>
        );
    }
}
