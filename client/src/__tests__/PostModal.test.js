import { mount } from 'enzyme'
import React from "react"

import PostModal from '../components/pages/Projects/PostModal';

import { authstore } from '../stores/authStore';
import { projectstore } from '../stores/projectStore';

describe('PostModal', () => {

    it("modal has hidden class by default", () => {

        const authStore = new authstore();
        const projectStore = new projectstore();

        const wrapper = mount(<PostModal authStore={authStore} projectStore={projectStore} />);

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(true);
    });

    it('modal removes hidden class when times symbol is clicked', () => {

        const authStore = new authstore();
        const projectStore = new projectstore();

        const wrapper = mount(<PostModal authStore={authStore} projectStore={projectStore} />);

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(true);

        wrapper.find('.close-icon').simulate('click');

        expect(wrapper.find('.modal').hasClass('hidden')).toBe(false);

    });
});