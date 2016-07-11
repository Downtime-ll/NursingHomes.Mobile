import t from 'tcomb-form-native/lib';
import i18n from 'tcomb-form-native/lib/i18n/en';
import templates from './templates';
import stylesheet from 'tcomb-form-native/lib/stylesheets/bootstrap';

t.form.Form.templates = templates;
t.form.Form.stylesheet = stylesheet;
t.form.Form.i18n = i18n;

t.form.Form.defaultProps = {
  templates: t.form.Form.templates,
  stylesheet: t.form.Form.stylesheet,
  i18n: t.form.Form.i18n
};

export default t;
