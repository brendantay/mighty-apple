import React from 'react';
import _ from 'lodash';

import {withPrefix} from '../utils';

export default class TestimonialsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="section section--testimonials">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h2 className="section__title line-top">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="section__subtitle">{_.get(section, 'subtitle', null)}</p>
                )}
                {_.get(section, 'testimonials', null) && (
                <div className="grid">
                  {_.map(_.get(section, 'testimonials', null), (testimonial, testimonial_idx) => (
                  <div key={testimonial_idx} className="cell">
                    <blockquote className="testimonial">
                      <p className="testimonial__content">{_.get(testimonial, 'content', null)}</p>
                      <footer className="testimonial__footer">
                        {_.get(testimonial, 'avatar', null) && (
                        <img className="testimonial__avatar" src={withPrefix(_.get(testimonial, 'avatar', null))} alt={_.get(testimonial, 'avatar_alt', null)}/>
                        )}
                        <div className="testimonial__details">
                          <div className="testimonial__author">{_.get(testimonial, 'author', null)}</div>
                          {_.get(testimonial, 'position', null) && (
                          <div className="testimonial__position">{_.get(testimonial, 'position', null)}</div>
                          )}
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                  ))}
                </div>
                )}
              </div>
            </section>
        );
    }
}
