let formfields = [
    'FormfieldMockup',
    'Color',
    'DateTime',
    'Number',
    'Password',
    'Slug',
    'Text',
];

formfields.forEach(function (formfield) {
    if (formfield.startsWith('Formfield')) {
        Vue.component(kebab_case(formfield), require('../components/Formfields/'+formfield).default);
    } else {
        Vue.component('formfield-'+kebab_case(formfield), require('../components/Formfields/'+formfield).default);
    }
});