import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Action from './Action';

export default class Header extends React.Component {
    render() {
        return (
            <header id="masthead" className="site-header container">
              <nav className="navbar" aria-label="Main Navigation">
                {_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null) ? (
                <div className="navbar__logo">
                  <Link to={withPrefix('/')}><img src={withPrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo', null))} alt={_.get(this.props, 'pageContext.site.siteMetadata.header.logo_alt', null)} /></Link>
                </div>
                ) : 
                <div className="navbar__title">
                  <Link to={withPrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title', null)}</Link>
                </div>
                }
                {_.get(this.props, 'pageContext.site.siteMetadata.header.has_nav', null) && (<React.Fragment>
                <button id="navbar__open" className="navbar__toggle js-nav-toggle"><span className="screen-reader-text">Open Menu</span><span className="icon-menu" aria-hidden="true" /></button>
                <div className="navbar__menu-container">
                  <div className="navbar__scroller">
                    <button id="navbar__close" className="navbar__toggle js-nav-toggle"><span className="screen-reader-text">Close Menu</span><span className="icon-close" aria-hidden="true" /></button>
                    <ul className="navbar__menu menu">
                      {_.map(_.get(this.props, 'pageContext.site.siteMetadata.header.nav_links', null), (action, action_idx) => {
                          let pageUrl = _.trim(_.get(this.props, 'pageContext.url', null), '/');
                          let actionUrl = _.trim(_.get(action, 'url', null), '/');
                          return (
                          <li key={action_idx} className={classNames('menu__item', {'menu__item--current': pageUrl === actionUrl, 'menu__item--button': _.get(action, 'style', null) !== 'link'})}>
                            <Action {...this.props} action={action} />
                          </li>
                          )
                      })}
                    </ul>
                  </div>
                </div>
                </React.Fragment>)}
              </nav>
            </header>
        );
    }
}
