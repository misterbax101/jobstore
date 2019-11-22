import React from 'react';
import { Row, Col } from 'reactstrap';

import { VacancyModel, VacancyType, VacanciesQuery } from '../../types';
import VacanciesListItem from './VacanciesListItem';
import Filters from './Filters';
import Paginator from '../../components/base/Paginator';
import Spinner from '../../components/base/Spinner';

interface VacanciesListProps {
    vacancies: Array<VacancyModel>,
    loading: boolean,
    pagesCount: number,
    vacancyTypes: Array<VacancyType>
    getVacancies: (pageIndex?: number, query?: VacanciesQuery) => Promise<void>,
    getVacancyTypes: () => void
}

class VacanciesList extends React.Component<VacanciesListProps> {
    componentDidMount() {
        const { getVacancies, getVacancyTypes, vacancyTypes } = this.props;
        getVacancies();
        if (!vacancyTypes || vacancyTypes.length === 0) {
            getVacancyTypes();
        }
    }

    renderList() {
        return this.props.vacancies.map(vacancy =>
            <VacanciesListItem
                key= {vacancy.id}
                className="mb-1"
                vacancy={vacancy} />);
    }

    filtersChanged = (query: VacanciesQuery) => {
        this.props.getVacancies(1, query);
    }

    render() {
        const { pagesCount, getVacancies, vacancyTypes, loading } = this.props;

        return (
            <Row>
                <Col md={{ size: 3 }} className="p-0">
                    <Filters
                        vacancyTypes={vacancyTypes}
                        onFiltersChanged={this.filtersChanged}
                    />
                </Col>
                <Col>
                    <Spinner loading={loading} />
                    {this.renderList()}
                    <Paginator
                        className="justify-content-center mt-1 mb-1"
                        pagesCount={pagesCount}
                        onPageChange={(page: number) => getVacancies(page)} />
                </Col>
            </Row>
        )
    }
}

export default VacanciesList;


