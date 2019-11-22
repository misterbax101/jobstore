import React from 'react';
import { Card, CardBody, Label, Col, FormGroup, Row, InputGroup, InputGroupAddon } from 'reactstrap';

import resouces from './../../translations';
import { VacancyType, VacanciesQuery, VacancyOrderOptions } from '../../types';

interface FiltersPros {
    vacancyTypes: Array<VacancyType>,
    onFiltersChanged: (query: VacanciesQuery) => void;
}

interface FiltersState extends VacanciesQuery {
}

class Filters extends React.Component<FiltersPros, FiltersState> {
    state = {
        vacancyType: undefined,
        order: undefined,
        orderBy: undefined
    }

    handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = target;
        this.setState({ [name]: value })
        this.props.onFiltersChanged({ ...this.mapQuery(), [name]: value });
    }

    mapQuery(): VacanciesQuery {
        const { vacancyType, orderBy, order } = this.state;
        return {
            order,
            orderBy,
            vacancyType,
        }
    }

    renderSelect() {
        const { vacancyTypes } = this.props;
        const { vacancyType: typeId } = this.state;
        const { fields: fieldsResouces } = resouces.addVacancy;
        return (
            <Row>
                <Label>{fieldsResouces.type.label}</Label>
                <select
                    name="vacancyType"
                    value={typeId}
                    onChange={this.handleChange}
                    className="form-control">
                    <option value="">{fieldsResouces.type.emptyOption}</option>
                    {vacancyTypes.map(type =>
                        <option key={type.id} value={type.id} label={type.title}></option>)}
                </select>
            </Row>
        );
    }

    renderOrderOptions() {
        const { orderBy, order } = this.state;
        const { fields: fieldsResouces } = resouces.addVacancy;
        return (
            <Row>
                <Label>OrderBy</Label>
                <InputGroup>
                    <select
                        name="orderBy"
                        value={orderBy}
                        onChange={this.handleChange}
                        className="form-control">
                        <option value="">{fieldsResouces.type.emptyOption}</option>
                        <option value="Title">Title</option>
                        <option value="CompanyName">Company Name</option>
                        <option value="SalaryValue">Salary</option>
                        <option value="CreatedDate">Date</option>
                    </select>
                    <InputGroupAddon addonType='append'>
                        <select
                            name="order"
                            value={order}
                            onChange={this.handleChange}
                            className="form-control"
                            style={{
                                borderTopLeftRadius: '0',
                                borderBottomLeftRadius: '0'
                            }}>
                            <option value="asc">A-Z</option>)
                            <option value="desc">Z-A</option>)
                                </select>
                    </InputGroupAddon>
                </InputGroup>
            </Row>
        );
    }

    render() {
        return (
            <Card>
                <CardBody>
                    {this.renderSelect()}
                    {this.renderOrderOptions()}
                </CardBody>
            </Card>
        );
    }
}

export default Filters;