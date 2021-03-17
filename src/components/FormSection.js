import React from 'react';
import _ from 'lodash';

import {classNames, markdownify} from '../utils';
import FormField from './FormField';

export default class FormSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let has_text = false;
        if (((_.get(section, 'title', null) || _.get(section, 'subtitle', null)) || _.get(section, 'content', null))) {
             has_text = true;
        }
        return (
            <React.Fragment>
                <section id={_.get(section, 'section_id', null)} className="section section--form">
                  <div className="container container--lg">
                    <div className={classNames({'grid': has_text})}>
                      {has_text && (
                      <div className="section__content cell">
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
                      </div>
                      )}
                      <div className={classNames('section__form-container', {'cell': has_text})}>
                        <form name={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null)} {...(_.get(section, 'form_action', null) ? ({action: _.get(section, 'form_action', null)}) : null)}method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                          <div className="screen-reader-text">
                            <label id={_.get(section, 'form_id', null) + '-bot-label'}>Don't fill this out if you're human: <input
                                aria-labelledby={_.get(section, 'form_id', null) + '-bot-label'} name="bot-field" /></label>
                          </div>
                          <input type="hidden" aria-label={_.get(section, 'form_id', null) + '-name'} name="form-name" value={_.get(section, 'form_id', null)} />
                          {_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                          <FormField key={field_idx} {...this.props} field={field} section={section} />
                          ))}
                          <div className="form-submit">
                            <button type="submit" className="button button--primary">{_.get(section, 'submit_label', null)}</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
            </React.Fragment>
        );
    }
}
