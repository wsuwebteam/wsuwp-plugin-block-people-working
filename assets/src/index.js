const { registerBlockType } = wp.blocks;

import './style.scss';
import Edit from './edit';

registerBlockType('create-block/myblock', {
    title: 'People',
    icon: 'groups',
    category: 'common',
    attributes: {
        count: {
            type: 'string',
            default: '10',
        },
        page: {
            type: 'integer',
            default: '1',
        },
        nid: {
            type: 'string',
            default: '',
        },
        university_category: {
            type: 'string',
            default: '',
        },
        university_location: {
            type: 'string',
            default: '',
        },
        university_organization: {
            type: 'string',
            default: ''
        },
        size: {
            type: 'string',
            default: 'medium'
        },
    },
    edit: Edit,
    save: function(){
        return null;
    }
});
