import React from 'react';
import { shallow, mount } from 'enzyme';
import { Pagination } from 'reactstrap';

import Paginator, { PaginatorProps } from './Paginator';

const defaultProps: PaginatorProps =
{
    currentPage: 1,
    itemsCount: 15,
    pageSize: 5,
    onPageChange: (page: number) => { }
}

describe('<Paginator />', () => {
    it('should render correctly', () => {

        let wrapper = shallow(<Paginator {...defaultProps} />)

        expect(wrapper.getElements()).toMatchSnapshot();
    })

    it('should has class', () => {

        const className = 'test';
        let wrapper = mount(
            <Paginator
                {...defaultProps}
                className={className} />);

        expect(wrapper.find('ul').hasClass(className)).toBeTruthy();
    })

    it('should not render', () => {

        let wrapper = mount(
            <Paginator
                {...defaultProps} itemsCount={0} />);

        expect(wrapper.find('ul').length).toBe(0);
    })

    it('should render 3 pages', () => {

        let wrapper = mount(
            <Paginator
                {...defaultProps} itemsCount={3} pageSize={1} />);

        expect(wrapper.find('li').length).toBe(5);
    })

    it('should select second page', () => {

        let wrapper = mount(
            <Paginator
                {...defaultProps}
                itemsCount={3}
                pageSize={1}
                currentPage={2} />);

        expect(wrapper.find('li').at(2).hasClass('active')).toBeTruthy();
    })

    it('prev page should disabled', () => {

        let wrapper = mount(
            <Paginator
                {...defaultProps}
                itemsCount={3}
                pageSize={1}
                currentPage={1} />);

        expect(wrapper.find('li').first().hasClass('disabled')).toBeTruthy();
    })

    it('next page should disabled', () => {

        let wrapper = mount(
            <Paginator
                {...defaultProps}
                itemsCount={3}
                pageSize={1}
                currentPage={3} />);

        expect(wrapper.find('li').last().hasClass('disabled')).toBeTruthy();
    })

    it('should go to next page', () => {

        const onPageChangeMock = jest.fn((page: number) => {});
        let wrapper = mount(
            <Paginator
                {...defaultProps}
                itemsCount={3}
                pageSize={1}
                currentPage={1}
                onPageChange={onPageChangeMock} />);

        const pageItem = wrapper
            .find('li')
            .last();

        pageItem.simulate('click');

        expect(onPageChangeMock).toBeCalled();
        expect(onPageChangeMock).toBeCalledWith(2);
        expect(wrapper.find('li').at(2).hasClass('active')).toBeTruthy();
    })
})
